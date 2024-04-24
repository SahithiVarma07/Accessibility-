import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  const handleStaffLoginPress = () => {
    navigation.navigate('StaffLog');
  };

  const handleFamilyLoginPress = () => {
    navigation.navigate('FamilyLog');
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/welcome-illustration.png')} // replace with your local image path
          style={styles.illustration}
        />
      </View>
      <View style={styles.loginContainer}>
        <Text style={styles.welcomeText}>Welcome</Text>
        <TouchableOpacity style={styles.loginButton} onPress={handleStaffLoginPress}>
          <Text style={styles.loginButtonText}>Staff Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginButton} onPress={handleFamilyLoginPress}>
          <Text style={styles.loginButtonText}>Family Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white', 
  },
  imageContainer: {
    flex: 1,
    backgroundColor: 'white', 
  },
  illustration: {
    width: '100%', 
    height: '70%', 
    marginTop: '10%',
  },

  loginContainer: {
    flex: 1,
    backgroundColor: '#2f6be4', 
    marginTop: '-30%',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    
    dowColor: 'black',
    shadowOpacity: 0.3,
    shadowRadius: 8,
    alignItems: 'center',
  },

  welcomeText: {
    fontSize: 48,
    color: 'white',
    marginTop: '25%',
    marginBottom: '5%',
  },
  loginButton: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 25,

    marginVertical: '2%',
    width: '55%',
  },
  loginButtonText: {
    color: 'black', 
    fontSize: 18,
    marginLeft: '26%',
  },
});

export default WelcomeScreen;
