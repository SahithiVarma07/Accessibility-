import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, Button, Alert } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation, useRoute } from '@react-navigation/native';
import FamNavBar from '../components/FamNavBar';

const FamCalls = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { patientName } = route.params;

  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  const [mode, setMode] = useState('date');

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
    setShowPicker(false);
  };

  const showMode = (currentMode) => {
    setShowPicker(true);
    setMode(currentMode);
  };

  const scheduleCall = () => {
    Alert.alert('Call Scheduled', `Call is set for ${date.toLocaleDateString()} at ${date.toLocaleTimeString()}`);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Request a Call</Text>
      <TouchableOpacity style={styles.button} onPress={() => showMode('date')}>
        <Text style={styles.buttonText}>Pick a Date</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => showMode('time')}>
        <Text style={styles.buttonText}>Pick a Time</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.scheduleButton} onPress={scheduleCall}>
        <Text style={styles.buttonText}>Schedule Call</Text>
      </TouchableOpacity>
      {showPicker && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
      {/* Include the navigation bar */}
      <FamNavBar navigation={navigation} patientName={patientName} specialIcon="calendar" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 10,
    width: '100%',
  },
  scheduleButton: {
    backgroundColor: '#34C759',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 20,
    width: '100%',
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
  },
});

export default FamCalls;
