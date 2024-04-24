import React from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet, Image } from 'react-native';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';

const AccountScreen = () => {

  return (
    <View style={styles.container}>
      {/* Top Bar */}
      <View style={styles.topBar}>
        <Ionicons name="menu" size={30} color="white" />
        <Text style={styles.headerTitle}>Account</Text>
        <MaterialCommunityIcons name="magnify" size={30} color="white" />
      </View>

      {/* Scrollable Content */}
      <ScrollView contentContainerStyle={styles.scrollableContent}>
        <View style={styles.profileContainer}>
          <Image 
            source={require('../assets/nurse-profile.png')} // replace with your local image
            style={styles.profileImage}
          />
          <Text style={styles.profileName}>Ellipse 5</Text>
        </View>

        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder="Username (Nurse Name)" />
          <TextInput style={styles.input} secureTextEntry={true} placeholder="Password" />
          <TextInput style={styles.input} keyboardType="email-address" placeholder="E-mail" />
          <TextInput style={styles.input} keyboardType="phone-pad" placeholder="Phone Number" />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#007AFF', 
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#007AFF',
  },
  headerTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  scrollableContent: {
    alignItems: 'center',
    paddingTop: 20,
    backgroundColor: 'white',
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
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

export default AccountScreen;
