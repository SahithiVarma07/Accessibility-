import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import * as Font from 'expo-font';
import Dashboard from './screens/Dashboard'; 

// Function to load fonts
async function loadFonts() {
  await Font.loadAsync({
    'Inter': require('./assets/Inter-VariableFont_slnt,wght.ttf'), 
  });
}

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

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
    <Dashboard />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
