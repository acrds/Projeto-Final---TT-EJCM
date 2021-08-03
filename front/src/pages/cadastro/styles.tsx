import styled from "styled-components/native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export const BackGroundCadastro = styled.View `
    background-color:#FFD166;
    width: ${wp('100%')};
    height: ${hp('100%')};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    font-family: Signika;`

export const Baloes = styled.Image`
    width: 200px;
    height: 350px;`

export const Absolute = styled.View`
    position: absolute;
    right: 0px;
    top:0px;`

export const Botao = styled.TouchableOpacity ` 

    padding: 20px 45px;
    border-radius: 15px;
    background-color: #F3F1E2;
    color:#118AB2;
    font-size: 1em;
    font-weight: 600;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 10%;
    margin-top:10% `

export const Input = styled.TextInput`
    outline-width:0px;
    border-bottom-color: #F3F1E2;
    border-bottom-style: solid;
    border-bottom-width: 4px;
    width: 80%;
    padding-top: 20px;`

    
export const Label = styled.Text ` 
    text-align: left;
    color: #040d10;
    font-size: 1em;
    font-weight: 600;
    margin-top: 8%;`


export const TextoPrincipal = styled.Text ` 
    text-align: left;
    color: #040d10;
    font-size: 2.5em;
    font-weight: 500;
    margin-bottom: 4%;`
    
    
export const Container = styled.View ` 
    width: ${wp('100%')};
    padding-left: 10%;
    margin-top: 20%;`
    
export const ContainerBottom = styled.View`
    width: ${wp('100%')};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;`

export const ColorBotao = styled.Text`
    color:#118AB2;
    font-weight: 700;

`
    