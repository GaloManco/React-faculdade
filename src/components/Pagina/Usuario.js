// Passo 1 importar react
import React from 'react';

// Passo 3 Criar classe
class Usuario extends React.Component {
    
    // Passo 3 Construtor e suas state e props
    constructor(props){
        super(props);

        // Atributos declarados.
        this.state = {
            nome: 'jonas',
            sobreNome: 'franco',
            idade: 12,
            nacionalidade: 'brasileiro'
        };

    }
    // Passo 3 Métodos
    mudarUsuario() {
        // setState é para atualizar os atributos e renderiza-los.
        this.setState({
            // Chamando os atributos e adiciono um props para alterar valor
            nome: this.props.usuario.name,
            idade: this.props.usuario.age
        });
    }

    // Passo 4 método mudar age

    somarIdade() {

        this.setState({
            idade: this.state.idade + this.props.valor
        })
    }

    // passo 5 método render
    render() {
        return (
            // renderizar atravez de um framento.
            <>
                <h1>Nome Complento:{this.state.nome} {this.state.sobreNome}</h1>
                <h2>Idade:{this.state.idade}</h2>
                <h3>Nacionalidade:{this.state.nacionalidade}</h3>
                <button onClick={()=> this.mudarUsuario()}>Mudar</button>
                <button onClick={()=> this.somarIdade()}>Incrementar Idade</button>
            
            
            
            </>
        )
    }

};

export default Usuario


