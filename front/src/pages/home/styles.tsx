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
    font-family: Signika;`

export const Navegacao = styled.View `
    background-color:#073B4C
    width: ${wp('100%')};
    height: ${hp('10%')};
    font-family: Signika;`

export const Label = styled.Text `
    color: #073B4C;
    font-size: 2em;
    font-weight: 700;
    width: ${wp('100%')};
    height: ${hp('30%')};
    margin-left:5%;`

export const ContainerScroll = styled.ScrollView.attrs(()=>({
        horizontal: true,
        contentContainerStyle:{
            alignItems: 'center'
        }
    }))`
    width: ${wp('95%')};
    height: ${hp('20%')};
    margin-right:10%; `
    
export const Opcoes = styled.TouchableOpacity`
    alignItems: center;
    justify-content: center; 
    margin-left:3%
    margin-right:5%;
    padding-rigth  

`
    
export const ImgCategoria = styled.Image`
    width: ${wp('18.1px')};
    height: ${hp('10px')};
   `
   
    
export const Titulo = styled.Text`
    color: #073B4C;
    margin-top:10px;
    font-weight: 500;
    font-family: Signika
`

