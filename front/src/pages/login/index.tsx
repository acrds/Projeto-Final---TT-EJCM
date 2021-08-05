import React from 'react';
import { View, TextInput, TouchableOpacity, Text, Image } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { BackgroundApp, H1, Label, Botao, Input, Container, TextSenha, ContainerBottom, Underline, Baloes, Absolute, Row } from './styles';
import { useNavigation } from '@react-navigation/native';


export default function Login() {
    const { control, handleSubmit, formState: { errors } } = useForm({ mode: 'onTouched' });
    
    const navigation = useNavigation();

    const onSubmit = (data: FormData) => {
        
        console.log(data);
    }

    const navegacaoTelaLogin = () => {
        
        navigation.navigate('Home');
        
    }

    interface FormData {
        email: string;
        senha: string;
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
                        name="senha"
                        defaultValue="" />
                </View>
                {errors.senha && <Text style={{ color: 'red' }}> {errors.senha.message}</Text>}
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
