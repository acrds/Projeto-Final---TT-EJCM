import styled from "styled-components/native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';




export const Cabecalhofav = styled.View`
    background-color:#FFD166
    width: ${wp('100%')};
    height:${hp('10%')};
    justify-align: center;
    alignItems: center;
    `
    

export const Textcabecalho = styled.Text`
    font-size: 2em;
    color:#073B4C;
    font-weight:700;
    margin-top:5%; 
    font-family: Signika;`

export const BackGroundfav = styled.View`
    background-color:#F3F1E2;
    width: ${wp('100%')};
    height: ${hp('80%')};
    font-family: Signika;`

export const Navegacao = styled.View`
    background-color:#073B4C
    width: ${wp('100%')};
    height: ${hp('10%')};
    font-family: Signika;
    margin-top:${hp('0%')};`

export const Opcoes = styled.TouchableOpacity`
    text-align: left;
    `

export const Fundocardfav = styled.View`
    background-color:#F9E1A4; 
    width: ${wp('90%')};
    height: ${hp('33%')};
    margin-left:${wp('5%')};
    padding-bottom:0%;
    border-Radius: 10;
    margin-top: 5%;`

export const Imgfav = styled.Image`
    width: ${wp('86%')};
    height: ${hp('18%')};
    margin-left:${wp('2%')};
    margin-top:${wp('2%')};
    border-Radius: 10; `

export const H1 = styled.Text`
    color: #073B4C;
    font-size: 1.2em;
    font-family: Signika;
    margin-bottom: 2%;
    font-weight:700;
    margin-left: -8%;
    margin-top:-10%;`

export const Textfav = styled.View`
    font-family: Signika;
    font-size: 1em;
    color: #073B4C;
    font-weight:600;
    text-align: left;
    margin-left: -6%;
    margin-top:-1%;
    margin-bottom: 3%;`
    
export const  Servidor = styled.Text`
    text-align: left;
    font-size: 0.8em;
    color: #073B4C;
    font-weight:500;
    margin-left: -6%
    font-family: Signika;`

export const Botaofav = styled.TouchableOpacity`
   margin-left: 90%;


`
export const Alinhaitens = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content:space-around;
    width: ${wp('90%')};
    height: ${hp('15px')};
   
    
`