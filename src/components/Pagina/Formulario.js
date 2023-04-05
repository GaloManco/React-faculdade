// importar método react
import React from 'react';
// Criar class
class Formulario extends React.Component{
    // criar construtor super
    constructor(props){
        super(props)
        // iniciar state
        this.state = {
            // criar as propriedades
            name: "",
            idade: null,
            cidade: null,
            sexo: null
        };

    }
    // métodos
    funcaoNome = (campoNome) => {
        // iniciar método setState()
        this.setState({
            name: campoNome.target.value
        })
    }
    // métodos
    funcaoIdade = (campoIdade) => {
        // iniciar método setState()
        this.setState({
            idade: campoIdade.target.value
        })
    }
    // métodos modelo simplificado e mais doido....
    handleCampo = (campo) => {
        // iniciar método setState()
        this.setState({
            [campo.target.name]: campo.target.value
        })
    }
    // render
    render(){
        // return
        return(
            // Lógica html
            <>
                <form>
                    <h1>Formulario parte 1</h1>
                        <input type='text' placeholder='Nome:' name='name' onChange={this.handleCampo} />
                    <label>
                        <input type="number" placeholder='Idade' name='idade' onChange={this.handleCampo}/>
                        <input type="text" placeholder='sexo' name='sexo' onChange={this.handleCampo}/>
                        <input type="text" placeholder='cidade' name='cidade' onChange={this.handleCampo}/>
                    </label>

                </form>

                <div>
                    <p>Nome: {this.state.name}</p>
                    <p>Idade: {this.state.idade}</p>
                    <p>Cidade: {this.state.cidade}</p>
                    <p>Sexo: {this.state.sexo}</p>
                </div>



            </>
        )
    }

    
}


// exportar
export default Formulario