
function JsxComponent() {


    function setTexto(user){
        // return user.name + " " + user.idade
        return `${user.name} idade: ${user.idade}`
    }

    function Verificar(user){
        if(user){
            return `Olá ${setTexto(user)}`
        }
        else{
            return 'Não tem niguem aqui.'
        }
    }



    return (


        <div>
            <h3>{Verificar({name:'jonas', idade:'25'})}</h3>
          
        </div>
    )
}

export default JsxComponent

