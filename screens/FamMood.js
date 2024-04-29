import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation, useRoute } from '@react-navigation/native';
import PatientHeader from '../components/PatientHeader';
import NavBar from '../components/NavBar';

const Mood = () => {
  const navigation = useNavigation();
  const [markedDates, setMarkedDates] = useState({});
  const moods = ['😄', '🙂', '😐', '😕', '😠', '🤢'];

  const route = useRoute();
  const { patientName } = route.params;

  useEffect(() => {
    loadMoods();
  }, []);

  const loadMoods = async () => {
    const storedMoods = await AsyncStorage.getItem('moods');
    if (storedMoods) {
      setMarkedDates(JSON.parse(storedMoods));
    }
  };

  return (
    <View style={styles.fullScreenContainer}>
      <PatientHeader patientName={patientName} leftIconName="grid" rightIconName="person-circle-outline" />

      <View style={styles.contentContainerShadow}>
        <View style={styles.contentContainer}>

          <ScrollView style={styles.container}>
            <View style={styles.screenBodyContent}>
              <Text style={styles.title}>Mood History</Text>
              <View style={styles.moodsContainer}>
                {moods.map((mood, index) => (
                  <View
                    key={index}
                    style={[styles.moodButton, styles.moodButtonDisabled]}
                  >
                    <Text style={styles.moodText}>{mood}</Text>
                  </View>
                ))}
              </View>
              <Text style={styles.statsTitle}>Calendar</Text>
              <Calendar
                markingType={'custom'}
                markedDates={markedDates}
                dayComponent={({ date, state }) => {
                  const mood = markedDates[date.dateString]?.mood;
                  return (
                    <View style={styles.calendarDay}>
                      <View style={[styles.calendarDayInner, { borderColor: mood ? '#7CB3F3' : 'transparent' }]}>
                        <Text style={[styles.calendarDayText, { color: mood ? '#7CB3F3' : 'black' }]}>{date.day}</Text>
                        <Text style={[styles.calendarMoodText, { color: mood ? '#7CB3F3' : 'black' }]}>{mood || ' '}</Text>
                      </View>
                    </View>
                  );
                }}
              />
            </View>
          </ScrollView>

        </View>
      </View>

      <NavBar navigation={navigation} patientName={patientName} specialIcon="chart-line" />
    </View>
  );
};

const styles = StyleSheet.create({
  fullScreenContainer: {
    flex: 1,
    backgroundColor: '#2f6be4',
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  contentContainerShadow: {
    flex: 1,
    borderTopLeftRadius: 100,
    backgroundColor: 'white',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    shadowColor: 'black',
    shadowOpacity: 0.4,
    shadowRadius: 6,
  },

  contentContainer: {
    flex: 1,
    borderTopLeftRadius: 100,
    backgroundColor: 'white',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    overflow: 'hidden',
  },

  screenBodyContent: {
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    backgroundColor: 'white',
    padding: 20,
    paddingTop: 35,
    marginTop: -20,
    marginBottom: 130,
  },
  moodButton: {
    backgroundColor: '#7CB3F3',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 10,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
    width: '30%',
  },
  moodButtonDisabled: {
    opacity: 0.5, 
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
    flexWrap: 'wrap',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  statsTitle: {
    fontSize: 24,
    textAlign: 'center',
    marginTop: 40,
  },
});

export default Mood;
