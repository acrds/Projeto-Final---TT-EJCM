import React from 'react';
import { View, TextInput, TouchableOpacity, Text, Image } from 'react-native';
import { BackgroundApp, SectionTop, H1, BackFoto, GroupCenter, FotoPerfil, BackInfo, TextFixo, TextMutavel, Row, BackButtons, ButtonAtualizar, ButtonExcluir, TextAtualizar, TextExcluir, FotoCamera, Logout } from './styles'
import { useNavigation } from '@react-navigation/native';


export default function Perfil () {
    const navigation= useNavigation();
        return(
            <BackgroundApp>
                <SectionTop>
                    <H1>Perfil</H1>
                    <TouchableOpacity>
                    <Logout source={require('../../../assets/logout.png')}></Logout>
                    </TouchableOpacity>
                </SectionTop>
                <BackFoto>
                    <GroupCenter>
                        <TouchableOpacity>
                        <FotoPerfil source={require('../../../assets/perfil.png')}></FotoPerfil>
                        <FotoCamera source={require('../../../assets/camera-perfil.png')}></FotoCamera>   
                        </TouchableOpacity>                    
                    </GroupCenter>
                </BackFoto>
                <BackInfo>
                    <Row><TextFixo>Nome: </TextFixo><TextMutavel>Cupcake Baby & Kids</TextMutavel></Row>
                    <Row><TextFixo>Senha: </TextFixo><TextMutavel>********</TextMutavel></Row>
                    <Row><TextFixo>Email: </TextFixo><TextMutavel>email@email.com</TextMutavel></Row>
                    <Row><TextFixo>Endereço: </TextFixo><TextMutavel>Rua R, 108</TextMutavel></Row>
                    <Row><TextFixo>CPF: </TextFixo><TextMutavel>123.456.78-90</TextMutavel></Row>
                </BackInfo>
                
            <BackButtons>
                <ButtonAtualizar onPress={() => navigation.navigate('Editar_Cadastro1')}>
                    <TextAtualizar>Atualizar</TextAtualizar>
                </ButtonAtualizar>
                <ButtonExcluir onPress={() => navigation.navigate('Home')}>
                    <TextExcluir>
                        Excluir conta
                    </TextExcluir>
                </ButtonExcluir>
            </BackButtons>
            
            </BackgroundApp>
        );
}