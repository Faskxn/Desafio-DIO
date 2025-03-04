function torrar(){
    console.log("torrando pão")
}

torrar()

torrar( "pão de forma", 'jose', 10.90)
function torrar(pao, nome = "Cliente", valor){
    console.log(`Torrando:  ${pao}`)
    console.log(`Cliente:  ${nome}`)
    console.log(`Valor:  ${valor.toFixed(2)}`)
}


let resultado = num(1,2)
console.log(resultado)
function num(num1, num2){
    let soma = num1 + num2
    return soma
}


let username = pegarprimeironome("CARLOS-ALMEIDA-JUANITO-GARGALO","-")
console.log(`seja bem vindo  ${username}`)

username = pegarprimeironome("FELIPE JOSE APARECIDO"," ")
console.log(`seja bem vindo  ${username}`)

function pegarprimeironome(nome, splitchar){
    let primeironome = nome.split(splitchar)[0]
    return primeironome
}