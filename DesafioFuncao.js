
let ativacao = true
let nivel
let resultado = Estatistica(30, 10)
function Estatistica(vitorias, derrotas){
    let saldoVitorias = vitorias - derrotas
    return saldoVitorias
}



while (ativacao){   

    if (resultado <10 ){
        nivel = "Ferro"
       
    } else if (resultado >= 10 && resultado <= 20){
        nivel = "Bronze"
        
    } else if (resultado >= 20 && resultado <= 50){
        nivel = "Prata"
        
    } else if (resultado >= 50 && resultado <= 80){
        nivel = "Ouro"
        
    } else if (resultado >= 80 && resultado <= 90){
        nivel = "Diamante"
        
    } else if (resultado >= 90 && resultado <= 100){
        nivel = "Lendário"
        
    } else if (resultado >= 100){
        nivel = "Imortal"
        
    } else if (resultado >= 101){
        nivel = "Radiante"
        
    } else {
        nivel = "Desconhecido"       
    }
    console.log(`O Herói tem de saldo de ${resultado} e está no nível de ${nivel}`)
    ativacao = false
}
