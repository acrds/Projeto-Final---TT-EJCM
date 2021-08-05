import React, { useReducer } from 'react';
import { useState } from 'react';
import { ImageComponent,  ScrollView, Text , TextInput, View, Button, Alert, StyleSheet, Pressable, TouchableWithoutFeedbackBase, TouchableOpacity} from 'react-native';
import { BsHeartFill } from "react-icons/bs";
import { useNavigation } from '@react-navigation/core';

import {Cabecalhofav,
        BackGroundfav,
        Navegacao,
        Opcoes,
        Fundocardfav,
        Imgfav,
        H1,
        Textfav,
        Servidor,
        Textcabecalho,
        Alinhaitens,
        } from './styles';


export default function Favoritos(){

    return (
        <ScrollView>
        
                <Cabecalhofav>
                    <Textcabecalho>Favoritos</Textcabecalho>
                   
                   
                </Cabecalhofav>


                <BackGroundfav>

                    <Cardfav/>

                </BackGroundfav>
        
        

</ScrollView>
        
    );
}

function Cardfav(){
    
    const listafav = [
        {
          id: 0,
          titulo: 'titulo do produto',
          preco: 55.6,
          anunciante: 'Fulano de tal',
          local: 'Rio de Janeiro',
          imagem: '../../../assets/escorrega.png'
        },
        {
          id: 1,
          titulo: 'outro produto',
          preco: 20,
          anunciante: 'Outro Fulano',
          local: 'Mangaratiba',
          imagem:'../../../assets/escorrega.png'
        },
      ];
    
    const [buttonPresses,setButtonPresses] = useState(0);

    const navigation = useNavigation();

    return( 
        <>
        { listafav.map(favorit => {
            return(
        
        
        <Fundocardfav key={favorit.id} >
                <Imgfav source={require('../../../assets/bitaimage.png')}/>
                
                <Alinhaitens>
                    
                    
                    <Opcoes onPress={() => navigation.navigate('Produto')}>
                    <H1>{favorit.titulo.charAt(0).toUpperCase() + favorit.titulo.slice(1)}</H1>
                        <Textfav>
                        
                            {`${favorit.local} . R$ ${favorit.preco}`}
                        </Textfav>
                    <Servidor>{`Vendido por: ${favorit.anunciante}`}</Servidor>
                    </Opcoes>
                    <TouchableOpacity><BsHeartFill
                    color = {'#EF4767'} size={'35px'} /></TouchableOpacity>
                </Alinhaitens>
                
        </Fundocardfav>
            )})}
        </>
    )};

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:'center',
        justifyContent: 'center',
    },
    text:{
        fontSize:32,  
    },
    button:{
        backgroundColor: '#ffff',
        
    },
    });
