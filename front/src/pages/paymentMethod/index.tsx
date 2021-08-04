import React from 'react';
import { ImageComponent,  ScrollView, Text , TextInput, View, Button, Alert, StyleSheet, Pressable, TouchableWithoutFeedbackBase, TouchableOpacity} from 'react-native';
import { BsChevronLeft } from "react-icons/bs";
import { BiMoney } from "react-icons/bi";
import { BiCreditCard } from "react-icons/bi";


import {CabecalhoPay,
    Botaovoltar,
    BackGroundPay,
    NavegacaoPay,
    ViewTituloPay,
    TituloPay,
    ViewPagEntrega,
    TextoPagEntrega,
    ViewDinheiro,
    TextoDinheiro,
    ViewCredito,
    TextoCredito,
    ViewDebito,
    TextoDebito,
    AbsoluteB,
    BaloesB,
    TamanhoB


    } from './styles';
import { Navegacao } from '../home/styles';

export default function PaymentMethod(){
    return(
    <View>
        <CabecalhoPay>
            <Botaovoltar><BsChevronLeft color={"#073B4C"} size={'30px'}/></Botaovoltar>
        </CabecalhoPay>

        <BackGroundPay>
            <ViewTituloPay>
                <TituloPay>Forma de Pagamento</TituloPay>
            </ViewTituloPay>
            <ViewPagEntrega>
                <TextoPagEntrega>Pagamento na entrega</TextoPagEntrega>
            </ViewPagEntrega>
            
            <ViewDinheiro>
                <TextoDinheiro>Dinheiro</TextoDinheiro>
                <BiMoney color={'#073B4C'} size={'25px'}/>
            
            </ViewDinheiro>
            <ViewCredito>
                <TextoCredito>Crédito</TextoCredito>
                <BiCreditCard color={'#073B4C'} size={'25px'}/>
            </ViewCredito>
            <ViewDebito>
                <TextoDebito>Débito</TextoDebito>
                <BiCreditCard color={'#073B4C'} size={'25px'}/>
            </ViewDebito>
            <TamanhoB>
            <AbsoluteB>
                <BaloesB source={require('../../../assets/baloesPay.png')}/>
            </AbsoluteB>
            </TamanhoB>
        </BackGroundPay>

        <NavegacaoPay>

        </NavegacaoPay>
    
    
    </View>
    )}