import React from 'react';
import { BsHeartFill } from 'react-icons/bs';
import { View, TextInput, TouchableOpacity, Text, Image, ScrollView } from 'react-native';
import { BiMap } from "react-icons/bi";
import { BsX } from "react-icons/bs";
import { useForm, Controller } from 'react-hook-form';
import { BackgroundApp, SectionTop, ImageProduto, Title, BackIcon, TextCategoria, BackText, Desc, Anunciado, BackPreco, Carrinho, TextCarrinho, BackComentario, BackTextComentario, ContadorComentario, FotoName, PerfilN, NameN, Input, PerfilO, NameO, BackTextComentarioFeito, TextPreco, White, ContainerScroll, Comentario, TextComentarioFeito, Location, LocationText, ViewS, Ex, ButtonEnviar, TextEnviar, Direita } from './styles';
import { BsChevronLeft } from "react-icons/bs";
import { useNavigation } from '@react-navigation/core';
import { Absolute } from '../login/styles';
import { useContext, useEffect, useState } from 'react';
import ProductService from '../../services/ProductService';
import UserService from '../../services/UserService';

interface Product {
    name: string,
    description: string,
    price: number,

}



export default function Produto(props:any) {
    const { control, handleSubmit, formState: { errors } } = useForm({ mode: 'onTouched' });

    const navigation = useNavigation();

    const event_id = props.route.params.id;

    console.log(event_id);

    const [ user_id , setUserId ] = useState(1); 
    const [ promoterName, setPromoterName ] = useState();
    const [ productDetails, setProductDetails ] = useState<Product>();

    useEffect(() => {
        ProductService.showProduct(event_id).then( response => {
            if(response){
                setProductDetails(response.data)
                setUserId(response.data.user_id);
                
            }
        })
    }, [event_id])
    
    
    console.log(productDetails);

    const onSubmit = (data: FormData) => {
        console.log(data);
    }

    interface FormData {
        comentario: string;
    }
    return (
        <BackgroundApp>
            <ContainerScroll>
                <SectionTop>
                    <TouchableOpacity style ={{marginRight:'85%'}} onPress = {() => navigation.navigate("Home")}>
                        <BsChevronLeft color={"#073B4C"} size={"30px"}/>
                    </TouchableOpacity>
                    
                </SectionTop>
                <ImageProduto source={require('../../../assets/mundoBita.jpg')}></ImageProduto>
                <Title>{productDetails?.name}</Title> 
                <BackIcon>
                    <TouchableOpacity>
                        <BsHeartFill color={'#EF4767'} size={'24px'}></BsHeartFill>
                    </TouchableOpacity>
                    <TextCategoria>Indefinido</TextCategoria>
                </BackIcon>
                <BackText>
                    <Desc>
                        {productDetails?.description}

                    </Desc>

                </BackText>
                <Location><BiMap color={'#073b4c'}></BiMap><LocationText>Rio de Janeiro</LocationText></Location>
                <Anunciado>Anunciado por Cups de Gabi</Anunciado>
                <BackPreco>
                    <TextPreco>R${productDetails?.price}</TextPreco>
                    <Carrinho>
                        <TextCarrinho>
                            Adicionar ao
                            carrinho
                        </TextCarrinho>
                    </Carrinho>
                </BackPreco>

                <BackComentario>

                    <BackTextComentario>
                        <Comentario>Comentários</Comentario>
                        <ContadorComentario><White>2</White></ContadorComentario>

                    </BackTextComentario>



                    <FotoName>
                        <PerfilN source={require('../../../assets/perfil.png')}></PerfilN>
                        <NameN>Tortilha do Raphael</NameN>
                    </FotoName>
                    <Controller
                        control={control}
                        render={({ field: { onBlur, onChange, value } }) => (
                            <Input
                                placeholder='Digite seu comentário...'
                                onBlur={onBlur}
                                onChangeText={(value: any) => onChange(value)}
                                value={value} />
                        )}
                        name="comentario"
                        defaultValue="" />
                    <Direita>
                        <ButtonEnviar>
                            <TextEnviar>Enviar</TextEnviar>
                        </ButtonEnviar></Direita>

                    <FotoName>
                        <PerfilN source={require('../../../assets/camera.png')}></PerfilN>
                        <NameN>Tortilha do Raphael</NameN>
                    </FotoName>
                    <BackTextComentarioFeito>
                        <Ex>
                            <TextComentarioFeito>
                                uigyuhuçghiçjhoi ijiojijknkjn
                            </TextComentarioFeito>
                            <TouchableOpacity>
                                <BsX color={'#EF4767'} size={'18px'}></BsX>
                            </TouchableOpacity>
                        </Ex>
                    </BackTextComentarioFeito>

                    <FotoName>
                        <PerfilN source={require('../../../assets/camera.png')}></PerfilN>
                        <NameN>Tortilha do Raphael</NameN>
                    </FotoName>
                    <BackTextComentarioFeito>
                        <Ex>
                            <TextComentarioFeito>
                                uigyuhuçghiçjhoi ijiojijknkjn
                            </TextComentarioFeito>
                            <TouchableOpacity>
                                <BsX color={'#EF4767'} size={'18px'}></BsX>
                            </TouchableOpacity>
                        </Ex>
                    </BackTextComentarioFeito>


                    <ViewS>
                    </ViewS>
                    
                </BackComentario>
                
            </ContainerScroll>
            <View style={{width:'100%', height:'5%', backgroundColor:'#073b4c', position:'absolute', bottom:'0px'}}></View>

        </BackgroundApp>
    );
}
