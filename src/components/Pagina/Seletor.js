import React from 'react';

class Seletor extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name:'',
            item: '',
            cidade: '',
            texto: ''
        };
    }
    mudarNome = (campo) => {
        this.setState({
            name: campo.target.value
        })

    }
    mudarItem = (campo) => {
        this.setState({
            item: campo.target.value
        })

    }
    handleCampo = (campo) => {
        this.setState({
            [campo.target.name]: campo.target.value
        })
    }

    render() {
        return(
            <>
            
                <h1>Nome:{this.state.name}</h1>
                <h1>Cidade:{this.state.cidade}</h1>
                <h1>Comentarios:{this.state.texto}</h1>
                <form>
                    <input type='text' name='name' placeholder='seu nome' onChange={this.handleCampo} />
                    <input type='text' name='cidade' placeholder='seu nome' onChange={this.handleCampo} />
                    <br/>
                    <br/>
                    <textarea onChange={this.handleCampo} name='texto'></textarea>
                </form>

                <h2>Seletor:</h2>
                <p>{this.state.item}</p>
                <select value={this.state.item} onChange={this.mudarItem}>
                    <option value='Camisas' >Camisas</option>
                    <option value='Chinelos' >Chinelos</option>
                    <option value='Chaveiros' >Chaveiros</option>
                    <option value='Squees' >Squees</option>
                    <option value='Aguabios' >Aguabios</option>
                    <option value='Long Drink' >Long Drink</option>


                </select>
            
            
            </>
        )
    }



}


export default Seletor