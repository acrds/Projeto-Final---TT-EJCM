import React from 'react';
import { ImageComponent, ScrollView, Text, TextInput, View } from 'react-native';
import { FaSistrix } from "react-icons/fa";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FiPlus, FiShoppingCart } from 'react-icons/fi'
import { VscHome } from 'react-icons/vsc'
import { BiUser } from 'react-icons/bi'
import { BsHeart } from 'react-icons/bs'
import { useFonts } from 'expo-font';
import Inserir_Anuncio from '../inserir-anuncio';
import Perfil from '../perfil';
import Produto from '../produto';
import { useNavigation } from '@react-navigation/native';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeTabs() {
    return (
        <Tab.Navigator tabBarOptions={{ showLabel: false, activeTintColor: '#ef4767', inactiveTintColor: '#f3f1e2', activeBackgroundColor: '#073b4c', inactiveBackgroundColor: '#073b4c' }}>


            <Tab.Screen name="Home" component={Home} options={{ tabBarIcon: ({ color }) => (<BsHeart color={color} size={'24px'} />) }} />

            <Tab.Screen name="Favoritos" component={Perfil} options={{ tabBarIcon: ({ color }) => (<BsHeart color={color} size={'24px'} />) }} />

            <Tab.Screen name="Inserir_Anuncio" component={Inserir_Anuncio} options={{ tabBarIcon: ({ color }) => (<FiPlus color={color} size={'25px'} />) }} />


            <Tab.Screen name="Carrinho" component={Inserir_Anuncio} options={{ tabBarIcon: ({ color }) => (<FiShoppingCart color={color} size={'25px'} />) }} />

            <Tab.Screen name="Perfil" component={Perfil} options={{ tabBarIcon: ({ color }) => (<BiUser color={color} size={'25px'} />) }} />
        </Tab.Navigator>
    )
}



import {
    BackGroundHome,
    Cabecalho,
    Navegacao,
    Label,
    ImgServico,
    H1,
    Servidor,
    FundoServico,
    FundoProduto,
    ImgProduto,
    Barrabusca,
    TextServico,
    ImageBusca,
    H1Prod,
    TextProd,
    ServidorProd,
    ContainerScrollCat,
    Busca

} from './styles';

import { ContainerScroll, Opcoes, ImgCategoria, Titulo } from './styles';



export default function Home() {

    const navigation = useNavigation();

    return (
        <>
            <ScrollView>

                <Cabecalho>

                    <Busca>
                        <Barrabusca />
                        <FaSistrix color={'#073B4C'} />
                    </Busca>
                </Cabecalho>


                <BackGroundHome>

                    <Categorias />
                    <Label>Serviços</Label>
                    <CardServico />
                    <Label>Produtos</Label>
                    <CardProduto />
                </BackGroundHome>


            </ScrollView>
        </>

    )
};




function Categorias() {
    const listCategoria = ['infantil', 'formatura', 'casamento', 'junina',
        'fantasia', 'aniversario', 'ano-novo']

    return (
        <>
            <ContainerScrollCat>

                {listCategoria.map(categoria => {
                    return (
                        <Opcoes key={categoria}>
                            <ImgCategoria source={require(`../../../assets/${categoria}.png`)} />
                            <Titulo>{categoria.charAt(0).toUpperCase() + categoria.slice(1)}</Titulo>
                        </Opcoes>
                    )
                })
                }
            </ContainerScrollCat>
        </>
    );
}

function CardServico() {

    const listaServicos = [
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
            imagem: '../../../assets/escorrega.png'
        },
    ];


    return (

        <ContainerScroll>
            {listaServicos.map(servicos => {
                return (

                    <Opcoes key={servicos.id}>
                        <FundoServico>
                            <ImgServico source={require('../../../assets/escorrega.png')} />
                            <H1>{servicos.titulo.charAt(0).toUpperCase() + servicos.titulo.slice(1)}</H1>
                            <TextServico>
                                {`${servicos.local} . R$ ${servicos.preco}`}

                            </TextServico>
                            <Servidor>{`Vendido por: ${servicos.anunciante}`}</Servidor>
                        </FundoServico>
                    </Opcoes>

                )
            })}

        </ContainerScroll>
    )
};


function CardProduto() {

    const listaProdutos = [
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
            imagem: '../../../assets/escorrega.png'
        },
    ];


    return (

        <ContainerScroll>
            {listaProdutos.map(produtos => {
                return (
                    <Opcoes key={produtos.id}>

                        {<FundoProduto>
                            <ImgProduto source={require('../../../assets/copo.png')} />
                            <H1Prod>{produtos.titulo.charAt(0).toUpperCase() + produtos.titulo.slice(1)}</H1Prod>
                            <TextProd>
                                <Text>{`R$ ${produtos.preco}`}</Text>

                            </TextProd>
                            <ServidorProd>{`Vendido por: ${produtos.anunciante}`}</ServidorProd>
                        </FundoProduto>}
                    </Opcoes>
                )
            })}

        </ContainerScroll>
    )
};

