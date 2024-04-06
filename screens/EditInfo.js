import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const EditInfo = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Ionicons name="menu" size={32} color="white" />
        <Text style={styles.headerTitle}>Dashboard</Text>
        <Ionicons name="search" size={32} color="white" />
      </View>

      {/* Scrollable Body Content */}
      <ScrollView style={styles.scrollableContent} showsVerticalScrollIndicator={false}>
        <View style={styles.handleBar} />
        <View style={styles.bodyContent}>
          <Text style={styles.title}>Edit Patient Information</Text>
        </View>
        <View style={styles.infoContainer}>
        <View style={styles.imagePlaceholder} />
        <View style={styles.textContainer}>
        <Text style={styles.patientNameText}>Patient Name</Text>
        <Text style={styles.infoText}>Secondary Info</Text>
        <Text style={styles.infoText}>Secondary Info</Text>
        <Text style={styles.infoText}>Secondary Info</Text>
      </View>
    </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6F4EA', 
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#2f6be4',
    paddingTop: 50, 
    paddingHorizontal: 15,
    paddingBottom: 20, 
  },
  headerTitle: {
    fontSize: 35,
    color: 'white',
    flex: 1,
    textAlign: 'center',
  },
  scrollableContent: {
    flex: 1,
    backgroundColor: 'white', 
  },
  handleBar: {
    alignSelf: 'center',
    width: 40,
    height: 5, 
    backgroundColor: '#D0D0D0',
    borderRadius: 2.5, 
    marginVertical: 8, 
  },
  bodyContent: {
    padding: 20,
    paddingBottom: 60, 
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: -40,
    marginLeft: 20, 
    marginBottom: 20,
  },
  imagePlaceholder: {
    width: 170,
    height: 170,
    borderRadius: 85,
    backgroundColor: '#7CB3F3',
  },
  textContainer: {
    marginLeft: 20, 
  },
  patientNameText: {
    fontSize: 20,
    fontWeight: 'bold', 
    color: '#000000',
    marginBottom: 4, 
  },
  infoText: {
    fontSize: 18,
    color: '#000000',
    marginBottom: 4, 
  },
});

export default EditInfo;