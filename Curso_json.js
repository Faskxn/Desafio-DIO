let json = {
    nome: "josé",
    idade: 16,
    produtos: {
        0: ["Mouse", 29.9],
        1: ["Teclado", 123.9],
        2: ["Monitor", 800.9],
    },
    taxas: "98.9"
}

gerarjson(json)
function gerarjson(json){
    console.log(`O comprador é: ${json.nome}`)
    console.log(`A idade é: ${json.idade}`)
    console.log("============================")

    for(let index in json.produtos){
        let [NomeProdutos, PrecoProdutos] = json.produtos[index]
        console.log(` - ${NomeProdutos}: R$ ${PrecoProdutos}`)
    }
    
}