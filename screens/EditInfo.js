import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import PatientHeader from '../components/PatientHeader'; 
import { usePatients } from '../PatientsContext';
import NavBar from '../components/NavBar';
import { useNavigation, useRoute } from '@react-navigation/native';

const EditInfo = () => {
  const { patients } = usePatients(); // Access the patients array from context
  const route = useRoute();
  const navigation = useNavigation();
  const { patientName } = route.params;

  // Find the patient in the patients array
  const patient = patients.find(p => p.name === patientName);

  return (
    <View style={styles.container}>
      <PatientHeader patientName={patient.name} leftIconName="grid" rightIconName="person-circle-outline" />

      <View style={styles.contentContainerShadow}>
        <View style={styles.contentContainer}>
          <ScrollView style={styles.scrollableContent} showsVerticalScrollIndicator={true}>
            <View style={styles.bodyContent}>
              <Text style={styles.title}>Edit Patient Info</Text>
            </View>
            <View style={styles.infoContainer}>
              {/* Display the image if patient is found and has an image */}
              {patient && patient.image && (
                <Image source={patient.image} style={styles.imagePlaceholder} />
              )}

              <View style={styles.textContainer}>
                <Text style={styles.patientNameText}>{ patient.name }</Text>
                <Text style={styles.infoText}>Age: { patient.age }</Text>
                <Text style={styles.infoText}>D.O.B: { patient.dob }</Text>
                <Text style={styles.infoText}>Hometown: { patient.hometown }</Text>
                <Text style={styles.infoText}>Family: { patient.family }</Text>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
      <NavBar navigation={navigation} patientName={patientName} specialIcon="person-sharp"/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2f6be4', 
  },
  scrollableContent: {
    flex: 1,
    backgroundColor: 'white', 
  },

  contentContainerShadow: {
    flex: 1,
    borderTopLeftRadius: 100,

    backgroundColor: 'white',

    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,

    shadowColor: 'black',
    shadowOpacity: 0.4,
    shadowRadius: 6,
  },

  contentContainer: {
    flex: 1,
    borderTopLeftRadius: 100,

    backgroundColor: 'white',

    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,

    overflow: 'hidden',
  },
  
  bodyContent: {
    paddingBottom: 60, 
    marginLeft: 18,
  },
  title: {
    fontSize: 30,
    // fontWeight: 'bold',
    marginTop: 20,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: -40,
    marginLeft: 14, 
    marginBottom: 20,
  },
  imagePlaceholder: {
    width: 170,
    height: 170,
    borderRadius: 85,
    backgroundColor: '#7CB3F3',
  },
  textContainer: {
    marginLeft: 14, 
  },
  patientNameText: {
    fontSize: 22,
    fontWeight: 'bold', 
    color: '#000000',
    marginBottom: 10, 
  },
  infoText: {
    fontSize: 15,
    color: '#858585',
    marginBottom: 8, 
  },
});

export default EditInfo;