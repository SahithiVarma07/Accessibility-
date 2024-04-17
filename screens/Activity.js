import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native';
import { FontAwesome, AntDesign } from '@expo/vector-icons'; 
import * as ImagePicker from 'expo-image-picker';

const Post = ({ photo, caption }) => {
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    console.log("Loading photo at URI:", photo); // Debug: log the photo URI
  }, [photo]);

  return (
    <View style={styles.postContainer}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: photo }} style={styles.photo} />
        <TouchableOpacity style={styles.likeButton} onPress={() => setLiked(!liked)}>
          <AntDesign name="heart" size={24} color={liked ? "red" : "gray"} />
        </TouchableOpacity>
      </View>
      <Text style={styles.caption}>{caption}</Text>
    </View>
  );
};

const Activity = () => {
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
          photo: result.uri,
          caption: 'New Photo',
        };
        setPosts(currentPosts => [...currentPosts, newPost]);
        console.log("New photo added:", result.uri); // Debug: confirm URI is added
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.activityScrollContainer}>
        {posts.map((item, index) => (
          <Post key={index} {...item} />
        ))}
      </ScrollView>
      <TouchableOpacity style={styles.cameraButton} onPress={openCamera}>
        <FontAwesome name="camera" size={30} color="white" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
  },
  activityScrollContainer: {
    justifyContent: 'center',
  },
  postContainer: {
    borderRadius: 10,
    padding: 5,
    marginVertical: 5,
    alignItems: 'center',
    width: '90%',
    alignSelf: 'center',
  },
  imageContainer: {
    backgroundColor: '#6699CC',
    borderRadius: 10,
    width: '100%',
    padding: 15,
    alignItems: 'center',
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
    padding: 10,
    marginTop: 5,
    fontStyle: 'italic',
  },
  cameraButton: {
    position: 'absolute',
    right: 20,
    bottom: 70,
    backgroundColor: 'blue',
    borderRadius: 50,
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Activity;
