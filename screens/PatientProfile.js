import React from 'react';
import { View, Text, ScrollView, StyleSheet, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const PatientProfile = () => {
  const navigation = useNavigation();

  const activities = [
    { title: 'Activity 1', time: '10:00 AM - 11:00 AM' },
    { title: 'Activity 2', time: '11:00 AM - 12:00 PM' },
    { title: 'Activity 3', time: '01:00 PM - 02:00 PM' },
    { title: 'Activity 4', time: '02:00 PM - 03:00 PM' },
    { title: 'Activity 5', time: '03:00 PM - 04:00 PM' },
  ];

  const handleActivityPress = () => {
    navigation.navigate('Activity'); // Navigate to the new screen named 'Activity'
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Ionicons name="md-checkmark-circle" size={32} color="blue" />
          <Text style={styles.headerTitle}>Dashboard</Text>
          <Ionicons name="md-checkmark-circle" size={32} color="blue" />
        </View>
      </View>
      <View style={styles.screenBodyContent}>
        <View style={styles.overlapGroup}>
          <View style={styles.handleBar} />
          <Text style={styles.pageTitle}>Patient Profile</Text>
        </View>
        <Text style={styles.dateHeader}>Thursday, February 29</Text>
        {/* Activity List */}
        {activities.map((activity, index) => (
          <View key={index} style={styles.activityContainer}>
            <Pressable onPress={handleActivityPress} style={styles.activityItem}>
              <Text style={styles.activityTitle}>{activity.title}</Text>
              <Text style={styles.activityTime}>{activity.time}</Text>
            </Pressable>
          </View>
        ))}
        {/* Repeat Pressable for each activity */}
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
    backgroundColor: '#2f6be4',
    borderRadius: 10,
    height: 143,
    width: 430,
    justifyContent: 'center', // Center the content horizontally
    alignItems: 'center', // Center the content vertically
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center', // Align items horizontally
  },
  headerTitle: {
    fontSize: 30,
    color: 'white',
    marginLeft: 10,
    marginRight: 10,
  },
  screenBodyContent: {
    borderTopLeftRadius: 50,
    borderTopRightRadius: 40,
    backgroundColor: '#7CB3F3',
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
  activityContainer: {
    marginBottom: 10,
  },
  activityItem: {
    backgroundColor: '#',
    borderRadius: 10,
    padding: 15,
    // ... other styles
  },
  activityTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  activityTime: {
    fontSize: 14,
    color: 'gray',
  },
});

export default PatientProfile;
