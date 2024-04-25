import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation, useRoute } from '@react-navigation/native';
import PatientHeader from '../components/PatientHeader';
import NavBar from '../components/NavBar';

const Mood = () => {
  const navigation = useNavigation();
  const [selectedMood, setSelectedMood] = useState(null); // No longer used to change state
  const [markedDates, setMarkedDates] = useState({}); // Static display only

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
              <Text style={styles.title}>Select Mood</Text>
              <View style={styles.moodsContainer}>
                {moods.map((mood, index) => (
                  <View key={index} style={styles.moodButton}>
                    <Text style={styles.moodText}>{mood}</Text>
                  </View>
                ))}
              </View>
              {selectedMood && (
                <Text style={styles.selectedMoodText}>Selected Mood: {selectedMood}</Text>
              )}
              <Text style={styles.statsTitle}>Calendar</Text>
              <Calendar
                markingType={'custom'}
                markedDates={markedDates}
                // Removed interactive elements
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
  // Style definitions remain the same
  fullScreenContainer: {
    flex: 1,
    backgroundColor: '#2f6be4',
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  // Additional styles...
});

export default Mood;
