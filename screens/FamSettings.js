import React from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet, Image } from 'react-native';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import PatientHeader from '../components/PatientHeader'; 
import { usePatients } from '../PatientsContext';
import NavBar from '../components/NavBar';
import { useNavigation, useRoute } from '@react-navigation/native';

const AccountSettings = ( ) => {
  const navigation = useNavigation();

  return (
    <View style={styles.fullContainer}>
      <PatientHeader patientName="Account" leftIconName="grid" rightIconName="person-circle-outline" />

      <View style={styles.contentContainerShadow}>
        <View style={styles.contentContainer}>
          <ScrollView contentContainerStyle={styles.scrollableContent}>
            <View style={styles.profileContainer}>
              <Image 
                source={require('../assets/family.jpg')} 
                style={styles.profileImage}
              />
              <Text style={styles.profileName}>Jane</Text>
            </View>

            <View style={styles.inputContainer}>
              <TextInput style={styles.input} placeholder="Username (Family Name)" />
              <TextInput style={styles.input} secureTextEntry={true} placeholder="Password" />
              <TextInput style={styles.input} keyboardType="email-address" placeholder="E-mail" />
              <TextInput style={styles.input} keyboardType="phone-pad" placeholder="Phone Number" />
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  fullContainer: {
    flex: 1,
    backgroundColor: '#2f6be4',
  },
  scrollableContent: {
    flex: 1,
    alignItems: 'center',

    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,

    backgroundColor: 'white',
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
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

  profileImage: {
    width: 140,
    height: 140,
    borderRadius: 80,

    backgroundColor: '#2f6be4',
  },
  profileName: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#007AFF',
  },
  inputContainer: {
    width: '100%',
    paddingHorizontal: 20,
  },
  input: {
    backgroundColor: '#F0F0F0',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    fontSize: 16,
  },
});

export default AccountSettings;
