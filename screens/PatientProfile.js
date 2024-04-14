import React from 'react';
import { View, Text, ScrollView, StyleSheet, Dimensions, TouchableOpacity, Image } from 'react-native';
import { Ionicons, FontAwesome, MaterialIcons } from '@expo/vector-icons';
import NavBar from '../components/NavBar';
import { useNavigation } from '@react-navigation/native';

const PatientProfile = () => {
  const navigation = useNavigation();

  // dummy data - backend data pending
  const activitiesGroupedByDate = {
    'Thursday, February 29': [
      {
        id: 1,
        title: 'Breakfast in Bed',
        time: '9:30 AM - 10:00 AM',
        image: require('../assets/breakfast.png'),
      },
      {
        id: 2,
        title: 'Martha\'s Birthday Party',
        time: '1:00 PM - 3:00 PM',
        image: require('../assets/bday.png'),
      },
      {
        id: 3,
        title: 'Karaoke Night',
        time: '8:00 PM - 10:00 PM',
        image: require('../assets/karaoke.png'),
      }
    ],
    'Wednesday, February 28': [
      {
        id: 4,
        title: 'Activity Title',
        time: '0:00 PM - 0:00 PM',
        image: require('../assets/default.png'),
      },
      {
        id: 5,
        title: 'Activity Title',
        time: '0:00 PM - 0:00 PM',
        image: require('../assets/default.png'),
      }
    ],
  };

  return (
    <View style={styles.fullScreenContainer}>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={32} color="white" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Patient Name</Text>
          <TouchableOpacity onPress={() => navigation.navigate('EditInfo')}>
            <FontAwesome name="user-circle-o" size={32} color="white" />
          </TouchableOpacity>
        </View>
        <View style={styles.screenBodyContent}>
          <Text style={styles.scheduleTitle}>Patient's Schedule</Text>
          {/* iterates through date groups & activities */}
          {Object.entries(activitiesGroupedByDate).map(([date, activities], index, array) => (
          <View key={date}>
            {/* only adds divider if not first day */}
            {index !== 0 && <View style={styles.divider} />}
            <Text style={styles.dateHeader}>{date}</Text>
            {activities.map((activity) => (
              <TouchableOpacity 
                key={activity.id} 
                style={styles.activityItem} 
                onPress={() => navigation.navigate('Activity', { activityId: activity.id })}>
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
      <TouchableOpacity style={styles.fab} onPress={() => navigation.navigate('Activity')}>
        <MaterialIcons name="add" size={40} color="white" />
      </TouchableOpacity>
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
  },
  header: {
    backgroundColor: '#2f6be4',
    height: 143,
    width: Dimensions.get('window').width,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  headerTitle: {
    fontSize: 22,
    color: 'white',
    fontWeight: 'bold',
  },
  patientName: {
    fontSize: 28,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: -30,
  },
  screenBodyContent: {
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    backgroundColor: 'white',
    paddingVertical: 20,
    paddingHorizontal: 15,
    marginTop: -30,
    zIndex: 0,
  },
  scheduleTitle: {
    fontSize: 22,
    fontWeight: '500',
    marginBottom: 10,
    color: '#333',
    textAlign: 'left',
    marginLeft: 0, 
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
  },
  activityTime: {
    fontSize: 14,
    color: '#666',
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 20,
    bottom: 105, 
    backgroundColor: '#2f6be4',
    width: 61,
    height: 61,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 6,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    zIndex: 1,
  },
  dateHeader: {
    fontSize: 16,
    color: 'grey',
    fontWeight: '500', 
    paddingTop: 10,
    paddingBottom: 5,
    paddingLeft: 10, 
    paddingRight: 10, 
    width: '100%', 
    borderTopLeftRadius: 10, 
    borderTopRightRadius: 10,
    elevation: 3, 
  },
  divider: {
    height: 2,
    backgroundColor: '#E0E0E0', 
    width: '100%', 
    marginVertical: 10, 
  },
});

export default PatientProfile;
