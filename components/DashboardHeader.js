// DashboardHeader.js
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const DashboardHeader = () => {
  return (
    <View style={styles.header}>
      {/* Placeholder for drawer handle, dashboard icon, and patient image. Use Image component */}
      <Text style={styles.textWrapper}>Dashboard</Text>
      {/* Assuming you have these images in your assets folder. Replace 'require' paths with actual paths to your images */}
      
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#A5C9CB', // Replace with the actual color for --variable-collection-teal
    borderRadius: 10,
    height: 143,
    width: 430,
    position: 'relative',
  },
  drawerHandleStroke: {
    height: 3,
    position: 'absolute',
    top: 124,
    left: 176,
    width: 77,
  },
  dashboardIcon: {
    height: 61,
    position: 'absolute',
    top: 56,
    left: 26,
    width: 61,
  },
  textWrapper: {
    color: '#000000',
    fontFamily: 'Inter',
    fontSize: 32,
    fontWeight: 'bold',
    position: 'absolute',
    top: 64,
    left: 107,
    textAlign: 'center',
    width: 218,
  },
  patientImageStroke: {
    height: 61,
    position: 'absolute',
    top: 56,
    left: 344,
    width: 61,
  },
});

export default DashboardHeader;