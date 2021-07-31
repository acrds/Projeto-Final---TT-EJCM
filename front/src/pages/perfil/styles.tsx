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
padding-left: 15%;
`

export const H1 = styled.Text ` 
color:#073b4c;
font-size:1.5em;
font-weight: bold;
`

export const BackFoto = styled.View`
display: flex;
flex-direction: column;
justify-content: center;
align-items:  center;
width: ${wp('100%')};
height: ${hp('25%')};`

export const GroupCenter = styled.View`
display: flex;
flex-direction: column;
justify-content: center;
align-items:  center;
width: ${wp('40%')};
height: ${hp('20%')};`

export const FotoPerfil = styled.Image`
width:100px;
height:100px;
border-radius: 50%;`

export const Logout = styled.Image`
width:30px;
height:30px;`

export const FotoCamera = styled.Image`
width:50px;
height:41px;
margin-left: ${wp('25%')};
margin-top: -${hp('5%')};`

export const BackInfo = styled.View`
display: flex;
flex-direction: column;
justify-content: center;
align-items:  center;
border-radius: 20px;
width: ${wp('80%')};
height: ${hp('40%')};
margin-left: ${wp('10%')};
margin-bottom: ${wp('5%')};
background-color:rgba(164, 212, 180, .4);`

export const Row = styled.View`
display: flex;
flex-direction: row;
justify-content: flex-start;
align-items:  center;
margin-bottom: ${hp('3%')};
width:100%;
margin-left: 30%;
`
export const TextFixo = styled.Text ` 
color: #073b4c; 
font-size: 1em;
font-weight: bold;
`
export const TextMutavel = styled.Text ` 
color:#073b4c;
font-size: 1em;
font-weight: bold;
`
export const BackButtons = styled.View`
display: flex;
flex-direction: row;
justify-content: space-around;
align-items:  center;
margin-bottom: ${hp('1%')};
`

export const ButtonAtualizar = styled.TouchableOpacity`
display: flex;
flex-direction: row;
justify-content: center;
align-items:  center;
padding: 10px 20px;
background-color: rgba(17, 138,178,.4);
border-radius:15px;
`

export const TextAtualizar = styled.Text`
color: rgb(17,138,178);
font-weight:900;
font-size:15px;`

export const ButtonExcluir = styled.TouchableOpacity`
display: flex;
flex-direction: row;
justify-content: center;
align-items:  center;
padding: 10px 20px;
background-color: rgba(234,71,103, .5);
border-radius:15px;
color: rgba(234,71,103);
`

export const TextExcluir = styled.Text`
    color: rgb(234,71,103);
    font-weight:900;
    font-size:15px;
    
`
