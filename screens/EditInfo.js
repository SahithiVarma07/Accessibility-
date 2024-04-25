import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TextInput, Image, Button } from 'react-native';
import PatientHeader from '../components/PatientHeader'; 
import NavBar from '../components/NavBar';
import { useNavigation, useRoute } from '@react-navigation/native';

const EditInfo = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { patientName } = route.params;

  const [isEditing, setIsEditing] = useState(false);
  const [editPatient, setEditPatient] = useState({
    name: patientName,
    age: '30',
    dob: '1987-05-25',
    hometown: 'Springfield',
    family: 'John, Jane, Doe'
  });

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    // typically call a function to update the backend with the new patient data
    console.log('Saved', editPatient);
  };

  return (
    <View style={styles.container}>
      <PatientHeader patientName={editPatient.name} leftIconName="grid" rightIconName="person-circle-outline" />

      <View style={styles.contentContainerShadow}>
        <View style={styles.contentContainer}>
          <ScrollView style={styles.scrollableContent} showsVerticalScrollIndicator={true}>
            <Text style={styles.title}>Edit Patient Info</Text>
            <View style={styles.infoContainer}>
              {/* Static image placeholder  */}
              <Image source={require('../assets/photo1.jpg')} style={styles.imagePlaceholder} />

              <View style={styles.textContainer}>
                {isEditing ? (
                  <>
                    <TextInput
                      style={styles.input}
                      onChangeText={text => setEditPatient(prev => ({ ...prev, name: text }))}
                      value={editPatient.name}
                    />
                    <TextInput
                      style={styles.input}
                      onChangeText={text => setEditPatient(prev => ({ ...prev, age: text }))}
                      value={editPatient.age}
                    />
                    <TextInput
                      style={styles.input}
                      onChangeText={text => setEditPatient(prev => ({ ...prev, dob: text }))}
                      value={editPatient.dob}
                    />
                    <TextInput
                      style={styles.input}
                      onChangeText={text => setEditPatient(prev => ({ ...prev, hometown: text }))}
                      value={editPatient.hometown}
                    />
                    <TextInput
                      style={styles.input}
                      onChangeText={text => setEditPatient(prev => ({ ...prev, family: text }))}
                      value={editPatient.family}
                    />
                    <Button title="Save" onPress={handleSave} />
                  </>
                ) : (
                  <>
                    <Text style={styles.text}>{editPatient.name}</Text>
                    <Text style={styles.text}>Age: {editPatient.age}</Text>
                    <Text style={styles.text}>D.O.B: {editPatient.dob}</Text>
                    <Text style={styles.text}>Hometown: {editPatient.hometown}</Text>
                    <Text style={styles.text}>Family: {editPatient.family}</Text>
                    <Button title="Edit" onPress={handleEdit} />
                  </>
                )}
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
      <NavBar navigation={navigation} patientName={editPatient.name} specialIcon="person-sharp" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2f6be4', 
  },
  scrollableContent: {
    backgroundColor: 'white', 
  },
  contentContainerShadow: {
    flex: 1,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOpacity: 0.4,
    shadowRadius: 6,
  },
  contentContainer: {
    overflow: 'hidden',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 20,
  },
  infoContainer: {
    flexDirection: 'row',
    padding: 20,
  },
  imagePlaceholder: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  textContainer: {
    marginLeft: 20,
    flex: 1,
  },
  input: {
    fontSize: 18,
    padding: 10,
    marginBottom: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
  },
  text: {
    color: 'gray',
    fontSize: 16,
    marginBottom: 10,
  },
});

export default EditInfo;
