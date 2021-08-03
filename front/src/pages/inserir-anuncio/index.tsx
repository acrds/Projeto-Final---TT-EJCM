import React from 'react';
import { View, TextInput, TouchableOpacity, Text, Image } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { BackgroundApp, SectionTop, H1, ButtonCancelar, TextCancelar, BackCinza, TextRosa, Label, Input, BackForm, BackCenter, ButtonEnviar, TextEnviar, Camera, TextSelecionar, ButtonSelecionar } from './styles'


export default function Inserir_Anuncio () {
    const {control, handleSubmit, formState: {errors} } = useForm({ mode:'onTouched'});

    const onSubmit = (data: FormData) =>{
        console.log(data);
    }
    
    interface FormData{
        titulo: string;
        descricao: string;
        cep: string;
        preco: string;
    }

    return(
       <BackgroundApp>
           <SectionTop>
               <H1>Inserir Anúncio</H1>
               <ButtonCancelar>
                    <TextCancelar>Cancelar</TextCancelar>
                </ButtonCancelar>
           </SectionTop>
        <View>
            <BackCinza>
            <Camera source={require('../../../assets/camera.png')}></Camera>
            <TextRosa>Incluir fotos</TextRosa>
            <Text>0 a 5 adicionadas</Text>

            </BackCinza>
        </View>
         <BackForm>
             <View>
             <Label>Titulo do Anúncio</Label>
                <Controller
                    control={control}
                    render={({ field: { onBlur, onChange, value } }) => (
                        <Input
                            placeholder=''
                            onBlur={onBlur}
                            onChangeText={(value: any) => onChange(value)}
                            value={value} />
                    )}
                    rules={{
                        required:'o titulo é obrigatório.',
                        
                    }}
                    name="titulo"
                    defaultValue="" />
                </View>
            {errors.titulo && <Text style={{color: 'red'}}> {errors.titulo.message}</Text>}

            <View>
                <Label>Descrição</Label>
                <Controller
                    control={control}
                    render={({ field: { onBlur, onChange, value } }) => (
                        <Input
                            placeholder=''
                            onBlur={onBlur}
                            onChangeText={(value: any) => onChange(value)}
                            value={value} />
                    )}
                    rules={{
                        required:'a descrição é obrigatório.',
                        
                    }}
                    name="descricao"
                    defaultValue="" />
            </View>
            {errors.descricao && <Text style={{color: 'red'}}> {errors.descricao.message}</Text>}
           
            <View>
                <Label>Cep</Label>
                <Controller
                    control={control}
                    render={({ field: { onBlur, onChange, value } }) => (
                        <Input
                            placeholder=''
                            onBlur={onBlur}
                            onChangeText={(value: any) => onChange(value)}
                            value={value} />
                    )}
                    rules={{
                        required:'o cep é obrigatório.',
                        
                    }}
                    name="cep"
                    defaultValue="" />
            </View>
            {errors.cep && <Text style={{color: 'red'}}> {errors.cep.message}</Text>}
            
            <View>
                <Label>Preço R$</Label>
                <Controller
                    control={control}
                    render={({ field: { onBlur, onChange, value } }) => (
                        <Input
                            placeholder=''
                            onBlur={onBlur}
                            onChangeText={(value: any) => onChange(value)}
                            value={value} />
                    )}
                    rules={{
                        required:'o preco é obrigatório.',
                        
                    }}
                    name="preco"
                    defaultValue="" />
            </View>
            {errors.preco&& <Text style={{color: 'red'}}> {errors.preco.message}</Text>}
            
        </BackForm>
        <BackCenter>
                <ButtonSelecionar>
                    <TextSelecionar>Selecione uma categoria</TextSelecionar>
                    <TextSelecionar>--</TextSelecionar>
                </ButtonSelecionar>
        
            <ButtonEnviar onPress={handleSubmit(onSubmit)}>
                <TextEnviar>Enviar Anúncio</TextEnviar>
            </ButtonEnviar>
         </BackCenter>
        </BackgroundApp>

    );
}
