import React from 'react';
import { TouchableOpacity, Text, View, Image, StyleSheet } from 'react-native';

const PatientButton = ({ onPress, patientName, image }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <View style={styles.topSection}>
        <Image source={{uri: image}} style={styles.image} />
      </View>
      <View style={styles.bottomSection}>
        <Text style={styles.text}>{patientName}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderColor: '#000',
    borderRadius: 12,
    
    margin: '3%',
    width: '42%',
    height: 120,
    backgroundColor: '#fff',

    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: '100%', 
    height: '100%', 
    borderTopLeftRadius: 12,  
    borderTopRightRadius: 12,
  },
  topSection: {
    flex: 1, 
    backgroundColor: '#7CB3F3',

    borderTopLeftRadius: 12,  
    borderTopRightRadius: 12,
  },
  bottomSection: {
    height: 40, 
    backgroundColor: '#fff',
    justifyContent: 'center',
    
    borderRadius: 12,
  },
  text: {
    left: 10,
    fontSize: 16,
    fontWeight: '600',
  },
});

export default PatientButton;