import styled from "styled-components/native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export const BackGroundHome = styled.View `
    background-color:#F3F1E2;
    width: ${wp('100%')};
    height: ${hp('80%')};
    font-family: Signika;`

export const Cabecalho = styled.View `
    background-color:#FFD166
    width: ${wp('100%')};
    height: ${hp('10%')};
    font-family: Signika;
    vertical-align: super;`

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
    height: ${hp('10%')};
    margin-left:5%;
    margin-top:${hp('0%')}
    margin-bottom:${hp('0%')}`

export const ContainerScroll = styled.ScrollView.attrs(()=>({
        horizontal: true,
        contentContainerStyle:{
            alignItems: 'center'
        }
    }))`
    width: ${wp('95%')};
    height: ${hp('20%')};
    margin-right:${wp('10%')};
    margin-left:${wp('3%')};
    margin-top:${hp('0%')}
    margin-bottom:${hp('0%')}`
    
export const Opcoes = styled.TouchableOpacity`
    alignItems: center;
    justify-content: center; 
    margin-left:${wp('3%')};
    margin-right:${wp('5%')};
    margin-top:${hp('0%')}
    margin-bottom:${hp('0%')}`
    
export const ImgCategoria = styled.Image`
    width: ${wp('18%')};
    height: ${hp('10%')};
   `
   
    
export const Titulo = styled.Text`
    color: #073B4C;
    margin-top:${hp('2%')};
    font-weight: 500;
    font-family: Signika
`


export const ImgServico = styled.Image`
    width: ${wp('80%')};
    height: ${hp('22%')};
    margin-bottom:${hp('20%')} 
`

export const FundoServico = styled.View`
    background-color:#F9E1A4; 
    width: ${wp('80%')};
    height: ${hp('35%')};
    margin-bottom:${hp('10%')};
`

export const TextoServico = styled.Text``
    
export const H1 = styled.Text`
    font-weigth:600;
`
export const ClassifiqueLocal = styled.View``

export const Servidor = styled.Text``

export const FundoProduto = styled.View`
    background-color:#F9E1A4; 
    width: ${wp('40%')};
    height: ${hp('35%')};
    margin-bottom:${hp('20%')};
    margin-left:${wp('0%')};

`

export const ImgProduto = styled.Image``

