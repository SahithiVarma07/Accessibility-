import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, TextInput } from 'react-native';
import DashboardHeader from '../components/DashboardHeader'; 
import PatientButton from '../components/PatientButton'; 
import { useNavigation } from '@react-navigation/native';

const Dashboard = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');
  
  // patient names
  const patients = [
    'Patient Name 1',
    'Patient Name 2',
    'Patient Name 3',
    'Patient Name 4',
    'Patient Name 5',
  ];

  // filtered patients based on search query
  const filteredPatients = patients.filter(patient =>
    patient.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // patient button press
  const onPatientPress = (patientName) => {
    console.log('Pressed:', patientName);
    navigation.navigate('PatientProfile', { patientName });
  };

  // search bar functionality
  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <View style={styles.container}>
      <DashboardHeader />
      <TextInput 
        style={styles.searchBar}
        placeholder="Search..."
        value={searchQuery}
        onChangeText={handleSearch}
      />
      <ScrollView contentContainerStyle={styles.patientsContainer}>
        {filteredPatients.map((patientName, index) => (
          <PatientButton
            key={index}
            patientName={patientName}
            onPress={() => onPatientPress(patientName)}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchBar: {
    height: 40,
    marginHorizontal: 8,
    marginTop: 8,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 8,
    paddingLeft: 10,
  },
  patientsContainer: {
    backgroundColor: '#E6F4EA',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingHorizontal: 8,
  },
});

export default Dashboard;
