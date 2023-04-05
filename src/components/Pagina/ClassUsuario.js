// Importar
import React from 'react';
// criar class
class ClassUsuario extends React.Component{
    // criar construtor
    constructor(props){
        super(props)
        // criar os state e os atributos da classe;
        this.state = {
            // atributos
            nome : 'jonas',
            idade : 34
        };
        // logica bind
            // criar uma função aparte de outra função
        this.bindMudarUsuario = this.mudarUsuario.bind(this);
        
    }
    // métodos.
        // chamar o atualizador setState()
    mudarUsuario(){
        this.setState({
            // O que vai ser atualizado.
            nome : this.props.usuario.name,
            idade : this.props.usuario.age

            }
        )
    }
    // render() com retorno.
    render() {
        return (
            // retornar um fragmento
            <>
                <h1>Nome Completo:{this.state.nome}</h1>
                <h2>Idade:{this.state.idade}</h2>
                <button onClick={()=> this.bindMudarUsuario()}>Mudar Usuario</button>
            
            </>
        )
    }



}

export default ClassUsuario