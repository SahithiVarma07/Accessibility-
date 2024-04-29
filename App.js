import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Settings } from 'react-native';
import * as Font from 'expo-font';
import Dashboard from './screens/Dashboard'; 
import PatientProfile from './screens/PatientProfile'
import EditInfo from './screens/EditInfo';
import Mood from './screens/Mood';
import Activity from './screens/Activity';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PatientsProvider } from './PatientsContext'; 
import Calls from './screens/Calls';
import AccountSettings from './screens/AccountSettings';
import WelcomeScreen from './screens/WelcomeScreen';
import StaffLog from './screens/StaffLog';
import FamilyLog from './screens/FamilyLog';
import FamPatientProfile from './screens/FamPatientProfile';
import FamCalls from './screens/FamCalls';
import FamMood from './screens/FamMood';
import FamEditInfo from './screens/FamEditInfo';
import FamActivity from './screens/FamActivity';

// Function to load fonts
async function loadFonts() {
  await Font.loadAsync({
    'Inter': require('./assets/Inter-VariableFont_slnt,wght.ttf'), 
  });
}

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const Stack = createNativeStackNavigator();

  useEffect(() => {
    loadFonts().then(() => setFontsLoaded(true));
  }, []);

  if (!fontsLoaded) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <PatientsProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false, animation: 'fade' }}>
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="FamilyLog" component={FamilyLog} />
        <Stack.Screen name="StaffLog" component={StaffLog} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="PatientProfile" component={PatientProfile} options={{ title: 'Patient Profile' }} />
          <Stack.Screen name="EditInfo" component={EditInfo} />
          <Stack.Screen name="Mood" component={Mood} />
          <Stack.Screen name="Activity" component={Activity} />
          <Stack.Screen name="Calls" component={Calls} />
          <Stack.Screen name="AccountSettings" component={AccountSettings} />
          <Stack.Screen name="FamPatientProfile" component={FamPatientProfile} />
          <Stack.Screen name="FamMood" component={FamMood} />
          <Stack.Screen name="FamCalls" component={FamCalls} />
          <Stack.Screen name="FamEditInfo" component={FamEditInfo} />
          <Stack.Screen name="FamActivity" component={FamActivity} />


        </Stack.Navigator>
      </NavigationContainer>
    </PatientsProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});