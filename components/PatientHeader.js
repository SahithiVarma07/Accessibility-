import React from 'react';
import { Ionicons, FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const PatientHeader = ( { patientName, navigation, leftIconName, rightIconName } ) => {

  return (
    <View style={styles.headerContainer}>

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons style={styles.leftIcon}  name= { leftIconName } size={32} color="white" />
      </TouchableOpacity>

      <Text style={styles.headerTitle}> { patientName } </Text>

      <TouchableOpacity onPress={() => navigation.navigate('EditInfo')}>
        <FontAwesome style={styles.rightIcon} name= { rightIconName } size={32} color="white" />
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#2f6be4',
    height: 143,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },

  headerTitle: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    top: 25,
  },

  leftIcon: {
    left: 15,
    top: 25,  
  },
  rightIcon: {
    right: 15, 
    top: 25, 
  },
});

export default PatientHeader;