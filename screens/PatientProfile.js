import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const PatientProfile = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="md-checkmark-circle" size={32} color="green" />
        <Text style={styles.headerTitle}>Dashboard</Text>
        <Ionicons name="md-checkmark-circle" size={32} color="green" />
      </View>
      <View style={styles.screenBodyContent}>
        <View style={styles.overlapGroup}>
          <View style={styles.handleBar} />
          <Text style={styles.pageTitle}>Patient Profile</Text>
        </View>
        <Text style={styles.dateHeader}>Thursday, February 29</Text>
        {/* Activity List */}
        <View style={styles.activityItem}>
          <Text style={styles.activityTitle}>Activity Title</Text>
          <Text style={styles.activityTime}>00:00 PM - 00:00 PM</Text>
        </View>
        {/* Repeat Activity Item for each activity */}
      </View>
    </ScrollView>
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
    padding: 20,
    backgroundColor: '#1E4D2B',
  },
  headerTitle: {
    fontSize: 20,
    color: 'white',
  },
  screenBodyContent: {
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    backgroundColor: 'white',
    padding: 20,
    paddingTop: 35,
    // ... other styles
  },
  overlapGroup: {
    // ... styles for the overlap group
  },
  handleBar: {
    alignSelf: 'center',
    width: 77,
    height: 3,
    backgroundColor: '#CCC',
    borderRadius: 3,
    marginBottom: 20,
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    // ... other styles
  },
  dateHeader: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
  },
  activityItem: {
    backgroundColor: '#E6F4EA',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    // ... other styles
  },
  activityTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  activityTime: {
    fontSize: 14,
    color: '#666',
  },
});

export default PatientProfile;
