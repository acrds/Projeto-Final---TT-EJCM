import React, { useContext } from 'react';
import { View, TextInput, TouchableOpacity, Text, Image } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { BackgroundApp, H1, Label, Botao, Input, Container, TextSenha, ContainerBottom, Underline, Baloes, Absolute, Row } from './styles';
import { useNavigation } from '@react-navigation/native';
import api from '../../services/api';
import AsyncStorage from '@react-native-community/async-storage';
import {AuthContext}  from '../../contexts/auth'; 




export default function Login() {
    const Auth = useContext(AuthContext);
    const { control, handleSubmit, formState: { errors } } = useForm({ mode: 'onTouched' });
    
    const navigation = useNavigation();

    const onSubmit = (data: FormData) => {

        api.post('/login', data).then(response => {
            const token = response.data.token;
            AsyncStorage.setItem('token', token);
            Auth.setToken('Bearer ' + token);
            console.log(response);
            alert('Login feito com sucesso!');
            navigation.navigate('HomeTabs');
            
        
        }, 
        (error => ('Login não pode ser concluído.')))
    }; 


    const navegacaoTelaLogin = () => {
        
        navigation.navigate('HomeTabs');
        
    }

    interface FormData {
        email: string;
        password: string;
    }


    return (
        <BackgroundApp>
            <Absolute>
                <Baloes source={require('../../../assets/baloes.png')}></Baloes>
            </Absolute>
            <Container>
                <H1>Login</H1>
                <View>
                    <Label>Entre com o seu email</Label>
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
                            required: 'o email é obrigatório.',
                            pattern: {
                                value: /^\S+@\S+$/i,
                                message: 'Formato de email inválido.'
                            },
                        }}
                        name="email"
                        defaultValue="" />
                </View>
                {errors.email && <Text style={{ color: 'red' }}> {errors.email.message}</Text>}
                <br></br>
                <View>
                    <Label>Entre com sua senha</Label>
                    <Controller
                        control={control}
                        render={({ field: { onBlur, onChange, value } }) => (
                            <Input
                                placeholder=''
                                secureTextEntry
                                onBlur={onBlur}
                                onChangeText={(value: any) => onChange(value)}
                                value={value} />
                        )}
                        rules={{
                            required: 'a senha é obrigatório.',

                        }}
                        name="password"
                        defaultValue="" />
                </View>
                {errors.password && <Text style={{ color: 'red' }}> {errors.password.message}</Text>}
                <TouchableOpacity> <TextSenha>Esqueci minha senha</TextSenha></TouchableOpacity>
            </Container>
            <br /><br />
            <ContainerBottom>
                <Botao onPress={(handleSubmit(onSubmit,navegacaoTelaLogin)) }>Entrar</Botao>
                <br /><br />
                <Row>
                    <Text >Não possui conta?  </Text> <TouchableOpacity><Underline onPress={() => navigation.navigate('Cadastro')}>Cadastre-se aqui.</Underline></TouchableOpacity>
                </Row>
            </ContainerBottom>
        </BackgroundApp>

    );
}
