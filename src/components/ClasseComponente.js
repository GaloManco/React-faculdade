import React from "react"


class PrimeiroComponenteClass extends React.Component{

    
    render(){
       
        return <p>Eu sou um componente class: {this.props.name}</p>
    }
}

export default PrimeiroComponenteClass