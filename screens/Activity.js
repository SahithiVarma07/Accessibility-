import React, { useState } from 'react';
import { Alert, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import PatientHeader from '../components/PatientHeader';
import NavBar from '../components/NavBar';
import { useNavigation, useRoute } from '@react-navigation/native';

const Calls = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { patientName } = route.params;

  const [callStatus, setCallStatus] = useState('Call Requested');
  const [showButtons, setShowButtons] = useState(true);

  const acceptCall = () => {
    Alert.alert('Call Accepted');
    setCallStatus('Call Accepted');
    setShowButtons(false);
  };

  const declineCall = () => {
    Alert.alert('Call Declined');
    setCallStatus('Call Declined');
    setShowButtons(false);
  };

  const addNewCall = () => {
    // Navigate to the screen where a new call can be added
    // This is just a placeholder, replace it with your actual navigation function
    navigation.navigate('AddNewCallScreen');
  };

  return (
    <View style={styles.container}>
      <PatientHeader patientName={patientName} leftIconName="grid" rightIconName="person-circle-outline" />
      <View style={styles.callContainer}>
        <Text style={styles.callTitle}>{callStatus}</Text>
        <Text style={styles.callSubtitle}>with Family Member</Text>
        <Text style={styles.callTime}>Friday, 3/1 @ 2:00 PM</Text>
        {showButtons ? (
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.declineButton} onPress={declineCall}>
              <Text style={[styles.buttonText, styles.declineButtonText]}>Decline</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.acceptButton} onPress={acceptCall}>
              <Text style={styles.buttonText}>Accept</Text>
            </TouchableOpacity>
          </View>
        ) : callStatus === 'Call Declined' ? (
          <View style={styles.addCallContainer}>
            <TouchableOpacity style={styles.addCallButton} onPress={addNewCall}>
              <Text style={styles.buttonText}>Add New Call</Text>
            </TouchableOpacity>
          </View>
        ) : null}
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
  addCallContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  addCallButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
});

export default Calls;
