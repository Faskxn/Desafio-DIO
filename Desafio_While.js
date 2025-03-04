let nome = "Joaquim";
let ativacao = true 
let xp = 9000;
while (ativacao == true){
    
    if (xp < 1000){
        console.log(`O Herói de nome ${nome} está no nível de Ferro`)
        break
    } else if (xp >= 1000 && xp <= 2000){
        console.log(`O Herói de nome ${nome} está no nível de Bronze`)
        break
    } else if (xp >= 2000 && xp <= 5000){
        console.log(`O Herói de nome ${nome} está no nível de Prata`)
        break
    } else if (xp >= 5000 && xp <= 7000){
        console.log(`O Herói de nome ${nome} está no nível de Ouro`)
        break
    } else if (xp >= 7000 && xp <= 8000){
        console.log(`O Herói de nome ${nome} está no nível de Platina`)
        break
    } else if (xp >= 8000 && xp <= 9000){
        console.log(`O Herói de nome ${nome} está no nível de Ascendente`)
        break
    } else if (xp >= 9000 && xp <= 10000){
        console.log(`O Herói de nome ${nome} está no nível de Imortal`)
        break
    } else if (xp >= 10000){
        console.log(`O Herói de nome ${nome} está no nível de Radiante`)
        break
    }
}
