import React from 'react';
import { View, Text, ScrollView, StyleSheet, Dimensions, TouchableOpacity, Image } from 'react-native';
import { Ionicons, FontAwesome, MaterialIcons } from '@expo/vector-icons';
import PatientHeader from '../components/PatientHeader'; 
import NavBar from '../components/NavBar';
import { useNavigation, useRoute } from '@react-navigation/native';

const PatientProfile = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const { patientName } = route.params;

  // Function to get the first name from a full name string
  const getFirstName = (fullName) => {
    return fullName.split(' ')[0]; // Splits the name by spaces and returns the first element
  };

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
      },
      {
        id: 6,
        title: 'Activity Title',
        time: '0:00 PM - 0:00 PM',
        image: require('../assets/default.png'),
      },
      {
        id: 7,
        title: 'Activity Title',
        time: '0:00 PM - 0:00 PM',
        image: require('../assets/default.png'),
      },
      {
        id: 8,
        title: 'Activity Title',
        time: '0:00 PM - 0:00 PM',
        image: require('../assets/default.png'),
      }
    ],
  };

  return (
    <View style={styles.fullScreenContainer}>
      <PatientHeader patientName={patientName} leftIconName={ "grid" } rightIconName={"person-circle-outline"} />
     
      <View style={styles.activityContainer}>

        <ScrollView style={styles.screenBodyContent}> 
          <View style={styles.activityContainerPosts}>

          {/* <View style={styles.handleBar} /> */}
          <Text style={styles.scheduleTitle}> {getFirstName(patientName)}'s Schedule</Text>
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
      </View>
      
      <TouchableOpacity style={styles.fab} onPress={() => navigation.navigate('Activity')}>
        <MaterialIcons name="add" size={40} color="white" />
      </TouchableOpacity>
      
      <NavBar navigation={navigation} patientName={patientName} specialIcon="house" />
    </View>
  );
};

const styles = StyleSheet.create({
  fullScreenContainer: {
    flex: 1,
    //justifyContent: 'space-between',
    backgroundColor: '#2f6be4',
  },

  activityContainer: {
    flex: 1,
    borderRadius: 40,

    shadowColor: 'black',
    shadowOpacity: 0.4,
    shadowRadius: 6,
  },
  handleBar: {
    alignSelf: 'center',
    width: 77,
    height: 3,
    backgroundColor: '#949494',
    borderRadius: 3,
  },

  screenBodyContent: {
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,

    backgroundColor: 'white',

    paddingVertical: 20,
    paddingHorizontal: 15,
    marginTop: -3,

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
  activityContainerPosts: {
    marginTop: 10,
    marginBottom: 130,
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
