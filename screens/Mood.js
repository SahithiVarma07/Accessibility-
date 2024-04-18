import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Calendar } from 'react-native-calendars';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation, useRoute } from '@react-navigation/native';
import PatientHeader from '../components/PatientHeader';
import NavBar from '../components/NavBar';

const Mood = () => {
  const navigation = useNavigation();
  const [selectedMood, setSelectedMood] = useState(null);
  const [markedDates, setMarkedDates] = useState({});
  const moods = ['😄', '🙂', '😐', '😕', '😠', '🤢'];

  const route = useRoute();
  const { patientName } = route.params;

  useEffect(() => {
    loadMoods();
  }, []);

  const onMoodPress = async (dateString) => {
    const newMarkedDates = {
      ...markedDates,
      [dateString]: { customStyles: { container: { backgroundColor: '#2f6be4', elevation: 2 }, text: { color: 'white' } }, mood: selectedMood }
    };
    setMarkedDates(newMarkedDates);
    await AsyncStorage.setItem('moods', JSON.stringify(newMarkedDates));
  };

  const loadMoods = async () => {
    const storedMoods = await AsyncStorage.getItem('moods');
    if (storedMoods) {
      setMarkedDates(JSON.parse(storedMoods));
    }
  };

  /*      <View style={styles.patientContainerShadow}>
      <View style={styles.patientContainer}></View> */

  return (
    <View style={styles.fullScreenContainer}>

      <PatientHeader patientName={patientName} leftIconName="grid" rightIconName="person-circle-outline" />
      <View style={styles.patientContainerShadow}>
        {/* <View style={styles.patientContainer}> move line 48 above scroll view? */}
        <ScrollView style={styles.container}>
          <View style={styles.screenBodyContent}>  
            <View style={styles.handleBar} />
            <Text style={styles.title}>Select Mood</Text>
            <View style={styles.moodsContainer}>
              {moods.map((mood, index) => (
                <TouchableOpacity
                  key={index}
                  style={[styles.moodButton, selectedMood === mood && styles.selectedMoodButton]}
                  onPress={() => setSelectedMood(mood)}
                >
                  <Text style={styles.moodText}>{mood}</Text>
                </TouchableOpacity>
              ))}
            </View>
            {selectedMood && (
              <Text style={styles.selectedMoodText}>Selected Mood: {selectedMood}</Text>
            )}
            <Text style={styles.statsTitle}>Calendar</Text>
            <Calendar
              markingType={'custom'}
              markedDates={markedDates}
              onDayPress={({ dateString }) => onMoodPress(dateString)}
              dayComponent={({ date, state }) => {
                const mood = markedDates[date.dateString]?.mood;
                return (
                  <TouchableOpacity onPress={() => onMoodPress(date.dateString)}>
                    <View style={styles.calendarDay}>
                      <View style={[styles.calendarDayInner, { borderColor: mood ? '#7CB3F3' : 'transparent' }]}>
                        <Text style={[styles.calendarDayText, { color: mood ? '#7CB3F3' : 'black' }]}>{date.day}</Text>
                        <Text style={[styles.calendarMoodText, { color: mood ? '#7CB3F3' : 'black' }]}>{mood || ' '}</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        </ScrollView>
      
      </View>
      <NavBar navigation={navigation} patientName={patientName} specialIcon="chart-line" />
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
  screenBodyContent: {
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    backgroundColor: 'white',
    padding: 20,
    paddingTop: 35,
    marginTop: -20,

    shadowColor: 'black',
    shadowOpacity: 0.4,
    shadowRadius: 6,
  },
  handleBar: {
    alignSelf: 'center',
    width: 77,
    height: 3,
    backgroundColor: '#CCC',
    borderRadius: 3,
    marginBottom: 20,
  },
  patientContainerShadow: {
    backgroundColor: '#f2f2f2',
    borderRadius: 80,
    //backgroundColor: '#000',
    flex: 1,

    
  },
  patientContainer: {
    borderRadius: 45,
    overflow: 'hidden',
  },
  moodButton: {
    backgroundColor: '#7CB3F3', // Light blue background color
    borderRadius: 20, // Rounded corners
    paddingVertical: 10, // Adjust vertical padding
    paddingHorizontal: 10, // Adjust horizontal padding
    margin: 5, // Set margin to ensure fit
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000', // Shadow color for iOS
    shadowOffset: { width: 0, height: 1 }, // Shadow position for iOS
    shadowOpacity: 0.2, // Shadow opacity for iOS
    shadowRadius: 2, // Shadow blur radius for iOS
    elevation: 3, // Adds a drop shadow on Android
    width: '30%', // Adjust width to fit three items per row
  },
  selectedMoodButton: {
    backgroundColor: '#2f6be4',
  },
  moodText: {
    fontSize: 30,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginVertical: 20,
  },
  moodsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap', // Allows the items to wrap to the next line
    marginBottom: 20,
    paddingHorizontal: 10, // Reduces horizontal padding if needed
  },
  selectedMoodText: {
    fontSize: 18,
    color: '#2f6be4',
    textAlign: 'center',
    marginTop: 20,
  },
  statsTitle: {
    fontSize: 24,
    textAlign: 'center',
    marginTop: 40,
  },
});

export default Mood;
