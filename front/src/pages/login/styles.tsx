import styled from 'styled-components/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';



export const Baloes = styled.Image`
width: 200px;
height: 350px;
`
export const Absolute = styled.View`
    position: absolute;
    right: 0px;
    top:0px;
    
`

export const BackgroundApp = styled.View ` 
background-color: #FFC94D;
width: ${wp('100%')};
height: ${hp('100%')};
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
font-family: Signika;
`

export const H1 = styled.Text ` 
text-align: left;
color: #040d10;
font-size: 2.5em;
font-weight: 500;
margin-bottom: 4%;
`

export const Label = styled.Text ` 
text-align: left;
color: #040d10;
font-size: 1em;
font-weight: 600;
`
export const Button = styled.TouchableOpacity ` 

padding: 20px 45px;
border-radius: 10px;
background-color: white;
font-size: 1em;
font-weight: 600;
color: #118ab2;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-bottom: 10%;
`
export const Input = styled.TextInput`
    outline-width:0px;
    border-bottom-color: #ffffff;
    border-bottom-style: solid;
    border-bottom-width: 4px;
    width: 80%;
    padding-top: 20px;
   
   
`

export const Container = styled.View ` 
width: ${wp('100%')};
padding-left: 10%;

margin-top: 20%;
`
export const ContainerBottom = styled.View`
width: ${wp('100%')};
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
export const TextSenha = styled.Text`
    text-align: right;
    margin-top: 3%;
    margin-right: 20%;
    text-decoration: underline;`

export const Underline = styled.Text`
    text-decoration: underline;`    