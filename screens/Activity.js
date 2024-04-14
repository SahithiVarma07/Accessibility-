<<<<<<< Updated upstream
import React from 'react';
import { View, Text } from 'react-native';
=======

>>>>>>> Stashed changes

import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // import FontAwesome for the camera icon

const Post = ({ photo, caption, activityName, dateTime }) => {
  return (
    <View style={styles.postContainer}>
      <Text style={styles.activityName}>{activityName}</Text>
      <Text style={styles.dateTime}>{dateTime}</Text>
      <Image source={{ uri: photo }} style={styles.photo} />
      <Text style={styles.caption}>{caption}</Text>
    </View>
  );
};

const Activity = () => {
  // replace with your actual data
  const posts = [
    { photo: 'photo1.jpg', caption: 'Caption 1', activityName: 'Activity 1', dateTime: 'Date/Time 1' },
    { photo: 'photo2.jpg', caption: 'Caption 2', activityName: 'Activity 2', dateTime: 'Date/Time 2' },
    // ...
  ];

  const openCamera = () => {
    // implement your camera opening functionality here
    console.log('Open camera');
  };

  return (
<<<<<<< Updated upstream
    <View>
      <Text>Activity Screen</Text>
=======
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.activityScrollContainer}>
        {posts.map((item, index) => (
          <Post key={index} {...item} />
        ))}
      </ScrollView>
      <TouchableOpacity style={styles.cameraButton} onPress={openCamera}>
        <FontAwesome name="camera" size={24} color="white" />
      </TouchableOpacity>
>>>>>>> Stashed changes
    </View>
  );
};

<<<<<<< Updated upstream
=======
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  activityScrollContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  postContainer: {
    backgroundColor: '#ADD8E6',
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
  },
  activityName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  dateTime: {
    fontSize: 14,
    color: '#888',
    marginBottom: 10,
  },
  photo: {
    width: '100%',
    height: 200,
  },
  caption: {
    backgroundColor: '#fff',
    padding: 10,
    marginTop: 5,
  },
  cameraButton: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    backgroundColor: '#2f6be4',
    borderRadius: 50,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOpacity: 0.4,
    shadowRadius: 6,
  },
});

>>>>>>> Stashed changes
export default Activity;

