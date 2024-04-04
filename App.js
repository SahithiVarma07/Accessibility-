import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import * as Font from 'expo-font';
import Dashboard from './screens/Dashboard'; 
import PatientProfile from './screens/PatientProfile'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Activity from './screens/Activity';

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
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="PatientProfile" component={PatientProfile} options={{ title: 'Patient Profile' }} />
        <Stack.Screen name="Activity" component={Activity} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
