import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/pages/login';


import { useFonts } from 'expo-font';
export default function App() {
  const [ loaded ] = useFonts({
    Signika: require('../front/assets/assetsFonts/Signika.ttf'),
  })
  return (
    <View>
      <Login/>
    </View>
    
  );
}
/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/
