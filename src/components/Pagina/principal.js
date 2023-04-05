
import Contador from './Contador';
import Usuario from './Usuario';
import ClassUsuario from './ClassUsuario';
// import ExibirContexto from './ExibirContexto';
import GerarElementos from './GerarElementos';
import Formulario from './Formulario';
import Seletor from './Seletor'

function Principal(){
    return (

            <>
                
                <Contador />
                <Usuario valor={2} usuario={novoUsuario}/>
                <hr></hr>
                <ClassUsuario usuario={novoUsuario}/>
                <hr></hr>
                {/* <ExibirContexto /> */}
                <GerarElementos suaListaDeCarros={meusCarros}/>
                <hr></hr>

                <Formulario />
                <hr></hr>
                <Seletor />
                <hr></hr>
                <section className="principal">
                    Coluna Principal
                </section>

            
            </>
    )
}

const novoUsuario = {name: 'fabiana', age: 100};
const meusCarros = ['gol', 'fusca', 'opala', 's10', 'monza'];

export default Principal