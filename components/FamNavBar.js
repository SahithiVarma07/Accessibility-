import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons, FontAwesome6 } from '@expo/vector-icons';

const FamNavBar = ({ navigation, patientName, specialIcon }) => {
  // Default color setup
  const defaultColor = "#88b3ee"; // blue
  const specialColor = "#056EEC"; // dark blue


  const getIconColor = (iconName) => {
    return iconName === specialIcon ? specialColor : defaultColor;
  };

  return (
    <View style={styles.navbarContainer}>
      <TouchableOpacity onPress={() => navigation.navigate('FamPatientProfile', { patientName })}>
        <FontAwesome6 name="house" size={40} color={getIconColor('house')} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('FamCalls', { patientName })}>
        <Ionicons name="calendar" size={40} color={getIconColor('calendar')} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('FamMood', { patientName })}>
        <FontAwesome6 name="chart-line" size={40} color={getIconColor('chart-line')} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('FamEditInfo', { patientName })}>
        <Ionicons name="person-sharp" size={40} color={getIconColor('person-sharp')} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navbarContainer: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',

    width: '100%',
    height: '12%',

    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,

    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 10, 
  },
});

export default FamNavBar;