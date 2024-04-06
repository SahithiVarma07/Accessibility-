import React from 'react';
import { View, Text, ScrollView, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import NavBar from '../components/NavBar';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';



const PatientProfile = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.fullScreenContainer}>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
            <Ionicons name="home" size={32} color="white" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Patient Name</Text>
          <TouchableOpacity onPress={() => navigation.navigate('EditInfo')}>
            <FontAwesome name="user-circle-o" size={32} color="white" />
            </TouchableOpacity>
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
        </View>
      </ScrollView>
      <NavBar navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  fullScreenContainer: {
    flex: 1,
    justifyContent: 'space-between', 
  },

  container: {
    flex: 1,
    backgroundColor: '#E6F4EA',
  },
  header: {
    backgroundColor: '#2f6be4',
    borderRadius: 10,
    height: 143,
    width: Dimensions.get('window').width,
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    paddingHorizontal: 10,
    borderRadius: 0,
  },
  headerTitle: {
    fontSize: 35,
    color: 'white',
  },
  screenBodyContent: {
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    backgroundColor: 'white',
    padding: 20,
    paddingTop: 35,
    marginTop: -20, 
    zIndex: 0,
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
