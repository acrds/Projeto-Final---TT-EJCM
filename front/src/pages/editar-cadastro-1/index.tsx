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
        titulo: string;
        descricao: string;
        cep: string;
        preco: string;
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
             <Label>Nome completo</Label>
                <Controller
                    control={control}
                    render={({ field: { onBlur, onChange, value } }) => (
                        <Input
                            placeholder=''
                            onBlur={onBlur}
                            onChangeText={(value: any) => onChange(value)}
                            value={value} />
                    )}
                    
                    name="nome"
                    defaultValue="" />
                </View>
            {errors.nome && <Text style={{color: 'red'}}> {errors.nome.message}</Text>}

            <View>
                <Label>Apelddo</Label>
                <Controller
                    control={control}
                    render={({ field: { onBlur, onChange, value } }) => (
                        <Input
                            placeholder=''
                            onBlur={onBlur}
                            onChangeText={(value: any) => onChange(value)}
                            value={value} />
                    )}
                    
                    name="descricao"
                    defaultValue="" />
            </View>
            {errors.apelido && <Text style={{color: 'red'}}> {errors.descricao.message}</Text>}
           
            <View>
                <Label>CPF/CNPJ</Label>
                <Controller
                    control={control}
                    render={({ field: { onBlur, onChange, value } }) => (
                        <Input
                            placeholder=''
                            onBlur={onBlur}
                            onChangeText={(value: any) => onChange(value)}
                            value={value} />
                    )}
                    
                    name="cpf_cnpj"
                    defaultValue="" />
            </View>
            {errors.cpf_cnpj && <Text style={{color: 'red'}}> {errors.cpf_cnpj.message}</Text>}
            
        
            
            
        </BackForm>
        <BackCenter>
               
        
            <ButtonEnviar onPress={handleSubmit(onSubmit)}>
                <TextEnviar>Próximo</TextEnviar>
            </ButtonEnviar>
<Row>
<BallS></BallS><Ball></Ball><Ball></Ball>
</Row>
         </BackCenter>

<SectionBottom></SectionBottom>
	<Absolute>
                <Confete source={require('../../../assets/confete.png')}></Confete>
           </Absolute>
</BackgroundApp>


    );
}
