import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, TextInput } from 'react-native';
import DashboardHeader from '../components/DashboardHeader'; 
import PatientButton from '../components/PatientButton'; 

const Dashboard = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  // patient names
  const patients = [
    'Patient Name 0',
    'Patient Name 2',
    'Patient Name 3',
    'Patient Name 4',
    'Patient Name 5',
  ];

  // patient button press
  const onPatientPress = (patientName) => {
    console.log('Pressed:', patientName);
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
        {patients.map((patientName, index) => (
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
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingHorizontal: 8,
  },
});

export default Dashboard;
