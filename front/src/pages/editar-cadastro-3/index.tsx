import React from 'react';
import { View, TextInput, TouchableOpacity, Text, Image } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { TextInputMask } from 'react-native-masked-text'
import { BackgroundApp, SectionTop, H1, ButtonCancelar, TextCancelar, BackCinza, TextRosa, Label, Input, BackForm, BackCenter, ButtonEnviar, TextEnviar, Camera, TextSelecionar, ButtonSelecionar, ViewS, ContainerScroll, BackTitle, SectionBottom, Absolute, Confete, Row, Ball, BallS, BackButtons } from './styles'


export default function Editar_Cadastro3 () {
    const {control, handleSubmit, formState: {errors} } = useForm({ mode:'onTouched'});

    const onSubmit = (data: FormData) =>{
        console.log(data);
    }
    
    interface FormData{
        senhaAtual: string;
        senhaNova: string;
    }

    return(

       <BackgroundApp>
	
           <SectionTop>
               <H1>Dados da Conta</H1>
           </SectionTop>

        <BackTitle>
		<H1>Senha do Usuário</H1>
	</BackTitle>
           
         <BackForm>
             <View>
             <Label>Senha Atual</Label>
                <Controller
                    control={control}
                    render={({ field: { onBlur, onChange, value } }) => (
                        <Input
                            placeholder=''
                            onBlur={onBlur}
                            onChangeText={(value: any) => onChange(value)}
                            value={value} />
                    )}
                    
                    name="senhaAtual"
                    defaultValue="" />
                </View>
            

            <View>
                <Label>Nova Senha</Label>
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
                    
                    name="senhaNova"
                    defaultValue="" />
            </View>
            
           <View>
                <Label>Confirmação de Senha</Label>
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
                    
                    name="Confirmacao"
                    defaultValue="" />
            </View>
           
               
            
        </BackForm>
        <BackCenter>
               
<BackButtons>    
			<ButtonEnviar>
                	<TextEnviar>Anterior</TextEnviar>
            </ButtonEnviar>    
            	<ButtonEnviar onPress={handleSubmit(onSubmit)}>
                	<TextEnviar>Salvar alterações</TextEnviar>
            	</ButtonEnviar>
		
</BackButtons>


<Row>
<Ball></Ball><Ball></Ball><BallS></BallS>
</Row>
         </BackCenter>

<SectionBottom></SectionBottom>
	<Absolute>
                <Confete source={require('../../../assets/confete.png')}></Confete>
           </Absolute>
</BackgroundApp>


    );
}
