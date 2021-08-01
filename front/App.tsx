import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Cadastro from "./src/pages/cadastro";
import Home from './src/pages/home';
import Favoritos from './src/pages/favoritos';
import Carrinho from './src/pages/carrinho';


export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Carrinho/>
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
