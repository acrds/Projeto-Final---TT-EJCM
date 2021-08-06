import styled from "styled-components/native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export const BackGroundHome = styled.View `
    background-color:#F3F1E2;
    width: ${wp('100%')};
    height: ${hp('100%')};
    font-family: Signika;`

export const Barrabusca = styled.TextInput `
    background-color:#D1D28D;
    border-Radius: 20;
    text-align:center;
    justify-content:center;
    `
export const Busca = styled.View `
    display:flex;
    flex-direction:row;
    align-items:center;
    background-color:#D1D28D;
    width: ${wp('50%')};
    height: ${hp('3%')};
    padding-top:4%;
    padding-bottom:4%;
    margin-top:4%;
    margin-left:40%;
    border-Radius: 20;
    

`
export const ImageBusca = styled.Image `
    
    
    `
export const Cabecalho = styled.View `
    background-color:#FFD166
    width: ${wp('100%')};
    font-family: Signika;
    vertical-align: super;
    padding-bottom:5%;`

export const Navegacao = styled.View `
    background-color:#073B4C
    width: ${wp('100%')};
    height: ${hp('10%')};
    font-family: Signika;
    margin-top:${hp('0%')};`

export const Label = styled.Text `
    color: #073B4C;
    font-size: 2em;
    font-weight: 700;
    width: ${wp('100%')};
    height: ${hp('5%')};
    margin-left:5%;
    margin-top:${hp('-5%')};
    margin-bottom:${hp('2%')};
    font-family: Signika;`

export const ContainerScrollCat = styled.ScrollView.attrs(()=>({
        horizontal: true,
        contentContainerStyle:{
            alignItems: 'top'
        }
    }))`
    width: ${wp('95%')};
    height:${hp('20%')};
    margin-top:-8%;
    margin-right:${wp('10%')};
    margin-left:${wp('3%')};
    padding-top:${hp('-2%')};
    padding:0%
    display:flex;
    
    `
export const ContainerScroll = styled.ScrollView.attrs(()=>({
        horizontal: true,
        contentContainerStyle:{
            alignItems: 'tops'
        }
    }))`
    width: ${wp('95%')};
    margin-right:${wp('10%')};
    margin-left:${wp('3%')};
    margin-bottom:${hp('0%')};

    padding-top:15%;
    padding-bottom:-60%;

    
    `
    
export const Opcoes = styled.TouchableOpacity`
    alignItems: center;
    justify-content: center; 
    margin-left:${wp('3%')};
    margin-right:${wp('5%')};
    margin-top:${hp('0%')}
    height:${('5%')};
    margin-bottom:${hp('0%')};
    height: ${wp('40%')};
    `
    
export const ImgCategoria = styled.Image`
    width: ${wp('18%')};
    height: ${hp('10%')};
    margin-top:${hp('5%')};
   `
   
    
export const Titulo = styled.Text`
    color: #073B4C;
    margin-top:${hp('2%')};
    font-weight: 500;
    font-family: Signika;
`


export const ImgServico = styled.Image`
    width: ${wp('76%')};
    height: ${hp('15%')};
    display:flex;
    margin-left:-70%;
    margin-top:-70%;
    border-Radius: 10;
    
`

export const FundoServico = styled.View`
    background-color:#F9E1A4; 
    text-align:center;
    width: ${wp('80%')};
    border-Radius: 10; 
    margin-top:-20%;
    padding:30%;
    padding-bottom:35%;
    height: ${hp('25%')};
`
  
export const H1 = styled.Text`
    color: #073B4C;
    font-size: 1em;
    font-weight:700;
    text-align: left;
    margin-left: -60%;
    margin-top: 2%;
    margin-bottom: 2%;
    font-family: Signika;`

export const TextServico = styled.View`
    font-family: Signika;
    font-size: 0.9em;
    color: #073B4C;
    font-weight:600;
    text-align: left;
    margin-left:-57%;
    margin-top:2%;
    margin-bottom: 2%;

`

export const Servidor = styled.Text`
    color: #073B4C;
    font-size: 0.8em;
    font-family: Signika;
    margin-bottom: 2%;
    margin-top:3%;
    margin-left:-20%;
    text-align: center;

    `

export const FundoProduto = styled.View`
    background-color:#F9E1A4; 
    width: ${wp('40%')};
    height: ${hp('38%')};
    margin-bottom:${hp('20%')};
    margin-left:${wp('0%')};
    padding-bottom:20%;
    border-Radius: 10;
    margin-top: 60%;
    


`

export const ImgProduto = styled.Image`
    width: ${wp('35%')};
    height: ${hp('18%')}
    margin-left: 6%;
    border-Radius: 10;
    margin-top:5%;
    
`

export const H1Prod = styled.Text`
    color: #073B4C;
    font-size: 1em;
    font-family: Signika;
    margin-bottom: 2%;
    font-weight:700;
    margin-left: 6%;
    margin-top:5%;
`
export const TextProd = styled.Text`
    font-family: Signika;
    font-size: 0.9em;
    color: #073B4C;
    font-weight:600;
    text-align: left;
    margin-left: 9%;
    margin-top:3%;
    margin-bottom: 3%;
`

export const ServidorProd = styled.Text`
    font-family: Signika;
    font-size: 0.8em;
    color: #073B4C;
    font-weight:500;
    text-align: left;
    margin-left: 5%;
    margin-top:2%;
    margin-bottom: 2%;
    

`
