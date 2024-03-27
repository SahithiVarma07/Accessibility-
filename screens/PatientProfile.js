import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PatientProfile = ({ route }) => {
  const { patientName } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{patientName}</Text>
      {/* Add more patient information here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  // Add more styles as needed
});

export default PatientProfile;
