import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';

const PatientButton = ({ onPress, patientName }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <View style={styles.topSection} />
      <View style={styles.bottomSection}>
        <Text style={styles.text}>{patientName}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    //borderWidth: 1,
    borderColor: '#000',
    borderRadius: 12,
    overflow: 'hidden',
    margin: '2%',
    width: '46%',
    height: 120,
    backgroundColor: '#fff',
  },
  topSection: {
    flex: 1, 
    backgroundColor: '#7CB3F3',
  },
  bottomSection: {
    height: 40, 
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default PatientButton;