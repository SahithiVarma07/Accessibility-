import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const CameraPage = ({ navigation, route }) => {
  const [image, setImage] = useState(null);
  const [caption, setCaption] = useState('');

  const openCamera = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      alert('Sorry, we need camera permissions to make this work!');
    } else {
      let result = await ImagePicker.launchCameraAsync();
      if (!result.cancelled) {
        setImage(result.uri);
      }
    }
  };

  const uploadPost = () => {
    if (image && caption) {
      route.params.addPost({ photo: image, caption });
      setImage(null);
      setCaption('');
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Open Camera" onPress={openCamera} />
      {image && (
        <>
          <TextInput
            style={styles.input}
            value={caption}
            onChangeText={setCaption}
            placeholder="Enter a caption..."
          />
          <Button title="Upload Post" onPress={uploadPost} />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default CameraPage;
