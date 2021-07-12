import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.yellowView}><Text >Hello!!!</Text></View>
      <View style={styles.blueView}><Text >Hello!!!</Text></View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  yellowView: {
    flex: 1,
    backgroundColor: "yellow",
  },
  blueView: {
    flex: 3,
    backgroundColor: "blue",
  }
});
