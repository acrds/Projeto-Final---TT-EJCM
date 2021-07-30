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

const listCategoria = ['infantil','formatura','casamento','junina',
'fantasia','aniversario', 'ano-novo']

for (var i = 0; i<7;i++){
var categoria =[] 
categoria[i] = listCategoria[i];
console.log(categoria[i]);