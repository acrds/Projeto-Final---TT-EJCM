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


export default function Produto() {
    const { control, handleSubmit, formState: { errors } } = useForm({ mode: 'onTouched' });

    const navigation = useNavigation();

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
                <Title>Cup Cakes mundo Bita</Title>
                <BackIcon>
                    <TouchableOpacity>
                        <BsHeartFill color={'#EF4767'} size={'24px'}></BsHeartFill>
                    </TouchableOpacity>
                    <TextCategoria> Festa Infantil</TextCategoria>
                </BackIcon>
                <BackText>
                    <Desc>
                        Cupcakes deliciosos e bem<br />
                        confeitados do jeito que você<br />
                        procura para a sua festa. Tudo é<br />
                        bem feito para o seu evento ser<br />
                        perfeito.

                    </Desc>

                </BackText>
                <Location><BiMap color={'#073b4c'}></BiMap><LocationText>Rio de Janeiro</LocationText></Location>
                <Anunciado>Anunciado por Cups de Gabi</Anunciado>
                <BackPreco>
                    <TextPreco>R$ 10,00</TextPreco>
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
