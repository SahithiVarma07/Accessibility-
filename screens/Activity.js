import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native';
import { FontAwesome, AntDesign } from '@expo/vector-icons'; 
import * as ImagePicker from 'expo-image-picker';

const images = {
  'photo1.jpg': require('../assets/photo1.jpg'),
  'photo2.jpg': require('../assets/photo2.jpg'),
  'photo3.jpg': require('../assets/photo3.jpg'), // Add more images if needed
};

const Post = ({ photo, caption }) => {
  const [liked, setLiked] = useState(false);

  return (
    <View style={styles.postContainer}>
      <View style={styles.imageContainer}>
        <Image source={images[photo]} style={styles.photo} />
        <TouchableOpacity style={styles.likeButton} onPress={() => setLiked(!liked)}>
          <AntDesign name="heart" size={24} color={liked ? "red" : "gray"} />
        </TouchableOpacity>
      </View>
      <Text style={styles.caption}>{caption}</Text>
    </View>
  );
};

const Activity = () => {
  const posts = [
    { photo: 'photo1.jpg', caption: 'Caption 1' },
    { photo: 'photo2.jpg', caption: 'Caption 2' },
    { photo: 'photo3.jpg', caption: 'Caption 3' }, // Add more posts if needed
  ];

  const openCamera = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      alert('Sorry, we need camera permissions to make this work!');
    } else {
      let result = await ImagePicker.launchCameraAsync();
      if (!result.cancelled) {
        console.log(result.uri);
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
        <FontAwesome name="plus" size={30} color="white" />
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
    flexDirection: 'column',
    justifyContent: 'center',
  },
  postContainer: {
    borderRadius: 10,
    padding: 5, // Reduce padding to close the gap between bubbles
    marginVertical: 5, // Reduce vertical margin to close the gap between bubbles
    alignItems: 'center',
    width: '90%', // Adjust the width to fit aesthetically in the iPhone 14 screen
    alignSelf: 'center', // Center the post container
  },
  imageContainer: {
    backgroundColor: '#6699CC',
    borderRadius: 10,
    width: '100%',
    padding: 15, // Increase padding to create a larger border around the image
    alignItems: 'center',
  },
  photo: {
    width: '100%',
    height: 220, // Increase the height of the image
    borderRadius: 10,
  },
  likeButton: {
    position: 'absolute',
    right: 15, // Increase the space for the like button
    bottom: 15, // Increase the space for the like button
    backgroundColor: 'white', // Make the like button a white circle
    borderRadius: 15, // Add a border radius to the like button
    padding: 5, // Add padding to the like button
  },
  caption: {
    backgroundColor: 'white',
    padding: 10,
    marginTop: 5, // Reduce the space between the blue bubble and the caption input box
    alignSelf: 'stretch',
    fontStyle: 'italic', // Make the caption italic
  },
  cameraButton: {
    position: 'absolute',
    right: 20,
    bottom: 70, // Move the upload button a little higher
    backgroundColor: 'blue',
    borderRadius: 50,
    width: 70, // Make the upload button larger
    height: 70, // Make the upload button larger
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Activity;
