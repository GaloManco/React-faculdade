function ExibirContexto(){
    
    console.log(this);



}


let usuarios = {
    name : 'jonas',
    idade : 23
}


ExibirContexto.bind(usuarios)
let bindUsuario = ExibirContexto.bind(usuarios);
bindUsuario()

export default ExibirContexto