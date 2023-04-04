import './App.css';
import Topo from "./components/Pagina/Topo";
import Principal from './components/Pagina/principal';
import Rodape from './components/Pagina/rodape';
import BarraLateral from './components/Pagina/barraLateral';


function App() {


    
    return (
      <div className="App">
      
        <Topo name='jonas'/>
        <Principal />
        <BarraLateral />
        <Rodape />

       
      </div>


  );
}

export default App;
