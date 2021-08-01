import React from 'react';
import {BsHeartFill} from 'react-icons/bs'
import { View, TextInput, TouchableOpacity, Text, Image, ScrollView } from 'react-native';

import { useForm, Controller } from 'react-hook-form';
import { BackgroundApp, SectionTop, ButtonEditar, TextEditar, ImageProduto, Title, BackIcon, TextCategoria, BackText, Desc, Anunciado, BackPreco, Carrinho, TextCarrinho, BackComentario, BackTextComentario, ContadorComentario, FotoName, PerfilN, NameN, Input, PerfilO, NameO, BackTextComentarioFeito, TextPreco, White, ContainerScroll, Comentario, TextComentarioFeito } from './styles';



export default function Produto () {
    const {control, handleSubmit, formState: {errors} } = useForm({ mode:'onTouched'});

    const onSubmit = (data: FormData) =>{
        console.log(data);
    }
    
    interface FormData{
        comentario: string;
    }
    return(
        <BackgroundApp>
           <SectionTop>
               <ButtonEditar>
                    <TextEditar>Editar</TextEditar>
                </ButtonEditar>
           </SectionTop>
           <ImageProduto source={require('../../../assets/mundoBita.jpeg')}></ImageProduto>
           <Title>Cup Cakes mundo Bita</Title>
           <BackIcon>
               <TouchableOpacity>
                <BsHeartFill color={'#EF4767'}></BsHeartFill>
               </TouchableOpacity>
               <TextCategoria> Festa Infantil</TextCategoria>
           </BackIcon>
           <BackText>
               <Desc>
                   Cupcakes deliciosos e bem<br/>
                   confeitados do jeito que você<br/>
                   procura para a sua festa. Tudo é<br/>
                   bem feito para o seu evento ser<br/>
                   perfeito.
               </Desc>
           </BackText>
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
               <ContadorComentario><White>1</White></ContadorComentario>
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
          

            <FotoName>
               <PerfilN source={require('../../../assets/camera.png')}></PerfilN>
               <NameN>Tortilha do Raphael</NameN>
           </FotoName>
           <BackTextComentarioFeito>
               <TextComentarioFeito>
                   uigyuhuçghiçjhoi ijiojijknkjn
               </TextComentarioFeito>
           </BackTextComentarioFeito>
           <FotoName>
               <PerfilN source={require('../../../assets/camera.png')}></PerfilN>
               <NameN>Tortilha do Raphael</NameN>
           </FotoName>
           <BackTextComentarioFeito>
               <TextComentarioFeito>
                   uigyuhuçghiçjhoi ijiojijknkjn
               </TextComentarioFeito>
           </BackTextComentarioFeito>


</BackComentario>

           </BackgroundApp>
    );
}
