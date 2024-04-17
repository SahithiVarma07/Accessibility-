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
    { name: 'Agnes Young', image: require('../assets/patient_images/patient1.jpeg') },
    { name: 'Dorren Johnson', image: require('../assets/patient_images/patient2.jpeg') },
    { name: 'Harvey Walker', image: require('../assets/patient_images/patient3.jpeg') },
    { name: 'Alaina Garcia', image: require('../assets/patient_images/patient4.jpeg') },
    { name: 'An Chen', image: require('../assets/patient_images/patient5.jpeg') },
    { name: 'An Chen', image: require('../assets/patient_images/patient5.jpeg') },
    { name: 'An Chen', image: require('../assets/patient_images/patient5.jpeg') },
    { name: 'An Chen', image: require('../assets/patient_images/patient5.jpeg') },
    { name: 'An Chen', image: require('../assets/patient_images/patient5.jpeg') },
    { name: 'An Chen', image: require('../assets/patient_images/patient5.jpeg') },
  ];

  // filtered patients based on search query
  const filteredPatients = patients.filter(patient =>
    patient.name.toLowerCase().includes(searchQuery.toLowerCase())
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
      <View style={styles.patientContainerShadow}>
        <View style={styles.patientContainer}>
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
            {filteredPatients.map((patient, index) => (
              <PatientButton
                key={index}
                patientName={patient.name}
                image={patient.image}
                onPress={() => onPatientPress(patient.name)}
              />
            ))}
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2f6be4',
    flex: 1,
  },
  patientContainerShadow: {
    backgroundColor: '#f2f2f2',
    borderRadius: 45,
    //backgroundColor: '#000',
    flex: 1,

    shadowColor: 'black',
    shadowOpacity: 0.4,
    shadowRadius: 6,
  },
  patientContainer: {
    borderRadius: 45,
    overflow: 'hidden',
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
    
    marginTop: 40,
    marginBottom: 16,

    borderWidth: 1.2,
    borderColor: '#000',
    borderRadius: 12,
    paddingLeft: 10,
  },
  patientsScrollContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    
    //height: '100%',
    justifyContent: 'center',
  },
  patientButtonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    //justifyContent: 'flex-start',
    //alignItems: 'flex-start',
    //paddingHorizontal: 0,
    paddingLeft: 15,
    marginBottom: 40,
  },
});

export default Dashboard;
