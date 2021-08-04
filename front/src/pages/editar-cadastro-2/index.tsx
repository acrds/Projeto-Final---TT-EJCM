import React from 'react';
import { View, TextInput, TouchableOpacity, Text, Image } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { TextInputMask } from 'react-native-masked-text'
import { BackgroundApp, SectionTop, H1, ButtonCancelar, TextCancelar, BackCinza, TextRosa, Label, Input, BackForm, BackCenter, ButtonEnviar, TextEnviar, Camera, TextSelecionar, ButtonSelecionar, ViewS, ContainerScroll, BackTitle, SectionBottom, Absolute, Confete, Row, Ball, BallS } from './styles'


export default function Editar_Cadastro1 () {
    const {control, handleSubmit, formState: {errors} } = useForm({ mode:'onTouched'});

    const onSubmit = (data: FormData) =>{
        console.log(data);
    }
    
    interface FormData{
        telefone: string;
        endereco: string;
    }

    return(

       <BackgroundApp>
	
           <SectionTop>
               <H1>Dados da Conta</H1>
           </SectionTop>

        <BackTitle>
		<H1>Dados do Usuário</H1>
	</BackTitle>
           
         <BackForm>
             <View>
             <Label>Endereço</Label>
                <Controller
                    control={control}
                    render={({ field: { onBlur, onChange, value } }) => (
                        <Input
                            placeholder=''
                            onBlur={onBlur}
                            onChangeText={(value: any) => onChange(value)}
                            value={value} />
                    )}
                    
                    name="endereco"
                    defaultValue="" />
                </View>
            

            <View>
                <Label>Telefone</Label>
                <Controller
                    control={control}
                    render={({ field: { onBlur, onChange, value } }) => (
                        <Input
                            placeholder=''
                            onBlur={onBlur}
                            onChangeText={(value: any) => onChange(value)}
                            value={value}
			    defaultValue="" />
                    )}
                    
                    name="telefone"
                    defaultValue="" />
            </View>
            
           
           
            
        
            
            
        </BackForm>
        <BackCenter>
               
        
            <ButtonEnviar onPress={handleSubmit(onSubmit)}>
                <TextEnviar>Próximo</TextEnviar>
            </ButtonEnviar>
<Row>
<Ball></Ball><BallS></BallS><Ball></Ball>
</Row>
         </BackCenter>

<SectionBottom></SectionBottom>
	<Absolute>
                <Confete source={require('../../../assets/confete.png')}></Confete>
           </Absolute>
</BackgroundApp>


    );
}
