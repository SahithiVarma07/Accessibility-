import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image, Modal, TextInput, Button } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import PatientHeader from '../components/PatientHeader'; 
import NavBar from '../components/NavBar';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation, useRoute } from '@react-navigation/native';
import { format } from 'date-fns';

const PatientProfile = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { patientName } = route.params;

  const handleCancelAddActivity = () => {
    setModalVisible(false);
  };

  const [activitiesGroupedByDate, setActivitiesGroupedByDate] = useState({
    'Wed Apr 17 2024 18:00:00 GMT-0500': [
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
    'Tue Apr 16 2024 18:00:00 GMT-0500': [
      {
        id: 4,
        title: 'Activity Title',
        time: '0:00 PM - 0:00 PM',
        image: require('../assets/bday.png'),
      },
      {
        id: 5,
        title: 'Activity Title',
        time: '0:00 PM - 0:00 PM',
        image: require('../assets/breakfast.png'),
      },
    ],
  });
  const [modalVisible, setModalVisible] = useState(false);
  const [newActivity, setNewActivity] = useState({
    dateTime: new Date(), 
    title: '',
    time: '',
    image: require('../assets/breakfast.png')
  });

  const formatTimeRange = (startDate, durationMinutes = 30) => {
    const endDate = new Date(startDate.getTime() + durationMinutes * 60000); 
  
    const options = { hour: 'numeric', minute: '2-digit', hour12: true };
    const startTime = startDate.toLocaleTimeString('en-US', options);
    const endTime = endDate.toLocaleTimeString('en-US', options);


    return `${startTime} - ${endTime}`;
  };

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', {
      weekday: 'long', // "Thursday"
      month: 'long', // "February"
      day: 'numeric' // "29"
    });
  };
  

  const [datePickerVisible, setDatePickerVisible] = useState(true);
  const [timePickerVisible, setTimePickerVisible] = useState(true);

  const getFirstName = (fullName) => {
    return fullName.split(' ')[0];
  };

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || newActivity.dateTime;

    setNewActivity(prev => ({
      ...prev,
      dateTime: new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        currentDate.getDate(),
      ),
      time: formatTimeRange(currentDate),
    }));
  };


  const handleAddActivity = () => {
    const newActivities = { ...activitiesGroupedByDate };
    if (newActivities[newActivity.dateTime]) {
      newActivities[newActivity.dateTime].push({
        id: Math.max(...Object.values(newActivities).flat().map(activity => activity.id)) + 1,
        title: newActivity.title,
        time: newActivity.time,
        image: newActivity.image,
      });
    } else {
      newActivities[newActivity.dateTime] = [{
        id: Math.max(...Object.values(newActivities).flat().map(activity => activity.id)) + 1,
        title: newActivity.title,
        time: newActivity.time,
        image: newActivity.image,
      }];
    }
    setActivitiesGroupedByDate(newActivities);
    setModalVisible(false);
  };

  return (
    <View style={styles.fullScreenContainer}>
      <PatientHeader patientName={patientName} leftIconName={"grid"} rightIconName={"person-circle-outline"} />
      <View style={styles.activityContainer}>
      <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(!modalVisible)}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.prompt}>Activity Title</Text>
              <TextInput
                style={styles.input}
                onChangeText={text => setNewActivity(prev => ({ ...prev, title: text }))}
                placeholder="Activity title"
                value={newActivity.title}
              />
              <Text style={styles.prompt}>Time</Text>
              {timePickerVisible && (
                <DateTimePicker
                  value={newActivity.dateTime} // Make sure this is always a valid date object
                  mode="time"
                  display="default"
                  onChange={handleDateChange}
                />
              )}
              <Text style={styles.prompt}>Date</Text>
              {datePickerVisible && (
                <DateTimePicker
                  value={newActivity.dateTime}
                  mode="date"
                  display="default"
                  onChange={handleDateChange}
                />
              )}
              <Button title="Add Activity" onPress={handleAddActivity} />
              <Button title="Cancel" color="red" onPress={handleCancelAddActivity} />
            </View>
          </View>
        </Modal>

        <TouchableOpacity style={styles.addButton} onPress={() => setModalVisible(true)}>
          <MaterialIcons name="add" size={40} color="white" />
        </TouchableOpacity>

        <ScrollView style={styles.scrollBody}> 
          <Text style={styles.scheduleTitle}> {getFirstName(patientName)}'s Schedule</Text>
          <View style={styles.activityContainerPosts}>
            {Object.entries(activitiesGroupedByDate).map(([date, activities], index) => (
              <View key={date}>
                {index !== 0 && <View style={styles.divider} />}
                <Text style={styles.dateHeader}>{formatDate(date)}</Text>
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

      <NavBar navigation={navigation} patientName={patientName} specialIcon="house" />
    </View>
  );
};

const styles = StyleSheet.create({
  fullScreenContainer: {
    flex: 1,
    backgroundColor: '#2f6be4',
  },

  activityContainer: {
    flex: 1,
    borderRadius: 40,

    shadowColor: 'black',
    shadowOpacity: 0.4,
    shadowRadius: 6,
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
  addButton: {
    position: 'absolute',
    margin: 16,
    right: 20,
    bottom: 105, 
    backgroundColor: '#2f6be4',
    width: 61,
    height: 61,
    borderRadius: 32,
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

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  input: {
    width: 300,
    height: 40,
    marginBottom: 12,
    borderWidth: 1,
    padding: 10
  },

  prompt: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
    fontWeight: 'bold',
  },
  dateDisplay: {
    width: 300,
    height: 40,
    lineHeight: 40, // Center text vertically
    borderWidth: 1,
    padding: 10,
    textAlign: 'center',
    marginBottom: 12,
    color: '#333',
    fontSize: 16,
    backgroundColor: '#fff', // Ensure background is white for visibility
  },
});

export default PatientProfile;
