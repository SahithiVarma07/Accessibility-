import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const EditInfo = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Ionicons name="menu" size={32} color="white" />
        <Text style={styles.headerTitle}>Dashboard</Text>
        <Ionicons name="search" size={32} color="white" />
        <TouchableOpacity style={styles.letterButton}>
          <Text style={styles.letterButtonText}>L</Text>
        </TouchableOpacity>
      </View>

      {/* Body Content */}
      <View style={styles.bodyContent}>
        <Text style={styles.title}>Edit Patient Information</Text>
        <View style={styles.imagePlaceholder}></View>
        <Text style={styles.infoText}>Patient Name</Text>
        {/* ... Other Info Text */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#007AFF',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  headerTitle: {
    fontSize: 20,
    color: '#FFFFFF',
  },
  letterButton: {
    backgroundColor: '#FF3366',
    borderRadius: 17,
    width: 34,
    height: 34,
    justifyContent: 'center',
    alignItems: 'center',
  },
  letterButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  bodyContent: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  imagePlaceholder: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#007AFF',
    alignSelf: 'center',
    marginBottom: 20,
  },
  infoText: {
    fontSize: 18,
    color: '#000000',
    marginBottom: 10,
  },
});

export default EditInfo;
