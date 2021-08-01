import styled from "styled-components/native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export const CabecalhoPay = styled.View`
    background-color:#FFD166
    width: ${wp('100%')};
    height:${hp('10%')};
    alignItems: left;`

export const Botaovoltar = styled.TouchableOpacity`
    margin-top: 5%;
    margin-left: 2%;`

    
export const BackGroundPay = styled.View`
    background-color:#F3F1E2;
    width: ${wp('100%')};
    height: ${hp('80%')};
    
`
export const NavegacaoPay = styled.View`
    background-color:#073B4C
    width: ${wp('100%')};
    height: ${hp('10%')};

`
export const ViewTituloPay = styled.View`

    border-bottom-color: #C4C4C4;
    border-bottom-style: solid;
    border-bottom-width: 1px;
    width: ${wp('80%')};
    height: ${hp('10%')};
    margin-left:10%;
    justify-content:center;
    align-items: center;
    `
export const TituloPay = styled.Text`
    color: #073B4C;
    font-size: 1.7em;
    font-weight:600;
    font-family:Signika;
`
export const ViewPagEntrega = styled.View`
    border-bottom-color: #C4C4C4;
    border-bottom-style: solid;
    border-bottom-width: 1px;
    width: ${wp('80%')};
    height: ${hp('10%')};
    margin-left:10%;
    align-items: left;
    justify-content:center;`

export const TextoPagEntrega = styled.Text`
    font-family: Signika;
    font-size: 1.3em;
    font-weight:500;
    color:#118AB2;
`

export const ViewDinheiro = styled.TouchableOpacity`
    border-color: #C4C4C4;
    border-style: solid;
    border-width: 1px;
    width: ${wp('80%')};
    height: ${hp('6%')};
    margin-left:10%;
    align-items: left;
    justify-content:center;
    margin-top:5%;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-around;
`
export const TextoDinheiro = styled.Text`
    font-family: Signika;
    font-size: 0.9em;
    font-weight:500;
    color:#073B4C;
    margin-right:30%;`
export const ViewCredito = styled.TouchableOpacity`
    border-color: #C4C4C4;
    border-style: solid;
    border-width: 1px;
    width: ${wp('80%')};
    height: ${hp('6%')};
    margin-left:10%;
    align-items: left;
    justify-content:center;
    margin-top:5%;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-around;`
export const TextoCredito = styled.Text`
    font-family: Signika;
    font-size: 0.9em;
    font-weight:500;
    color:#073B4C;
    margin-right:30%;`
export const ViewDebito = styled.TouchableOpacity`
    border-color: #C4C4C4;
    border-style: solid;
    border-width: 1px;
    width: ${wp('80%')};
    height: ${hp('6%')};
    margin-left:10%;
    align-items: left;
    justify-content:center;
    margin-top:5%;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-around;`
export const TextoDebito = styled.Text`
    font-family: Signika;
    font-size: 0.9em;
    font-weight:500;
    color:#073B4C;
    margin-right:30%;`

export const TamanhoB = styled.View`
  
`

export const AbsoluteB = styled.View`
    position: absolute;
    right: 0px;
    top:0px;`

export const BaloesB = styled.Image`
    width: 130px;
    height: 290px;`