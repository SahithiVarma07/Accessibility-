import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const DashboardHeader = () => {
  return (
    <View style={styles.header}>

      <Image
        source={require('../assets/hamburger.png')} // Replace with the actual path to your left icon
        style={styles.leftIcon}
      />
      
      <Text style={styles.textWrapper}>Dashboard</Text>

      <Image
        source={require('../assets/user_icon.png')} // Replace with the actual path to your left icon
        style={styles.rightIcon}
      />

    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#2f6be4',
    borderRadius: 10,
    height: 143,
    width: 375,
    position: 'relative',
  },
  leftIcon: {
    position: 'absolute',
    left: 30,
    top: 80, 
    width: 35, 
    height: 35, 
  },
  rightIcon: {
    position: 'absolute',
    right: 30, 
    top: 80, 
    width: 35, 
    height: 35, 
  },
  textWrapper: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
    top: 80,
    textAlign: 'center',
  },
});

export default DashboardHeader;