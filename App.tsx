import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import Login from './src/screens/signIn/Login';

export default function App() {
  const [logado, setLogado] = useState(false);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {logado ? (
        <HomeScreen />
      ) : (
        <Login onLogin={() => setLogado(true)} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
