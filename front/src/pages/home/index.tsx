import React from 'react';
import { ScrollView, Text , View} from 'react-native';

import { BackGroundHome,
         Cabecalho,
         Navegacao,
         Label,
         ImgServico,
         TextoServico,
         H1,
         ClassifiqueLocal,
         Servidor,
         FundoServico,
         FundoProduto,
         ImgProduto} from './styles';

import { ContainerScroll, Opcoes, ImgCategoria, Titulo } from './styles';



export default function Home(){


    return(
<ScrollView>
        
                <Cabecalho>
                    
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
        
    )};




function Categorias (){

        return(
            <>
            <ContainerScroll>
                <Opcoes>
                    
                    <ImgCategoria source={require('../../../assets/infantil.png')}/>
                    
                    <Titulo>Infantil</Titulo>
                </Opcoes>
                <Opcoes>
                
                <ImgCategoria source={require('../../../assets/formatura.png')}/>
                
                <Titulo>Formatura</Titulo>
            </Opcoes>
        <Opcoes>
            
            <ImgCategoria source={require('../../../assets/casamento.png')}/>
            
            <Titulo>Casamento</Titulo>
        </Opcoes>
        <Opcoes>
            
            <ImgCategoria source={require('../../../assets/junina.png')}/>
            
            <Titulo>Junina</Titulo>
        </Opcoes>
        <Opcoes>
            
            <ImgCategoria source={require('../../../assets/fantasia.png')}/>
            
            <Titulo>Fantasia</Titulo>
        </Opcoes>
        <Opcoes>
            
            <ImgCategoria source={require('../../../assets/aniversario.png')}/>
            
            <Titulo>Aniversário</Titulo>
        </Opcoes>
        <Opcoes>
            
            <ImgCategoria source={require('../../../assets/ano-novo.png')}/>
            
            <Titulo>Ano Novo</Titulo>
        </Opcoes>
            
    </ContainerScroll>
    </>
        );
    }

function CardServico(){
    return( <ContainerScroll>
        <Opcoes>
            <FundoServico>
                    <ImgServico source={require('../../../assets/bitaimage.png')}/>
                    <TextoServico>
                        <H1>Cup cake mundo Bita</H1>

                        <ClassifiqueLocal>
                            
                        </ClassifiqueLocal>
                        <Servidor></Servidor>
                    </TextoServico>

                </FundoServico>
            
                
        </Opcoes>
        <Opcoes>
            <FundoServico>
                    <ImgServico source={require('../../../assets/escorrega.png')}/>
                    <TextoServico>
                        <H1>Cup cake mundo Bita</H1>

                        <ClassifiqueLocal>
                            
                        </ClassifiqueLocal>
                        <Servidor></Servidor>
                    </TextoServico>

                </FundoServico>
            
                
        </Opcoes>
    </ContainerScroll>);
}

function CardProduto(){
    return( <ContainerScroll>
        <Opcoes>
            
            <FundoProduto>
                <ImgProduto source={require('../../../assets/copo.png')}/>
                <TextoServico>
                    <H1></H1>

                    <ClassifiqueLocal>
                        
                    </ClassifiqueLocal>
                    <Servidor></Servidor>
                </TextoServico>

            </FundoProduto>
            
                
        </Opcoes>
        <Opcoes>
            
            <FundoProduto>
                <ImgProduto source={require('../../../assets/copo.png')}/>
                <TextoServico>
                    <H1></H1>

                    <ClassifiqueLocal>
                        
                    </ClassifiqueLocal>
                    <Servidor></Servidor>
                </TextoServico>

            </FundoProduto>
        
                
        </Opcoes>
        <Opcoes>
        <FundoProduto>
                <ImgProduto source={require('../../../assets/copo.png')}/>
                <TextoServico>
                    <H1></H1>

                    <ClassifiqueLocal>
                        
                    </ClassifiqueLocal>
                    <Servidor></Servidor>
                </TextoServico>

            </FundoProduto>
        </Opcoes>
    </ContainerScroll>);
}