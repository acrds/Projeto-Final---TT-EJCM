import React, { useEffect, useState } from 'react';
import { ImageComponent, ScrollView, Text, TextInput, View } from 'react-native';
import { FaSistrix } from "react-icons/fa";

import { useNavigation } from '@react-navigation/native';
import ProductService from '../../services/ProductService';


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

interface Product {
    id: number;
    name: string;
    price: number;
    userId: number;
};


export default function Home() {

    const navigation = useNavigation();
    
    
    
    const [product, setProducts] = useState<Product[]>([]);
    


    useEffect(() => {
        ProductService.listProduct().then(response => {
            console.log(response);
            if (response) setProducts(response.data);
        })
    }, []);

    console.log(product);
    
    function handleNavigateToProductDetails(id: number) {
        navigation.navigate('Produto', { id });
    }


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
                    
                    <ContainerScroll>
                    { product.map(servicos => {
                            return(
                            <Opcoes key={servicos.id} onPress={()=>{handleNavigateToProductDetails(servicos.id)}} >
                                <FundoServico >
                                    <ImgServico source={require('../../../assets/escorrega.png')} />
                                    <H1>{servicos.name.charAt(0).toUpperCase() + servicos.name.slice(1)}</H1>
                                    <TextServico>
                                        {`Rio de Janeiro . R$ ${servicos.price}`}

                                    </TextServico>
                                    <Servidor>{`Vendido por: Gabi`}</Servidor> 
                                    
                                </FundoServico>
                            </Opcoes>
                       );
                    })} 
                    
                    </ContainerScroll>
                    <Label>Produtos</Label>

                    <ContainerScroll>
                    { product.map(servicos => {
                            return(
                            <Opcoes key={servicos.id} onPress={()=>{handleNavigateToProductDetails(servicos.id)}} >
                                <FundoProduto >
                                    <ImgProduto source={require('../../../assets/escorrega.png')} />
                                    <H1Prod>{servicos.name.charAt(0).toUpperCase() + servicos.name.slice(1)}</H1Prod>
                                    <TextProd>
                                        {`Rio de Janeiro . R$ ${servicos.price}`}

                                    </TextProd>
                                    <ServidorProd>{`Vendido por: Gabi`}</ServidorProd> 
                                    
                                </FundoProduto>
                            </Opcoes>
                       );
                    })} 
                    
                    </ContainerScroll>
                    
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




