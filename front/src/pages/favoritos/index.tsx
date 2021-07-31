import React from 'react';
import { ImageComponent, ScrollView, Text , TextInput, View} from 'react-native';

import {Cabecalhofav,
        BackGroundfav,
        Navegacao,
        Opcoes,
        Fundocardfav,
        Imgfav,
        H1,
        Textfav,
        Servidor,
        Textcabecalho
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
        
        
        <Navegacao>
            
        </Navegacao>
        

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
    

    return( 
        <>
        { listafav.map(favorit => {
            return(
        
        <Opcoes key={favorit.id}>
            <Fundocardfav>
                <Imgfav source={require('../../../assets/bitaimage.png')}/>
                <H1>{favorit.titulo.charAt(0).toUpperCase() + favorit.titulo.slice(1)}</H1>
                    <Textfav>
                        {`${favorit.local} . R$ ${favorit.preco}`}
                        
                    </Textfav>
                <Servidor>{`Vendido por: ${favorit.anunciante}`}</Servidor>
            </Fundocardfav>
        </Opcoes>
        
            )})}
        </>
    )};