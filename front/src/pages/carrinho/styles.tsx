import styled from "styled-components/native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export const Cabecalhocar = styled.View`
    background-color:#FFD166
    width: ${wp('100%')};
    height:${hp('10%')};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content:center;
    `

export const Elementoscabecalho = styled.Text`
   margin-left:2%;
   margin-right:2%;
   font-size: 1em;
   color: #073B4C;
   font-family: Signika;
   font-weigth:600;
`
export const Elementoscarrinho = styled.View`
    background-color:#A4D4B4;
    color: #073B4C;
    font-size: 1em;
    font-family: Signika;
    width: ${wp('7%')};
    height: ${hp('4%')};
    font-weigth:600;
    align-items: center;
    justify-content:center;
    border-Radius:100;
`

export const Backgroundcar = styled.View`
    background-color:#F3F1E2;
    width: ${wp('100%')};
    height: ${hp('95%')};
    font-family: Signika;
    `

export const Navegacao = styled.View`
    background-color:#073B4C;
    width: ${wp('100%')};
    height: ${hp('10%')};
    font-family: Signika;
    
`
export const ViewTotal = styled.View`
    border-bottom-color: #073B4C;
    border-bottom-style: solid;
    border-bottom-width: 1px;
    width: ${wp('80%')};
    height: ${hp('15%')};
    margin-left:10%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content:space-around;
    
    

`
export const Total = styled.Text`
    font-family: Signika;
    font-size: 1.5em;
    font-weight:600;
    color:#073B4C;
    
    
    
`
export const TotalNumeros = styled.Text`
    font-family: Signika;
    font-size: 1.3em;
    font-weight:600;
    color:#118AB2;
    margin-bottom:8%;
    margin-left:50%;

`
export const Parcelas = styled.Text`
    font-family: Signika;
    font-size: 0.9em;
    font-weight:500;
    color:#118AB2;
    
`
export const ViewTipoEntrega = styled.View`
    border-bottom-color: #073B4C;
    border-bottom-style: solid;
    border-bottom-width: 1px;
    width: ${wp('80%')};
    height: ${hp('15%')};
    margin-left:10%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content:space-around;
    
`
export const InfoEntrega = styled.Text`
    font-family: Signika;
    font-size: 1em;
    font-weight:500;
    color:#118AB2;
    margin-bottom:3%;

    `



export const BotaoAlterar = styled.Text`
    font-family: Signika;
    font-size: 0.9em;
    font-weight:500;
    color:#073B4C
    margin-bottom:11%;
`

export const ViewCard = styled.View`
    width: ${wp('80%')};
    height: ${hp('20%')};  
    margin-left:10%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content:space-around;
    
`

export const ImgCard = styled.Image`
    width: ${wp('35%')};
    height: ${hp('15%')};
    border-Radius: 10;
    margin-top:5%;
`

export const TituloCard = styled.Text`
    font-size: 1em;
    color: #118AB2;
    font-weight:600;
    font-family: Signika;
    margin-bottom:5%;
`

export const Anunciante = styled.Text`
    font-size: 0.9em;
    color: #073B4C
    font-weight:500;
    font-family: Signika;
    margin-left:3%;
    margin-bottom:2%;`

export const TextAnunciante = styled.Text`
    font-size: 0.9em;
    color: #073B4C
    font-weight:700;
    font-family: Signika;
    margin-left:15%;
`

export const ViewQuantidade = styled.View`
    
    display: flex;
    flex-direction: row;
    align-items: center;
`
export const TextQuanti = styled.View`
    font-size: 0.8em;
    color: #118AB2;
    font-weight:700;
    font-family: Signika;
    margin-left:10%;
    margin-top:8%;
`

export const Botaolixeira = styled.TouchableOpacity`
    margin-left:90%;
    margin-bottom:5%;
`

export const BotaoDeAdc = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left:10%;
    margin-top:7%;
`

export const Plus = styled.View`
    background-color:#F2BEBD;
    border-Radius:50;
`

export const AdcNumero = styled.View`
    margin:20%;
    font-size:0.8em;
    font-family:Signika;
    `

export const Menos = styled.View`
    background-color:#F2BEBD;
    border-Radius:50;

`

export const Resumo = styled.Text`
    font-family: Signika;
    font-size: 1.3em;
    font-weight:600;
    color:#118AB2;
    margin-top:5%;
    margin-left:10%;
    margin-bottom:5%;
   
    `

export const ResumoProd=styled.View`
    border-bottom-color: #118AB2;
    border-bottom-style: solid;
    border-bottom-width: 1px;
    width: ${wp('80%')};
    margin-left: 10%;
    margin-bottom: 5%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content:space-around;
`

export const ValorResumoProd=styled.View`
    font-size: 1em;
    font-weight:500;
    color:#073B4C`

export const TituloResumoProd=styled.View`
    font-size: 1em;
    font-weight:600;
    color:#073B4C`

export const ResumoFrete=styled.View`
    border-bottom-color:#118AB2;
    border-bottom-style: solid;
    border-bottom-width: 1px;
    width: ${wp('80%')};
    margin-left: 10%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content:space-around;
    
`
export const ValorResumoFrete=styled.View`
    align-items: center;
    margin-left:33%;
    font-family: Signika;
    font-size: 1em;
    font-weight:500;
    color:#073B4C
`

export const  TituloResumoFrete=styled.View`
    margin-left:-3%;
    font-family: Signika;
    font-size: 1em;
    font-weight:500;
    color:#073B4C
`

export const  BotaoFormaPagamento=styled.TouchableOpacity`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content:space-around;
    margin-top:10%;
    background-color:#AFD2D4;
    width: ${wp('80%')};
    height: ${hp('6px')};
    margin-left:10%;
    border-Radius:10;
`
export const  TextoFormaPagamento=styled.View`
    font-family: Signika;
    font-size: 1em;
    font-weight:600;
    color:#118AB2;
`
export const  IconeFormaPagamento=styled.View``

export const  BotaoConcluir=styled.TouchableOpacity`
    background-color:#F2BEBD;
    color:#EF4767;
    margin-top:8%;
    margin-left:30%;
    width: ${wp('40%')};
    height: ${hp('6px')};
    text-align:center;
    justify-content:center;
    font-size:1em;
    font-weight:600;
    border-Radius: 10;
    
`
