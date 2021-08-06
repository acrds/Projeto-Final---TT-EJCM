import React from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { TextInputMask } from 'react-native-masked-text';
import { useNavigation } from '@react-navigation/native';
import { BsChevronLeft } from "react-icons/bs";
import { BackGroundCadastro,
         Baloes,
         Absolute,
         Botao,
         Input,
         Label,
         TextoPrincipal,
         Container,
         ContainerBottom,
         ColorBotao} from './styles';
import api from '../../services/api';


export default function Cadastro (){
    const { control, handleSubmit, formState:{errors}, getValues  } = useForm({mode: 'onTouched'});
    
    const navigation = useNavigation();

    const onSubmit = (data: FormData) => { 
        console.log(data);
        
        api.post('/users', data).then(response => {
            alert('Cadastro feito com sucesso!')
            navigation.navigate('Login')
        }, 
        (error => ('Cadastro não pode ser concluído.'))) 
    };

    const onError = (errors: Object) => { console.log(errors) };


    const navegacaoTela = () => {
        
        navigation.navigate('HomeTabs');
        
    }


    interface FormData { 
        email:string;
        password:string;
        confirmaSenha:string;
    }

    return (
        <BackGroundCadastro>

            <TouchableOpacity style ={{marginLeft:'5%'}} onPress = {() => navigation.navigate("Login")}>
                <BsChevronLeft color ={"#073B4C"} size={"30px"}/>
            </TouchableOpacity>

            <Absolute>
            <Baloes source={require('../../../assets/baloes.png')}></Baloes>
            </Absolute>
        
            <Container>
                    <TextoPrincipal>Cadastro</TextoPrincipal>
                <View>
                    
                    <Label>Insira seu e-mail</Label>
                    <Controller
                        control = {control}
                        render = {({field:{onBlur, onChange, value}}) => (
                            <Input
                                //placeholder = "E-mail"
                                onBlur = {onBlur} 
                                onChangeText={(value:any) => onChange(value)}
                                value = {value}

                            />
                    )}

                    rules={{
                        required:'o email é obrigatório.',
                        pattern: {
                            value:/^\S+@\S+$/i,
                            message: 'Formato de email inválido.'
                        },
                    }}
                    name = 'email'
                    defaultValue=''
                    />
                    {errors.email && <Text style={{ color:'red'}}>{errors.email.message}</Text>}
                </View>
                <View>
                    <Label>Crie sua senha</Label>
                    <Controller
                        control = {control}
                        render = {({field:{onBlur, onChange, value}}) => (
                            <Input
                                //placeholder = "Senha"
                                secureTextEntry //oculta senha
                                onBlur = {onBlur} 
                                onChangeText={(value:any) => onChange(value)}
                                value = {value}

                            />
                    )}

                    rules ={{
                        required: 'A senha é obrigatória'
                        
                    }}
                    name = 'password'
                    defaultValue=''
                    />
                    {errors.password && <Text style={{ color:'red'}}>{errors.password.message}</Text>}
                </View>
                 <View>
                    <Label>Repita sua senha</Label>
                    <Controller
                        control = {control}
                        render = {({field:{onBlur, onChange, value}}) => (
                            <Input
                                //placeholder = "Confirme a senha"
                                secureTextEntry
                                onBlur = {onBlur} 
                                onChangeText={(value:any) => onChange(value)}
                                value = {value}

                            />
                    )}
                    rules={{ 
                        validate: {
                            comparaSenhas: (value) => {
                            const { password } = getValues();
                            return password === value || 'As senhas estão diferentes';
                         }
                        }
                       }}
              
                    name = 'confirmarSenha'
                    defaultValue=''
                    />
                {errors.confirmarSenha && <Text style={{ color:'red'}}>{errors.confirmarSenha.message}</Text>}
                </View> 
            </Container>
            <ContainerBottom>
                <Botao onPress={handleSubmit(onSubmit, navegacaoTela)}>
                    <ColorBotao>Entrar</ColorBotao>
                </Botao>
            </ContainerBottom>
        </BackGroundCadastro>
        )};
