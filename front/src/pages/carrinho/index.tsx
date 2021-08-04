import React from 'react';
import { ImageComponent,  ScrollView, Text , TextInput, View, Button, Alert, StyleSheet, Pressable, TouchableWithoutFeedbackBase, TouchableOpacity} from 'react-native';
import { BsTrashFill , BsCircleFill} from "react-icons/bs";
import { BsPlus } from "react-icons/bs";
import {FiMinus} from 'react-icons/fi';
import { BsArrowRight } from "react-icons/bs";


import {Cabecalhocar,
        Backgroundcar,
        Navegacao,
        Elementoscabecalho,
        Elementoscarrinho,
        ViewTotal,
        Total,
        TotalNumeros,
        Parcelas,
        ViewTipoEntrega,
        InfoEntrega,
        BotaoAlterar,
        ViewCard,
        ImgCard,
        TituloCard,
        Anunciante,
        ViewQuantidade,
        TextAnunciante,
        Botaolixeira,
        BotaoDeAdc,
        Plus,
        AdcNumero,
        Menos,
        TextQuanti,
        Resumo,
        ResumoProd,
        TituloResumoProd,
        ValorResumoProd,
        ResumoFrete,
        TituloResumoFrete,
        ValorResumoFrete,
        BotaoFormaPagamento,
        TextoFormaPagamento,
        IconeFormaPagamento,
        BotaoConcluir
            

        
    } from './styles';


export default function Favoritos(){
    return (

    <ScrollView>
        <Cabecalhocar>
            <Elementoscabecalho>Carrinho</Elementoscabecalho>
            <Elementoscarrinho>1</Elementoscarrinho>
        </Cabecalhocar>
        <Backgroundcar>
            <ViewTotal>
                <Total>Total</Total>
                <View>
                <TotalNumeros>R$ 15,00</TotalNumeros>
                <Parcelas>em 1x de R$ 15,00 sem juros</Parcelas>
                </View>
            </ViewTotal>
            <ViewTipoEntrega>
                <View>
                    <InfoEntrega>Entrega para 12345-678 </InfoEntrega>
                    <InfoEntrega>Normal - R$ 5,00 em 5 dias úteis </InfoEntrega>
                </View>
                <BotaoAlterar><TouchableOpacity>Alterar</TouchableOpacity></BotaoAlterar>
            </ViewTipoEntrega>
            <ViewCard>
                <ImgCard source={require('../../../assets/bitaimage.png')}/>
                <View>
                        <Botaolixeira><BsTrashFill
                        color = {'#EF4767'} size={'15px'} /></Botaolixeira>
                    <TituloCard>Cup cakes mundo Bita</TituloCard>
                    <View>
                        
                        <Anunciante>Vendido e entregue por </Anunciante>
                        <TextAnunciante>Cups da Gabi</TextAnunciante>
                        <ViewQuantidade>
                            <TextQuanti>Quantidade</TextQuanti>
                            <BotaoDeAdc>
                                <Plus><TouchableOpacity><BsPlus color={'#EF4767'}/></TouchableOpacity></Plus>
                                <AdcNumero>1</AdcNumero>
                                <Menos><TouchableOpacity><FiMinus color={'#EF4767'}/></TouchableOpacity></Menos>

                            </BotaoDeAdc>
    
                        </ViewQuantidade>

                </View>
                </View>
            </ViewCard>
            <View>
                    <Resumo>Resumo da Compra:</Resumo>
                    <ResumoProd>
                        <TituloResumoProd>Cup cake mundo Bita</TituloResumoProd>
                        <ValorResumoProd>R$ 10,00</ValorResumoProd>
                    </ResumoProd>
                    <ResumoFrete>
                        <TituloResumoFrete>Frete</TituloResumoFrete>
                        <ValorResumoFrete>R$ 5,00</ValorResumoFrete>
                  </ResumoFrete>
            </View>

            <BotaoFormaPagamento>

                <TextoFormaPagamento>Forma de pagamento</TextoFormaPagamento>
                <IconeFormaPagamento><BsArrowRight color={'#118AB2'} size={'30px'}/></IconeFormaPagamento>
            </BotaoFormaPagamento>
            <BotaoConcluir>Concluir</BotaoConcluir>
        </Backgroundcar>
        <Navegacao>
    
        </Navegacao>
    </ScrollView>
)}