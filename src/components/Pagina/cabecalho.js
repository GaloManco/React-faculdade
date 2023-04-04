
import React from "react"


class Cabecalho extends React.Component{

    
    render(){

        return(
            <div className="cabecalho">
                <h1 className="boasVindas">Bem vindo! {this.props.name}</h1>
                <h2 className="titulo">Manipulando Componentes</h2>
            </div>
        )
    }
}


export default Cabecalho