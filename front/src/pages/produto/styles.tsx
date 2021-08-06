import styled from 'styled-components/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const BackgroundApp = styled.View ` 
background-color: #f3f1e2;
width: ${wp('100%')};
height: auto;
min-height:${hp('100%')};
font-family: Signika;
`
export const SectionTop = styled.View ` 
background-color: #FFC94D;
width: ${wp('100%')};
height: ${hp('8%')};
display: flex;
flex-direction: row;
justify-content: flex-end;
align-items:  center;
padding-right: 20px;
`


export const ButtonEditar = styled.TouchableOpacity`
display: flex;
flex-direction: row;
justify-content: center;
align-items:  center;
padding: 2px 8px;
color: #f3f1e2;
background-color: #073b4c;
border-radius:5px;
`

export const TextEditar = styled.Text`
color: #f3f1e2;
font-size:18px;`


export const ImageProduto = styled.Image`
border-radius:20px;
width: ${wp('80%')};
height: ${hp('20%')};
margin-left:${wp('10%')};
margin-top: ${hp('2%')};
margin-bottom: ${hp('2%')};`

export const Title = styled.Text`
font-size: 20px;
margin-left: ${wp('10%')};
color:#073b4c;
font-weight: 900;
`
export const BackIcon = styled.View`
width: ${wp('100%')};
height: ${hp('8%')};
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
`
export const TextCategoria = styled.Text`
padding:5px 8px;
background-color: rgba(239, 71, 103, .4);
color:#ef4767;
border-radius:20px;
`
export const BackText = styled.View`
width: ${wp('100%')};
height: ${hp('15%')};
margin-top:${hp('1%')};

`

export const Desc = styled.Text`
text-align:center;
font-size:14px;

color:#073b4c;
font-weight: 700;
`
export const Location = styled.View`
display: flex;
flex-direction:row;
align-items:center;
justify-content:center;
margin-top:10px;`

export const LocationText = styled.Text`
font-size:15px;
color:#073b4c;
font-weight: 900;`

export const Anunciado = styled.Text`
text-align:center;
font-size:12px;
color:#073b4c;
`
export const BackPreco = styled.View`
width: ${wp('100%')};
height: ${hp('8%')};
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
`
export const Carrinho = styled.TouchableOpacity`
display: flex;
flex-direction: row;
justify-content: center;
align-items:  center;
padding: 10px 20px;
color: #f3f1e2;
background-color: rgba(17, 138,178,.4);
border-radius:15px;
`

export const TextCarrinho = styled.Text`
color: rgb(17,138,178);
`
export const TextPreco = styled.Text`
color:#073b4c;
font-weight: 900;
font-size: 25px;
`

export const BackComentario = styled.View`
width: ${wp('100%')};
padding-left: ${wp('5%')};;
height: ${hp('8%')};

`
export const BackTextComentario = styled.View`
width: ${wp('20%')};
height: ${hp('6%')};
display: flex;
flex-direction: row;
justify-content: flex-start;
align-items: center;

`
export const Comentario = styled.Text`
font-size: 20px;
color: #073b4c;
font-weight:700;
`
export const White = styled.Text`
color:white;`
export const ContadorComentario = styled.View`
    width:20px;
     margin-left:${wp('5%')};
    height:20px;
    display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
 background-color: #073b4c;
 color: white; 
 border-radius: 50%;`

export const FotoName = styled.View`
    width: ${wp('80%')};
    height: ${hp('5%')};
    margin-left:${wp('5%')};
    display: flex;
flex-direction: row;
justify-content: flex-start;
align-items: center;
`
export const PerfilN = styled.Image`
border-radius: 50%;
width: 20px;
height: 20px;
`

export const NameN = styled.Text`
 margin-left:${wp('5%')};
font-size:12px;
color: #073b4c;
`

export const Input = styled.TextInput`
    outline-width:0px;
    width: 80%;
    background-color: rgba(7, 59, 76, .23);
    color: rgba(7, 59, 76, .53);
    margin-bottom:${hp('2%')};
    width:${wp('85%')};
    padding:8px 5px 0px 5px;
    border-radius:20px;
    padding-top: 5px;
    padding-bottom: 5px;
    margin-left: 10px;
`
export const Direita = styled.View`
   
height: ${hp('4%')};    
    width:${wp('88%')};
display: flex;

flex-direction: row;
justify-content: flex-end;
align-items:  center;
`
export const ButtonEnviar = styled.TouchableOpacity`
display: flex;

flex-direction: row;
justify-content: center;
align-items:  center;
padding: 2px 8px;
color: #f3f1e2;
background-color: #073b4c;
border-radius:5px;
width:50px;

`

export const TextEnviar = styled.Text`
color: #f3f1e2;
font-size:12px;`

export const BackTextComentarioFeito = styled.View`
    background-color: #073b4c;
    margin-bottom:${hp('2%')};
    width:${wp('85%')};
    padding:8px 5px 0px 20px;
    border-radius:20px;
    padding-top: 7px;
    padding-bottom: 7px;
	margin-left:${wp('3%')};
`

export const TextComentarioFeito  = styled.Text`
	font-size:12px;
	color: #f3f2e1;
`
export const Ex = styled.View`
  	width:100%;
	height: 100%;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;

`
export const ViewS = styled.View`
  	width:${wp('100%')};
	height: ${hp('10%')};
`

export const ContainerScroll = styled.ScrollView`

`

export const PerfilO = styled.Image`
border-radius: 50%;
width: 20px;
height: 20px;
`

export const NameO = styled.Text`
font-size:12px;
color: #073b4c;
`




    
