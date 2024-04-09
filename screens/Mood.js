import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import NavBar from '../components/NavBar';
import { useNavigation } from '@react-navigation/native';

const MoodTracker = () => {
  const navigation = useNavigation();
  const [selectedMood, setSelectedMood] = useState(null);
  const moods = [
    '😄', '🙂', '😐', '😕', '😠', '🤢'
  ];

  const onMoodPress = (mood) => {
    setSelectedMood(mood); 
    console.log('Selected Mood:', mood);
  };

  return (
    <View style={styles.fullScreenContainer}>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
            <Ionicons name="home" size={32} color="white" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Mood Tracker</Text>
          <TouchableOpacity onPress={() => { /* Navigation or other action */ }}>
            <FontAwesome name="user-circle-o" size={32} color="white" />
          </TouchableOpacity>
        </View>
        <View style={styles.screenBodyContent}>
          <View style={styles.handleBar} />
          <Text style={styles.title}>Today</Text>
          <View style={styles.moodsContainer}>
            {moods.map((mood, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.moodButton,
                  selectedMood === mood && styles.selectedMoodButton 
                ]}
                onPress={() => onMoodPress(mood)}
              >
                <Text style={styles.moodText}>{mood}</Text>
              </TouchableOpacity>
            ))}
          </View>
          {selectedMood && (
            <Text style={styles.selectedMoodText}>Selected Mood: {selectedMood}</Text>
          )}
          <Text style={styles.statsTitle}>Stats</Text>
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
    height: 143,
    width: Dimensions.get('window').width,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
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
  },
  handleBar: {
    alignSelf: 'center',
    width: 77,
    height: 3,
    backgroundColor: '#CCC',
    borderRadius: 3,
    marginBottom: 20,
  },
  moodButton: {
    backgroundColor: '#7CB3F3',
    borderRadius: 20,
    padding: 20,
    margin: 10,
    width: '30%',
    justifyContent: 'center',
    alignItems: 'center',
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
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 20,
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

export default MoodTracker;
