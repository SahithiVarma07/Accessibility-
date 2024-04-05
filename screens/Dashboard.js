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
    //'Patient Name 6',
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
      <View style={styles.patientContainer}>
        <View style={styles.handleBar} />
        <ScrollView contentContainerStyle={styles.patientsScrollContainer}>
          <View style={styles.searchBarContainer}>
            <TextInput 
              style={styles.searchBar}
              placeholder="Search..."
              value={searchQuery}
              onChangeText={handleSearch}
            />
          </View>
          <View style={styles.patientButtonContainer}>
            {filteredPatients.map((patientName, index) => (
              <PatientButton
                key={index}
                patientName={patientName}
                onPress={() => onPatientPress(patientName)}
              />
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2f6be4',
    //flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
    //width:375,
  },
  patientContainer: {
    backgroundColor: '#f2f2f2',
    borderRadius: 45,
    //backgroundColor: '#000',
  },
  handleBar: {
    alignSelf: 'center',
    marginTop: 20,
    width: 77,
    height: 3,
    backgroundColor: '#949494',
    borderRadius: 3,
    marginBottom: 20,
  },
  searchBar: {
    height: 40,
    width: 325,
    //marginHorizontal: 8,
    
    //marginTop: 20,
    marginBottom: 16,

    borderWidth: 1.2,
    borderColor: '#000',
    borderRadius: 12,
    paddingLeft: 10,
  },
  patientsScrollContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    
    height: '100%',
    justifyContent: 'center',
  },
  patientButtonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    //justifyContent: 'flex-start',
    //alignItems: 'flex-start',
    //paddingHorizontal: 0,
    paddingLeft: 15,
  },
});

export default Dashboard;
