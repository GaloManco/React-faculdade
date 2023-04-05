function GerarElementos(props){
    // Modelo 1
    // const listaCarros = ['Gol', 'Onix', 'HB20', 'S10'];
    // Usando a função map para exibir cada elemento.
    // Para cada carro na listaCarros imprima carros em uma lista.
    // const carro = listaCarros.map((carro) => <li>Marca: {carro}</li>)
    // --------------------------------------------------------------------
    // Modelo 2
    const listaCarros = props.suaListaDeCarros;
    const carro = listaCarros.map((carro) => <li key={carro.toString()}>Marca: {carro}</li>)




    return (



        <>
            <ul>{carro}</ul>
        
        </>
    )



}

export default GerarElementos