
function JsxComponent() {

    // const user = {
    //     fistName: 'jonas',
    //     lestName: 'Franco'
    // }

    // Criando função que cria um objeto.
    function configName(user){
        return user.fistName + " " + user.lestName + " " + user.idade

    }

    function saldacao(user) {
        if (user) {
            const texto = "Seja bem vindo" + " " + configName(user) 
            return texto
        }
        return "Desconhecido..."
    }




    return (
        <div>
            <h3>JSxcomponente componente 2</h3>
            <p>{saldacao({fistName:'jonas', lestName:'franco', idade:'34'})}</p>
            <p>{saldacao({fistName:'pedro', lestName:'Oliveira', idade:'38'})}</p>


        </div>
        
        
    )
}

export default JsxComponent

