
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
import Editar_Cadastro1 from './src/pages/editar-cadastro-1';
import Editar_Cadastro2 from './src/pages/editar-cadastro-2';
import Editar_Cadastro3 from './src/pages/editar-cadastro-3';
import Cadastro from "./src/pages/cadastro";
import Home from './src/pages/home';
import Favoritos from './src/pages/favoritos';
import Carrinho from './src/pages/carrinho';
import PaymentMethod from './src/pages/paymentMethod';
import Compra from './src/pages/compra';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator tabBarOptions={{ showLabel: false, activeTintColor: '#ef4767', inactiveTintColor: '#f3f1e2', activeBackgroundColor: '#073b4c', inactiveBackgroundColor: '#073b4c' }}>
      
      <Tab.Screen name="Home" component={Home} options={{ tabBarIcon: ({ color, size }) => (<VscHome color={color} size={'27px'} />) }}/>
      <Tab.Screen name="Favoritos" component={Favoritos} options={{ tabBarIcon: ({ color }) => (<BsHeart color={color} size={'24px'} />) }}/>
      <Tab.Screen name="InserirAnuncio" component={Inserir_Anuncio} options={{ tabBarIcon: ({ color }) => (<FiPlus color={color} size={'25px'} />) }} />
      <Tab.Screen name="Carrinho" component={Carrinho} options={{ tabBarIcon: ({ color }) => (<FiShoppingCart color={color} size={'25px'} />) }} />
      <Tab.Screen name="Perfil" component={Perfil} options={{ tabBarIcon: ({ color }) => (<BiUser color={color} size={'25px'} />) }} />
    </Tab.Navigator>
  )
}

export default function App() {
  const [loaded] = useFonts({
    Signika: require('../front/assets/assetsFonts/Signika.ttf')
  })

  return (

    <NavigationContainer >
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="HomeTabs" component={HomeTabs} />
        
        {/*<Stack.Screen name="Favoritos" component={Favoritos} />
        <Stack.Screen name="Editar_Cadastro1" component={Editar_Cadastro1} />
        <Stack.Screen name="Editar_Cadastro2" component={Editar_Cadastro2} />
        <Stack.Screen name="Editar_Cadastro3" component={Editar_Cadastro3} /> */}
      </Stack.Navigator>
    </NavigationContainer>

  );

}
