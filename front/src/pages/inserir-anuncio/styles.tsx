import styled from 'styled-components/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const BackgroundApp = styled.View ` 
background-color: #f3f1e2;
width: ${wp('100%')};
height: ${hp('100%')};
font-family: Signika;
`
export const SectionTop = styled.View ` 
background-color: #FFC94D;
width: ${wp('100%')};
height: ${hp('8%')};
display: flex;
flex-direction: row;
justify-content: space-around;
align-items:  center;
`

export const H1 = styled.Text ` 
color:#073b4c;
font-size:1.5em;
font-weight: bold;
`
export const ButtonCancelar = styled.TouchableOpacity`
display: flex;
flex-direction: row;
justify-content: center;
align-items:  center;
padding: 2px 8px;
color: #f3f1e2;
background-color: #073b4c;
border-radius:5px;
`

export const TextCancelar = styled.Text`
color: #f3f1e2;
font-size:18px;`

export const BackCinza = styled.View`
background-color:#c4c4c4;
border-radius:10px;
display: flex;
flex-direction: column;
justify-content: center;
align-items:  center;
width: ${wp('94%')};
margin-top:${hp('2%')};
margin-left:${wp('3%')};
height: ${hp('20%')};`

export const TextRosa = styled.Text`
color:#ef4767;
font-weight:bold;
font-size:1.4em;`

export const Input = styled.TextInput`
    outline-width:0px;
    border-bottom-color: #118ab2;
    border-bottom-style: solid;
    border-bottom-width: 1px;
    width: 80%;
    padding-top: 20px;
    margin-bottom:${hp('2%')};
    width:${wp('85%')};
`
export const Label = styled.Text ` 
text-align: left;
color:  #118ab2;
font-size: 1em;
font-weight: 600;
`
export const BackForm = styled.View`
width: ${wp('100%')};
padding-left:${wp('5%')};
padding-right:${wp('5%')};
margin-top:${hp('2%')};
`
export const BackCenter = styled.View`
width: ${wp('100%')};

display: flex;
flex-direction: column;
justify-content: center;
align-items:  center;`

export const ButtonEnviar = styled.TouchableOpacity`
display: flex;
flex-direction: row;
justify-content: center;
align-items:  center;
padding: 10px 20px;
color: #f3f1e2;
background-color: rgba(17, 138,178,.4);
border-radius:15px;
`

export const TextEnviar = styled.Text`
color: rgb(17,138,178);
`
export const Camera = styled.Image`
width:85px;
height:65px;`

export const ButtonSelecionar = styled.TouchableOpacity`
display: flex;
flex-direction: row;
justify-content: space-around;
align-items:  center;
padding: 20px 60px;
color: #f3f1e2;
background-color: rgba(17, 138,178,.4);
border-radius:15px;
margin-bottom:${hp('2%')};
margin-top:${hp('2%')};
`

export const TextSelecionar = styled.Text`
color: rgb(17,138,178);`