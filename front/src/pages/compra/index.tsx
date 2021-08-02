import React from 'react';
import { ImageComponent,  ScrollView, Text , TextInput, View, Button, Alert, StyleSheet, Pressable, TouchableWithoutFeedbackBase, TouchableOpacity} from 'react-native';
import { BackGroundHome } from '../home/styles';

import {CabecalhoCompra,
        BackGroundCompra,
        NavegacaoCompra,
        TextoUm,
        TextoDois,
        ViewTextoTitulo,
        ContainerInformacoes,
        ViewContainerInfo,
        ContainerNum,
        TituloProdContainer,
        InfoProdContainer,
        VendedorProdContainer,
        Valores,
        ValoresTexto,
        TextoSubtotal,
        TextoTaxa,
        TextoTotal,
        ValoresNum,
        NumSubtotal,
        NumTaxa,
        NumTotal,
        Endereco,
        TextoEndereco,
        BotaoAvaliar,
        AbsoluteC,
        BaloesC
    
} from './styles';







export default function Compra(){
    return(

        <>
            <CabecalhoCompra>
                
            </CabecalhoCompra>
            <BackGroundCompra>
                <ViewTextoTitulo>
                    <TextoUm>Pedido n° 123</TextoUm>
                    <TextoDois>Realizado às 20:00 - 24/07/2021</TextoDois>
                </ViewTextoTitulo>

                <ContainerInformacoes>
                    <ViewContainerInfo>
                        <TituloProdContainer>Cup Cakes mundo Bita</TituloProdContainer>
                        <InfoProdContainer>Rio de Janeiro . R$ 10,00</InfoProdContainer>
                        <VendedorProdContainer>Anunciado por: Cups da Gabi</VendedorProdContainer>
                    </ViewContainerInfo>
                    <ContainerNum>3</ContainerNum>
                </ContainerInformacoes>

                <Valores>
                    <ValoresTexto>
                        <TextoSubtotal>Subtotal</TextoSubtotal>
                        <TextoTaxa>Taxa de entrega</TextoTaxa>
                        <TextoTotal>Total</TextoTotal>
                    </ValoresTexto>
                    <ValoresNum>
                        <NumSubtotal>R$ 30,00</NumSubtotal>
                        <NumTaxa>R$ 5,00</NumTaxa>
                        <NumTotal>R$ 35,00</NumTotal>
                    </ValoresNum>
                </Valores>
                <Endereco>
                    <TextoEndereco>Endereço de entrega</TextoEndereco>
                    <TextoEndereco>Rua R, 108 - 12345-678</TextoEndereco>
                </Endereco>

                <BotaoAvaliar>Avaliar</BotaoAvaliar>
                <AbsoluteC>
                <BaloesC source={require('../../../assets/baloesPay.png')}/>
                </AbsoluteC>
            
            </BackGroundCompra>
            <NavegacaoCompra>

            </NavegacaoCompra>









        </>
    )
}