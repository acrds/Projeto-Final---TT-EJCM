import React from 'react';
import { View, TextInput, TouchableOpacity, Text, Image } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { BackgroundApp, H1, Label, Button, Input, Container, TextSenha, ContainerBottom, Underline, Baloes, Absolute} from './styles';

export default function Login () {
    const {control, handleSubmit, formState: {errors} } = useForm({ mode:'onTouched'});

    const onSubmit = (data: FormData) =>{
        console.log(data);
    }
    
    interface FormData{
        email: string;
        senha: string;
    }

    return(
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
                        required:'o email é obrigatório.',
                        pattern: {
                            value:/^\S+@\S+$/i,
                            message: 'Formato de email inválido.'
                        },
                    }}
                    name="email"
                    defaultValue="" />
            </View>
            {errors.email && <Text style={{color: 'red'}}> {errors.email.message}</Text>}
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
                        required:'a senha é obrigatório.',
                        
                    }}
                    name="senha"
                    defaultValue="" />
            </View>
            {errors.senha && <Text style={{color: 'red'}}> {errors.senha.message}</Text>}
            <TextSenha>Esqueci minha senha</TextSenha>
        </Container>
        <br/><br/>
        <ContainerBottom>
            <TouchableOpacity onPress={handleSubmit(onSubmit)}>
                <Button>Entrar</Button>
            </TouchableOpacity>
            <br/><br/>
            <Text>Não possui conta? <Underline>Cadastre-se aqui.</Underline></Text>
            </ContainerBottom> 
        </BackgroundApp>

    );
}

