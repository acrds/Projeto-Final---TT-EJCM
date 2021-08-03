
import React from 'react';
import Login from './src/pages/login';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FiPlus, FiShoppingCart } from 'react-icons/fi'
import { VscHome } from 'react-icons/vsc'
import { BiUser } from 'react-icons/bi'
import { BsHeart } from 'react-icons/bs'
import { useFonts } from 'expo-font';
import Inserir_Anuncio from './src/pages/inserir-anuncio';
import Perfil from './src/pages/perfil';
import Produto from './src/pages/produto';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { StyleSheet, Text, View } from 'react-native';
import Cadastro from "./src/pages/cadastro";
import Home from './src/pages/home';
import Favoritos from './src/pages/favoritos';
import Compra from './src/pages/compra';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeTabs() {
  return (
<<<<<<< HEAD
    <Tab.Navigator tabBarOptions={{ showLabel: false, activeTintColor: '#ef4767', inactiveTintColor: '#f3f1e2', activeBackgroundColor: '#073b4c', inactiveBackgroundColor: '#073b4c' }}>

      <Tab.Screen name="Home" component={Login} options={{ tabBarIcon: ({ color, size }) => (<VscHome color={color} size={'27px'} />) }} />

      <Tab.Screen name="Favoritos" component={Perfil} options={{ tabBarIcon: ({ color }) => (<BsHeart color={color} size={'24px'} />) }} />

      <Tab.Screen name="Inserir_Anuncio" component={Inserir_Anuncio} options={{ tabBarIcon: ({ color }) => (<FiPlus color={color} size={'25px'} />) }} />

      <Tab.Screen name="Carrinho" component={Inserir_Anuncio} options={{ tabBarIcon: ({ color }) => (<FiShoppingCart color={color} size={'25px'} />) }} />
=======
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Home/>
    </View>
  );
}
>>>>>>> feature/front/Gabriela/criando-tela-de-home

      <Tab.Screen name="Perfil" component={Perfil} options={{ tabBarIcon: ({ color }) => (<BiUser color={color} size={'25px'} />) }} />
    </Tab.Navigator>


export default function App() {
    const [loaded] = useFonts({
      Signika: require('../front/assets/assetsFonts/Signika.ttf')
    })
      
    return(
      <View style = { styles.container } >
        <StatusBar style="auto" />
        <Cadastro />

        <NavigationContainer >
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name="MenuTabs" component={HomeTabs} options={{
              tabBarBadge: 3
            }} />
          </Stack.Navigator>
        </NavigationContainer>

      </View >
    );
  }

}
