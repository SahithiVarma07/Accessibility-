import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, Image, Modal, TextInput, Dimensions } from 'react-native';
import { SimpleLineIcons, FontAwesome, AntDesign } from '@expo/vector-icons'; 
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native';
import { db } from '../Firebase';
import { collection, deleteDoc, doc, getDocs, addDoc, serverTimestamp, query, orderBy } from 'firebase/firestore';
import { GestureHandlerRootView, Swipeable } from 'react-native-gesture-handler';

const Post = ({ id, photo, caption, onDelete }) => {
  const [liked, setLiked] = useState(false);
  
  useEffect(() => {
    console.log("Loading photo at URI:", photo);
  }, [photo]);

  const renderRightActions = () => {
    return (
      <TouchableOpacity onPress={() => onDelete(id)} style={styles.deleteButton}>
        <Text style={styles.deleteButtonText}>Delete</Text>
      </TouchableOpacity>
    );
  };
  
  return (
    <View style={styles.postContainer}>
      <View style={styles.postContainerShadow}>
        <Swipeable renderRightActions={renderRightActions}>
          <View style={styles.imageContainer}>
            <Image source={{ uri: photo }} style={styles.photo} />
          </View>
        </Swipeable>
      </View>
      <Text style={styles.caption}>{caption}</Text>
    </View>
  );
};
const Post = ({ id, photo, caption, onDelete }) => {
  const renderRightActions = (progress, dragX) => {
    return (
      <TouchableOpacity onPress={() => onDelete(id)} style={styles.deleteButton}>
        <Text style={styles.deleteButtonText}>Delete</Text>
      </TouchableOpacity>
    );
  };
  
  // Assuming the width of each post is 90% of the container as defined in your styles
  const screenWidth = Dimensions.get('window').width;
  const swipeThreshold = screenWidth * 0.9 * 0.3; // 30% of the post's width

  return (
    <View style={styles.postContainer}>
      <Swipeable
        renderRightActions={renderRightActions}
        friction={2} // Adjust this value as needed to modify the swipe feel
        rightThreshold={swipeThreshold} // Set the swipe threshold
      >
        <View style={styles.imageContainer}>
          <Image source={{ uri: photo }} style={styles.photo} />
        </View>
        <Text style={styles.caption}>{caption}</Text>
      </Swipeable>
    </View>
  );
};

const Activity = () => {
  const navigation = useNavigation();

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
              <SimpleLineIcons style={styles.backArrow}  name= "arrow-left" />
            </TouchableOpacity>
            <View style={styles.textContainer}>
              <Text style={styles.activityTitle}>Reading Books</Text>
              <Text style={styles.activityTime}>Thursday, 4/17 @ 9:00 AM</Text>
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
    flex: 1,
    backgroundColor: 'red',
    justifyContent: 'center',
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
