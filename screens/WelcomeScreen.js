import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  const handleStaffLoginPress = () => {
    navigation.navigate('StaffLogin');
  };

  const handleFamilyLoginPress = () => {
    navigation.navigate('FamilyLogin');
  };


  //add styling-- the curve to the top
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/welcome-illustration.png')} // replace with your local image path
        style={styles.illustration}
        resizeMode="contain"
      />
      <Text style={styles.welcomeText}>Welcome</Text>
      <TouchableOpacity style={styles.loginButton} onPress={handleStaffLoginPress}>
        <Text style={styles.loginButtonText}>Staff Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginButton} onPress={handleFamilyLoginPress}>
        <Text style={styles.loginButtonText}>Family Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'top',
    alignItems: 'center',
    backgroundColor: '#2f6be4', 
  },
  illustration: {
    width: '100%', 
    height: '50%', 
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 30,
  },
  loginButton: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 25,
    marginVertical: 10,
    width: '60%', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#2f6be4', 
    fontSize: 18,
  },
});

export default WelcomeScreen;
