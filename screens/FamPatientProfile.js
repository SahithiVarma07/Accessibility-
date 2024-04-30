import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import PatientHeader from '../components/PatientHeader';
import FamNavBar from '../components/FamNavBar';
import { useNavigation } from '@react-navigation/native';

const FamilyPatientProfile = () => {
  const navigation = useNavigation();
  const patientName = "Doreen Johnson";

  const activitiesGroupedByDate = {
    'Wed Apr 17 2024 18:00:00 GMT-0500': [
      {
        id: 1,
        title: 'Eating Breakfast',
        time: '9:30 AM - 10:00 AM',
        image: { uri: 'https://images.pexels.com/photos/18429461/pexels-photo-18429461.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'},
      },
      {
        id: 2,
        title: 'Martha\'s Birthday Party',
        time: '1:00 PM - 3:00 PM',
        image: { uri: 'https://images.pexels.com/photos/18459203/pexels-photo-18459203/free-photo-of-caregiver-serving-food-for-elderly-people-in-retirement-house.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'},
      },
      {
        id: 3,
        title: 'Karaoke Night',
        time: '8:00 PM - 10:00 PM',
        image: require('../assets/karaoke.png'),
      }
    ],
    'Tue Apr 16 2024 18:00:00 GMT-0500': [
      {
        id: 4,
        title: 'Eating Breakfast',
        time: '0:00 PM - 0:00 PM',
        image: { uri: 'https://images.pexels.com/photos/18429461/pexels-photo-18429461.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'},
      },
      {
        id: 5,
        title: 'An\'s Birthday Party',
        time: '0:00 PM - 0:00 PM',
        image: { uri: 'https://images.pexels.com/photos/18459203/pexels-photo-18459203/free-photo-of-caregiver-serving-food-for-elderly-people-in-retirement-house.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'},
      },
    ],
  };

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', {
      weekday: 'long', 
      month: 'long', 
      day: 'numeric'
    });
  };

  return (
    <View style={styles.fullScreenContainer}>
      <PatientHeader patientName={patientName} leftIconName={"grid"} rightIconName={"person-circle-outline"} />
      <ScrollView style={styles.scrollBody}>
        <Text style={styles.scheduleTitle}> {patientName}'s Schedule</Text>
        <View style={styles.activityContainerPosts}>
          {Object.entries(activitiesGroupedByDate).map(([date, activities], index) => (
            <View key={date}>
              {index !== 0 && <View style={styles.divider} />}
              <Text style={styles.dateHeader}>{formatDate(date)}</Text>
              {activities.map((activity) => (
                <TouchableOpacity 
                  key={activity.id} 
                  style={styles.activityItem}
                  onPress={() => navigation.navigate('FamActivity', { activityId: activity.id })}>
                  {activity.image && (
                    <Image source={activity.image} style={styles.activityImage} />
                  )}
                  <View style={styles.activityContent}>
                    <Text style={styles.activityTitle}>{activity.title}</Text>
                    <Text style={styles.activityTime}>{activity.time}</Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          ))}
        </View>
      </ScrollView>
      <FamNavBar navigation={navigation} patientName={patientName} specialIcon="house" />
    </View>
  );
};

const styles = StyleSheet.create({
  fullScreenContainer: {
    flex: 1,
    backgroundColor: '#2f6be4',
  },
  scrollBody: {
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    backgroundColor: 'white',
  },
  scheduleTitle: {
    fontSize: 24,
    fontWeight: '500',
    marginBottom: 10,
    marginTop: 30,
    marginLeft: 15,
  },
  activityItem: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 10,
    marginBottom: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  activityImage: {
    width: 70,
    height: 70,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    backgroundColor: '#000',
  },
  activityContent: {
    flex: 1,
    marginLeft: 15,
    justifyContent: 'center',
    paddingVertical: 10,
  },
  activityTitle: {
    fontSize: 18,
    fontWeight: '500',
    color: '#333',
    paddingBottom: 5,
  },
  activityTime: {
    fontSize: 14,
    color: '#666',
  },
  activityContainerPosts: {
    marginTop: 10,
    marginBottom: 130,
    marginLeft: 20,
  },
  dateHeader: {
    fontSize: 18,
    color: 'grey',
    paddingBottom: 5,
  },
  divider: {
    height: 2,
    backgroundColor: '#E0E0E0',
    marginBottom: 10,
    marginTop: 10,
  },
});

export default FamilyPatientProfile;
