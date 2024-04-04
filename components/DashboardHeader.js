import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const DashboardHeader = () => {
  return (
    <View style={styles.header}>
      {}
      <Text style={styles.textWrapper}>Dashboard</Text>
      {}
      
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#2f6be4',
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
    color: '#fff',
    fontFamily: 'Inter',
    fontSize: 32,
    fontWeight: 'bold',
    position: 'absolute',
    top: 80,
    left: 90,
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