// App.js or any other parent component
import React from 'react';
import { View, StyleSheet } from 'react-native';
import DashboardHeader from './components/DashboardHeader'; 

export default function App() {
  return (
    <View style={styles.container}>
      <DashboardHeader />
      {/* Other components */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
