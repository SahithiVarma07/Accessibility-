import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SimpleLineIcons, FontAwesome, AntDesign } from '@expo/vector-icons'; 
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native';

const Post = ({ photo, caption }) => {
  const [liked, setLiked] = useState(false);
  

  useEffect(() => {
    console.log("Loading photo at URI:", photo);
  }, [photo]);
 
  return (
    <View style={styles.postContainer}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: photo }} style={styles.photo} />
      </View>
      <Text style={styles.caption}>{caption}</Text>
    </View>
  );
};

const Activity = () => {
  const navigation = useNavigation();

  const [posts, setPosts] = useState([]);

  const openCamera = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      alert('Sorry, we need camera permissions to make this work!');
    } else {
      let result = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [4, 3],
      });
      if (!result.cancelled) {
        const newPost = {
          photo: result.assets[0].uri,
          caption: 'New Photo',
        };
        setPosts(currentPosts => [...currentPosts, newPost]);
        console.log("New photo added:", result.assets[0].uri);
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>

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
          <Post key={index} {...item} />
        ))}
      </ScrollView>
      <TouchableOpacity style={styles.cameraButton} onPress={openCamera}>
        <AntDesign name="plus" size={50} color="white" />
      </TouchableOpacity>
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
    marginVertical: 5,
    width: '90%',
    alignSelf: 'center',

  },
  imageContainer: {
    backgroundColor: '#88b2ee',
    borderRadius: 10,
    width: '100%',

    shadowColor: 'black',
    shadowOpacity: 0.4,
    shadowRadius: 6,
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
    right: 20,
    bottom: 70,
    borderRadius: 50,
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2656b6',
  },
});

export default Activity;
