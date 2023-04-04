import React  from "react";


class Contador extends React.Component{
     constructor(props){
        super(props);
        this.state = {numero: 0};

     }


    //  Método
     incrementar() {
        
         this.setState({numero: this.state.numero + 1});  
     }


     render(){
        return(
            <>
                <h2>O valor do número é {this.state.numero}</h2>
                <button onClick={() => this.incrementar()}>Adicionar valor</button>
            </>
        )
     }

}

export default Contador