import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Cadastro from "./src/pages/cadastro";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Cadastro/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
