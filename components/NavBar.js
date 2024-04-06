import React from 'react';
import { View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { Ionicons, FontAwesome5, FontAwesome } from '@expo/vector-icons';

const NavBar = ({ navigation }) => {
  return (
    <View style={styles.navbarContainer}>
      <TouchableOpacity onPress={() => navigation.navigate('Appointments')}>
        <Ionicons name="calendar" size={24} color="grey" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Calls')}>
        <Ionicons name="call" size={24} color="grey" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Analytics')}>
        <FontAwesome5 name="chart-line" size={24} color="grey" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Info')}>
        <FontAwesome name="info-circle" size={24} color="grey" />
      </TouchableOpacity>
    </View>
  );
};

const screenWidth = Dimensions.get('window').width;
const navbarHeight = 60;

const styles = StyleSheet.create({
  navbarContainer: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: screenWidth,
    height: navbarHeight,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 }, 
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 10, 
  },
});

export default NavBar;
