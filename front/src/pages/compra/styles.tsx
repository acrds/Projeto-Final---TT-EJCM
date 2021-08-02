import styled from "styled-components/native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export const CabecalhoCompra = styled.View`
    background-color:#FFD166
    width: ${wp('100%')};
    height:${hp('10%')};`

export const BackGroundCompra = styled.View`
    background-color:#F3F1E2;
    width: ${wp('100%')};
    height: ${hp('80%')};
    `

export const NavegacaoCompra = styled.View`
    background-color:#073B4C;
    width: ${wp('100%')};
    height: ${hp('10%')};
    `

export const TextoUm = styled.Text`
    font-size: 1.5em;
    color: #073B4C;
    font-family: Signika;
    font-weight:700;
    margin-top:3%;`

export const TextoDois = styled.Text`
    font-size: 0.8em;
    color: #073B4C;
    font-family: Signika;
    font-weight:500;
    margin-top:2%;`

export const ViewTextoTitulo = styled.View`
    align-items: center;

`

export const ContainerInformacoes = styled.View`
    background-color:#F9E1A4;
    color: #073B4C;
    width: ${wp('80%')};
    height: ${hp('15%')};
    align-items: center;
    flex-direction:row;
    justify-content:space-between;
    border-Radius:10;
    margin-left:10%
    margin-top:5%;
    
    `

export const ViewContainerInfo = styled.View`
width:80%;
   `

export const TituloProdContainer= styled.Text`
    font-size: 1em;
    color: #073B4C;
    font-family: Signika;
    font-weight:600;
    margin-top:5%;
    margin-left:5%;
    `

export const InfoProdContainer = styled.Text`
    font-size: 0.9em;
    color: #073B4C;
    font-family: Signika;
    font-weight:600;
    margin-top:3%;
    margin-left:6%;
    color: #073B4C;`

export const VendedorProdContainer = styled.Text`
    font-size: 0.8em;
    color: #073B4C;
    font-family: Signika;
    font-weight:500;
    margin-top:5%;
    margin-left:25%;
    color: #073B4C;`

export const ContainerNum = styled.Text`
    font-size: 1em;
    color: #073B4C;
    font-family: Signika;
    font-weight:600;
    margin-top:2%;
    margin-right:20%;
    background-color:#85B5AB;
    padding:2%;
    border-Radius:5;
    `

export const Valores = styled.View`
    border-bottom-color: #C4C4C4;
    border-bottom-style: solid;
    border-bottom-width: 1px;
    border-top-color: #C4C4C4;
    border-top-style: solid;
    border-top-width: 1px;
    width: ${wp('80%')};
    height: ${hp('15%')};
    align-items: center;
    flex-direction:row;
    justify-content:space-around;
    margin-left:10%
    margin-top:5%;`


export const ValoresTexto = styled.View`
    margin-left:-15%;`
export const TextoSubtotal = styled.Text`
    font-size: 0.9em;
    color: #073B4C;
    font-family: Signika;
    font-weight:500;
    margin-top:5%;
`
export const TextoTaxa = styled.Text`
    font-size: 0.9em;
    color: #073B4C;
    font-family: Signika;
    font-weight:500;
    margin-top:5%;`
export const TextoTotal = styled.Text`
    font-size: 1em;
    color: #073B4C;
    font-family: Signika;
    font-weight:600;
    margin-top:10%;`
export const ValoresNum = styled.View`
    margin-right:-15%;`
export const NumSubtotal = styled.Text`
    font-size: 0.9em;
    color: #073B4C;
    font-family: Signika;
    font-weight:500;
    margin-top:5%;`
export const NumTaxa = styled.Text`
    font-size: 0.9em;
    color: #073B4C;
    font-family: Signika;
    font-weight:500;
    margin-top:5%;`
export const NumTotal = styled.Text`
    font-size: 1em;
    color: #073B4C;
    font-family: Signika;
    font-weight:600;
    margin-top:10%;`

export const Endereco = styled.View`
    border-bottom-color: #C4C4C4;
    border-bottom-style: solid;
    border-bottom-width: 1px;
    width: ${wp('80%')};
    height: ${hp('10%')};
    align-items: left;
    margin-left:10%`
export const TextoEndereco = styled.Text`
    font-size: 0.9em;
    color: #073B4C;
    font-family: Signika;
    font-weight:500;
    margin-top:3%;
    margin-left:3%;`

export const BotaoAvaliar = styled.TouchableOpacity``
