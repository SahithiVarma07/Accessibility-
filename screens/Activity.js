import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
  Modal,
  TextInput,
  Animated
} from 'react-native';
import { SimpleLineIcons, FontAwesome, AntDesign } from '@expo/vector-icons'; 
import * as ImagePicker from 'expo-image-picker';
import { useNavigation, useRoute } from '@react-navigation/native';
import { db } from '../Firebase';
import { collection, deleteDoc, doc, getDocs, addDoc, serverTimestamp, query, orderBy } from 'firebase/firestore';
import { GestureHandlerRootView, Swipeable } from 'react-native-gesture-handler';

const Post = ({ id, photo, caption, onDelete }) => {
  const swipeableRef = useRef(null);

  const handleSwipeRightOpen = () => {
    onDelete(id);
    swipeableRef.current?.close();  // Reset the Swipeable to its closed state
  };

  const renderRightActions = (progress, dragX) => {
    const trans = dragX.interpolate({
      inputRange: [0, 50, 100, 101],
      outputRange: [0, 0.5, 1, 1],
      extrapolate: 'clamp',
    });
    return (
      <TouchableOpacity onPress={() => handleSwipeRightOpen()} style={styles.deleteButton}>
        <Animated.Text style={[styles.deleteButtonText, { transform: [{ translateX: trans }] }]}>Delete</Animated.Text>
      </TouchableOpacity>
    );
  };
  
  return (
    <View style={styles.postContainer}>
      <Swipeable
        friction={1} // Adjust this value as needed to modify the swipe feel
        ref={swipeableRef}
        renderRightActions={renderRightActions}
        onSwipeableRightOpen={handleSwipeRightOpen}
      >
        <View style={styles.imageContainer}>
          <Image source={{ uri: photo }} style={styles.photo} />
        </View>
      </Swipeable>
      <Text style={styles.caption}>{caption}</Text>
    </View>
  );
};

const Activity = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { activityId, activityTitle, activityTime, activityPhoto } = route.params;

  const [posts, setPosts] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [newCaption, setNewCaption] = useState('');
  const [newPhotoUri, setNewPhotoUri] = useState('');

  useEffect(() => {
    // Function to fetch posts from Firestore
    const fetchPosts = async () => {
      const postsQuery = query(collection(db, "posts"), orderBy("timestamp", "asc"));
      const querySnapshot = await getDocs(postsQuery);
      setPosts(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };

    fetchPosts(); // Fetch posts on component mount
  }, []);

  const deletePost = async (id) => {
    try {
      await deleteDoc(doc(db, 'posts', id));
      // Update the local state to reflect the deletion
      setPosts(currentPosts => currentPosts.filter(post => post.id !== id));
    } catch (error) {
      console.error("Error removing document: ", error);
    }
  };

  const handleAddPost = async () => {
    const newPost = {
      photo: newPhotoUri,
      caption: newCaption,
      timestamp: serverTimestamp(),
    };
  
    try {
      const docRef = await addDoc(collection(db, "posts"), newPost);
      console.log("Document written with ID: ", docRef.id);
      setPosts(currentPosts => [...currentPosts, { ...newPost, id: docRef.id }]);
      setModalVisible(false); // Close the modal
      setNewCaption(''); // Reset the caption input
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const openCamera = async () => {
    try {
      const { status } = await ImagePicker.requestCameraPermissionsAsync();
      if (status !== 'granted') {
        alert('Sorry, we need camera permissions to make this work!');
        return; // Early return if we don't have permission
      }
  
      const result = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [4, 3],
      });
  
      if (!result.cancelled) {
        setNewPhotoUri(result.assets[0].uri);
        setModalVisible(true); // Show the modal to enter caption
      }
    } catch (e) {
      // Handle any errors here, possibly a UI update to inform the user
      console.error("An error occurred while opening the camera", e);
      alert('An error occurred while trying to take a picture.');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <TextInput
                style={styles.modalText}
                onChangeText={setNewCaption}
                value={newCaption}
                placeholder="Enter a caption..."
              />
              <TouchableOpacity style={styles.button} onPress={handleAddPost}>
                <Text style={styles.buttonText}>Add Post</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        <ScrollView contentContainerStyle={styles.activityScrollContainer}>
          <View style={styles.titleContainer}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <SimpleLineIcons style={styles.backArrow} name="arrow-left" />
            </TouchableOpacity>
            <View style={styles.textContainer}>
              <Text style={styles.activityTitle}>{activityTitle}</Text>
              <Text style={styles.activityTime}>{activityTime}</Text>
              {activityPhoto && (
                <Image source={{ uri: activityPhoto }} style={styles.photo} />
              )}
            </View>
          </View>

          {posts.map((item, index) => (
            <Post key={index} {...item} onDelete={deletePost} />
          ))}
        </ScrollView>
        <TouchableOpacity style={styles.cameraButton} onPress={openCamera}>
          <AntDesign name="plus" size={50} color="white" />
        </TouchableOpacity>
      </GestureHandlerRootView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  titleContainer: {
    flexDirection: 'row',
    paddingTop: 15,
    paddingLeft: 20,
  },
  backArrow: {
    fontSize: 45,
    paddingTop: 5,
  },
  textContainer: {
    paddingLeft: 18,
    paddingBottom: 20,
  },
  activityTitle: {
    fontSize: 24,
    paddingBottom: 5,
    color: '#000000'
  },
  activityTime: {
    fontSize: 14,
    color: '#757575',
  },

  activityScrollContainer: {
    justifyContent: 'center',
  },
  postContainer: {
    borderRadius: 10,
    paddingLeft: 10,
    paddingRight: 5,
    marginVertical: 5,
    width: '90%',
    alignSelf: 'center',
  },
  postContainerShadow: {
    shadowColor: 'black',
    shadowOpacity: 0.4,
    shadowRadius: 6,
  },
  imageContainer: {
    backgroundColor: '#88b2ee',
    borderRadius: 10,
    width: '100%',
    //padding: 10,
  },
  photo: {
    width: '100%',
    height: 220,
    borderRadius: 10,
  },
  likeButton: {
    position: 'absolute',
    right: 15,
    bottom: 15,
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 5,
  },
  caption: {
    backgroundColor: 'white',
    fontSize: 16,
    paddingTop: 10,
    paddingVertical: 15,
    paddingLeft: 5
  },

  cameraButton: {
    position: 'absolute',
    right: '8%',
    bottom: '7%',
    borderRadius: 50,
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2656b6',
  },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    width: '100%',
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    backgroundColor: "#2196F3",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },

  deleteButton: {
    backgroundColor: 'red',
    justifyContent: 'center',
    padding: 20,
    alignItems: 'flex-end',
    paddingRight: 20,
    margin: 5,
    borderRadius: 10,
  },
  deleteButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Activity;