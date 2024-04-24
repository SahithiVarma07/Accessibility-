import React, { useState, useEffect } from 'react';
import { View, ScrollView, StyleSheet, TextInput } from 'react-native';
import DashboardHeader from '../components/DashboardHeader'; 
import PatientButton from '../components/PatientButton'; 
import { useNavigation } from '@react-navigation/native';
import { db } from '../Firebase'; // Adjusted import path
import { collection, getDocs } from 'firebase/firestore';

const Dashboard = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const fetchPatients = async () => {
      const querySnapshot = await getDocs(collection(db, "users"));
      const patientList = querySnapshot.docs.map(doc => ({
        name: doc.data().name,
        image: doc.data().image, // Ensure image URL/path is stored in Firestore
      }));
      setPatients(patientList);
    };

    fetchPatients();
  }, []);

  // Filtered patients based on search query
  const filteredPatients = patients.filter(patient =>
    patient.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Patient button press
  const onPatientPress = (patientName) => {
    console.log('Pressed:', patientName);
    navigation.navigate('PatientProfile', { patientName });
  };

  // Search bar functionality
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
                image={patient.image} // This should be updated to handle image loading
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
