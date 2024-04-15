<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
import React from 'react';
import { View, Text } from 'react-native';
=======
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
=======

import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 
import { Camera } from 'expo-camera'; 
import * as ImagePicker from 'expo-image-picker';
import LinearGradient from 'react-native-linear-gradient';

const images = {
  'photo1.jpg': require('../assets/photo1.jpg'),
  'photo2.jpg': require('../assets/photo2.jpg'),
  // add more images if needed
};

const Post = ({ photo, caption, activityName, dateTime }) => {
  return (
    <View style={styles.postContainer}>
      <Text style={styles.activityName}>{activityName}</Text>
      <Text style={styles.dateTime}>{dateTime}</Text>
      <Image source={images[photo]} style={styles.photo} />
      <Text style={styles.caption}>{caption}</Text>
    </View>
  );
};

const Activity = () => {
  // replace with your actual data
  const posts = [
    { photo: 'photo1.jpg', caption: 'Caption 1', activityName: 'Activity 1', dateTime: 'Date/Time 1' },
    { photo: 'photo2.jpg', caption: 'Team time with the group!', activityName: 'Activity 2', dateTime: 'Date/Time 2' },
  ];

  const openCamera = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      alert('Sorry, we need camera permissions to make this work!');
    } else {
      let result = await ImagePicker.launchCameraAsync();
      if (!result.cancelled) {
        // handle the captured image here
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
        <FontAwesome name="camera" size={24} color="white" />
      </TouchableOpacity>
    </SafeAreaView>
>>>>>>> Stashed changes
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
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.activityScrollContainer}>
        {posts.map((item, index) => (
          <Post key={index} {...item} />
        ))}
      </ScrollView>
      <TouchableOpacity style={styles.cameraButton} onPress={openCamera}>
        <FontAwesome name="camera" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
<<<<<<< Updated upstream
    backgroundColor: '#fff',
=======
    backgroundColor: '#2f6be4', // Same as Dashboard
>>>>>>> Stashed changes
    padding: 10,
  },
  activityScrollContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  postContainer: {
<<<<<<< Updated upstream
    backgroundColor: '#ADD8E6',
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
=======
    backgroundColor: '#f2f2f2', // Same as patientContainer in Dashboard
    borderRadius: 45, // Same as patientContainer in Dashboard
    padding: 20,
    marginVertical: 10,
    shadowColor: 'black', // Same as patientContainer in Dashboard
    shadowOpacity: 0.4, // Same as patientContainer in Dashboard
    shadowRadius: 6, // Same as patientContainer in Dashboard
>>>>>>> Stashed changes
  },
  activityName: {
    fontSize: 18,
    fontWeight: 'bold',
<<<<<<< Updated upstream
  },
  dateTime: {
    fontSize: 14,
    color: '#888',
=======
    color: '#000', // Change text color to black for better readability
  },
  dateTime: {
    fontSize: 14,
    color: '#000', // Change text color to black for better readability
>>>>>>> Stashed changes
    marginBottom: 10,
  },
  photo: {
    width: '100%',
    height: 200,
<<<<<<< Updated upstream
=======
    borderRadius: 10, // Add a border radius to the photo
>>>>>>> Stashed changes
  },
  caption: {
    backgroundColor: '#fff',
    padding: 10,
    marginTop: 5,
<<<<<<< Updated upstream
=======
    fontStyle: 'italic', // Make the caption italic
>>>>>>> Stashed changes
  },
  cameraButton: {
    position: 'absolute',
    right: 20,
    bottom: 20,
<<<<<<< Updated upstream
    backgroundColor: '#2f6be4',
=======
    backgroundColor: '#949494', // Same as handleBar in Dashboard
>>>>>>> Stashed changes
    borderRadius: 50,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
<<<<<<< Updated upstream
    shadowColor: 'black',
    shadowOpacity: 0.4,
    shadowRadius: 6,
  },
});

<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
    shadowColor: 'black', // Same as patientContainer in Dashboard
    shadowOpacity: 0.4, // Same as patientContainer in Dashboard
    shadowRadius: 6, // Same as patientContainer in Dashboard
  },
});


>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
export default Activity;

