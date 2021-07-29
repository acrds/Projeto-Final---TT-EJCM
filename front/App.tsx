import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/pages/login';
import Inserir_Anuncio from './src/pages/inserir-anuncio';
import Perfil from './src/pages/perfil';


import { useFonts } from 'expo-font';
export default function App() {
  const [ loaded ] = useFonts({
    Signika: require('../front/assets/assetsFonts/Signika.ttf'),
  })
  return (
    <View>
      <Perfil/>
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
