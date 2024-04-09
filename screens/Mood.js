import React from 'react';
import { View, Text, ScrollView, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import NavBar from '../components/NavBar'; // If you want to include NavBar
import { useNavigation } from '@react-navigation/native';

const MoodTracker = () => {
  const navigation = useNavigation();
  const moods = [
    '😄', '🙂', '😐', '😕', '😠', '🤢'
  ];

  const onMoodPress = (mood) => {
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
                style={styles.moodButton}
                onPress={() => onMoodPress(mood)}
              >
                <Text style={styles.moodText}>{mood}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <Text style={styles.statsTitle}>Stats</Text>
          {/* Additional stats components would go here */}
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
    backgroundColor: '#2f6be4',
    borderRadius: 20,
    padding: 20,
    margin: 10,
    width: '40%', // Adjust the width as per your layout requirement
    justifyContent: 'center',
    alignItems: 'center',
  },
  moodText: {
    fontSize: 30,
    // Adjust your mood text styles if necessary
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
  statsTitle: {
    fontSize: 24,
    textAlign: 'center',
    marginTop: 40,
  },
  // ... any other styles you may need
});

export default MoodTracker;
