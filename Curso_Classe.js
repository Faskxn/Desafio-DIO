class formaDeBolo{
    constructor(saborDaMassa, saborRecheio){
        this.saborDaMassa = saborDaMassa
        this.saborRecheio = saborRecheio

    }
     escrever(){
        console.log(`Um Delicioso bolo de ${this.saborRecheio} com a Massa de ${this.saborDaMassa}`)
     }
     assar(){
        console.log(`Bolo Assando de ${this.saborDaMassa}`)
     }
}

let boloFesta = new formaDeBolo("Chocolate", "Oreo")
boloFesta.escrever()

let boloVip = new formaDeBolo("Ouro", "Diamante")
boloVip.escrever()
boloVip.assar()