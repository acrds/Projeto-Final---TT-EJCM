import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {FiHome} from 'react-icons/fi'
import  Inserir_Anuncio  from'../inserir-anuncio'
import Perfil from '../perfil';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

 export function HomeTabs(){
    return(
        <Tab.Navigator tabBarOptions={{showLabel: false}}>
            <Tab.Screen name="Perfil" component={Perfil} options={{tabBarIcon: ({color, size}) =>(<FiHome color={color} size={size}/>)}}/>
            <Tab.Screen name="Inserir_Anuncio" component={Inserir_Anuncio} options={{tabBarIcon: ({color, size}) =>(<FiHome color={color} size={size}/>)}}/>
        </Tab.Navigator>
    );
}