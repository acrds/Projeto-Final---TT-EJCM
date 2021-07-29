import React from 'react';
import { Text , View} from 'react-native';

import { BackGroundHome,
         Cabecalho,
         Navegacao,
         Label} from './styles';

import { ContainerScroll, Opcoes, ImgCategoria, Titulo } from './styles';



export default function Home(){


    return(
<>
        
            <Cabecalho>
                
            </Cabecalho>


            <BackGroundHome>

                <Categorias/>
                <Label>Serviços</Label>
                <Label>Produtos</Label>

            </BackGroundHome>
        
        
        <Navegacao>
            
        </Navegacao>


</>
        
    )};


function Categorias (){
        return(
            <>
            <ContainerScroll>
                <Opcoes>
                    
                    <ImgCategoria source={require('../../../assets/infantil.png')}/>
                    
                    <Titulo>Infantil</Titulo>
                </Opcoes>
            <Opcoes>
                
                <ImgCategoria source={require('../../../assets/formatura.png')}/>
                
                <Titulo>Formatura</Titulo>
            </Opcoes>
        <Opcoes>
            
            <ImgCategoria source={require('../../../assets/casamento.png')}/>
            
            <Titulo>Casamento</Titulo>
        </Opcoes>
        <Opcoes>
            
            <ImgCategoria source={require('../../../assets/junina.png')}/>
            
            <Titulo>Junina</Titulo>
        </Opcoes>
        <Opcoes>
            
            <ImgCategoria source={require('../../../assets/fantasia.png')}/>
            
            <Titulo>Fantasia</Titulo>
        </Opcoes>
        <Opcoes>
            
            <ImgCategoria source={require('../../../assets/aniversario.png')}/>
            
            <Titulo>Aniversário</Titulo>
        </Opcoes>
        <Opcoes>
            
            <ImgCategoria source={require('../../../assets/ano-novo.png')}/>
            
            <Titulo>Ano Novo</Titulo>
        </Opcoes>
    </ContainerScroll>
    </>
        );
    }

