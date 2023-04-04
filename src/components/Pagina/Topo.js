import Cabecalho from './cabecalho';
import BarraNavegacao from './navegacao';


function Header(props) {
    return(
        <header>
            <Cabecalho name={props.name}/>
            <BarraNavegacao />
        </header>
    )
}

export default Header