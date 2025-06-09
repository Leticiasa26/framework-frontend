//States 
//Props - são informações que você pode passar para um componente
//Hooks

interface ContainerProps{

    nome:string 

}

function Container (props:ContainerProps) {

    let contador = 10

    function mudar () {

        contador = 20

    }

    return( 
    
    <>

    <h1> {props.nome} </h1>

    Valor Contador:{contador}

    Button onClick={mudar}
    
    </>

    )
}

export default Container

