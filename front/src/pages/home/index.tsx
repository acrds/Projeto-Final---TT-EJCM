import React from 'react';
import { ImageComponent, ScrollView, Text , TextInput, View} from 'react-native';
import { FaSistrix } from "react-icons/fa";


import { BackGroundHome,
         Cabecalho,
         Navegacao,
         Label,
         ImgServico,
         H1,
         Servidor,
         FundoServico,
         FundoProduto,
         ImgProduto,
         Barrabusca,
         TextServico,
         ImageBusca,
         H1Prod,
         TextProd,
         ServidorProd,
         ContainerScrollCat,
         Busca
        
         } from './styles';

import { ContainerScroll, Opcoes, ImgCategoria, Titulo } from './styles';



export default function Home(){


    return(
        <>
    <ScrollView>
        
                <Cabecalho>

                   <Busca>
                        <Barrabusca/>
                        <FaSistrix color={'#073B4C'}/>
                    </Busca>
                </Cabecalho>


                <BackGroundHome>

                    <Categorias/>
                    <Label>Serviços</Label>
                    <CardServico/>
                    <Label>Produtos</Label>
                    <CardProduto/>
                </BackGroundHome>
        
        
        <Navegacao>
            
        </Navegacao>
        

</ScrollView>
</>
        
    )};




function Categorias (){
    const listCategoria = ['infantil','formatura','casamento','junina',
    'fantasia','aniversario', 'ano-novo']

        return(
            <>
            <ContainerScrollCat>
 
 { listCategoria.map(categoria => {
     return(
        <Opcoes key={categoria}>
        <ImgCategoria source={require(`../../../assets/${categoria}.png`)}/>
        <Titulo>{categoria.charAt(0).toUpperCase() + categoria.slice(1)}</Titulo>
        </Opcoes>
     )
 }) 
}
              </ContainerScrollCat>
    </>
    );
}

function CardServico(){
    
    const listaServicos = [
        {
          id: 0,
          titulo: 'titulo do produto',
          preco: 55.6,
          anunciante: 'Fulano de tal',
          local: 'Rio de Janeiro',
          imagem: '../../../assets/escorrega.png'
        },
        {
          id: 1,
          titulo: 'outro produto',
          preco: 20,
          anunciante: 'Outro Fulano',
          local: 'Mangaratiba',
          imagem:'../../../assets/escorrega.png'
        },
      ];
    

    return( 
    
    <ContainerScroll>
        { listaServicos.map(servicos => {
            return(
        
        <Opcoes key={servicos.id}>
            <FundoServico>
                <ImgServico source={require('../../../assets/escorrega.png')}/>
                <H1>{servicos.titulo.charAt(0).toUpperCase() + servicos.titulo.slice(1)}</H1>
                    <TextServico>
                        {`${servicos.local} . R$ ${servicos.preco}`}
                        
                    </TextServico>
                <Servidor>{`Vendido por: ${servicos.anunciante}`}</Servidor>
            </FundoServico>
        </Opcoes>
        
            )})}

     </ContainerScroll>
    )};


function CardProduto(){
    
    const listaProdutos = [
        {
          id: 0,
          titulo: 'titulo do produto',
          preco: 55.6,
          anunciante: 'Fulano de tal',
          local: 'Rio de Janeiro',
          imagem: '../../../assets/escorrega.png'
        },
        {
          id: 1,
          titulo: 'outro produto',
          preco: 20,
          anunciante: 'Outro Fulano',
          local: 'Mangaratiba',
          imagem:'../../../assets/escorrega.png'
        },
      ];
    

    return( 
    
    <ContainerScroll>
        { listaProdutos.map(produtos => {
            return(
        <Opcoes key={produtos.id}>

            {<FundoProduto>
                <ImgProduto source={require('../../../assets/copo.png')}/>
                <H1Prod>{produtos.titulo.charAt(0).toUpperCase() + produtos.titulo.slice(1)}</H1Prod>
                    <TextProd>
                        <Text>{`R$ ${produtos.preco}`}</Text>
                         
                    </TextProd>
                <ServidorProd>{`Vendido por: ${produtos.anunciante}`}</ServidorProd>
            </FundoProduto>}
        </Opcoes>
            )})}

     </ContainerScroll>
    )};
