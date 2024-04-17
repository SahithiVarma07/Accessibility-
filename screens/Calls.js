import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import PatientHeader from '../components/PatientHeader';
import NavBar from '../components/NavBar';
import { useNavigation, useRoute } from '@react-navigation/native';

const Calls = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { patientName } = route.params;

  const acceptCall = () => {
    console.log('Call Accepted');
  };

  const declineCall = () => {
    console.log('Call Declined');
  };

  return (
    <View style={styles.container}>
      <PatientHeader patientName={patientName} leftIconName="grid" rightIconName="person-circle-outline" />
      <View style={styles.callContainer}>
        <Text style={styles.callTitle}>Call Requested</Text>
        <Text style={styles.callSubtitle}>with Family Member</Text>
        <Text style={styles.callTime}>Friday, 3/1 @ 2:00 PM</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.declineButton} onPress={declineCall}>
            <Text style={[styles.buttonText, styles.declineButtonText]}>Decline</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.acceptButton} onPress={acceptCall}>
            <Text style={styles.buttonText}>Accept</Text>
          </TouchableOpacity>
        </View>
      </View>
      <NavBar navigation={navigation} patientName={patientName} specialIcon="calendar" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  callContainer: {
    marginTop: 20, 
    alignItems: 'flex-start', 
    paddingHorizontal: 20, 
  },
  callTitle: {
    fontSize: 22, 
    fontWeight: '600', 
  },
  callSubtitle: {
    fontSize: 18, 
    color: '#666',
    marginTop: 4,
  },
  callTime: {
    fontSize: 16, 
    color: '#666', 
    marginTop: 4, 
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between', 
    marginTop: 20, 
    width: '100%', 
  },
  declineButton: {
    backgroundColor: '#fff',
    borderColor: '#007AFF',
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    width: '45%', 
  },
  acceptButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    width: '45%', 
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center', 
    color: '#fff',
  },
  declineButtonText: {
    color: '#000',
  },
});

export default Calls;
