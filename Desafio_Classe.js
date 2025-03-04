class Heroi{
    constructor(nome, idade, tipo, ataque){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
        this.ataque = ataque;

    }
    atacar(){
     if (this.tipo == "Mago"){
            this.ataque = "Usando Magia"
     }else if
        (this.tipo == "Guerreiro"){
            this.ataque = "Usando Espada"
     }else if
        (this.tipo == "Monge"){
            this.ataque = "Usando Artes Marciais"
     }else if
        (this.tipo == "Shuriken"){
            this.ataque = "Usando Shuriken"
     }
        console.log(`O ${this.tipo} atacou ${this.ataque}`)
    }

}

let Heroi1 = new Heroi("Johnatan", 20, "Mago")
Heroi1.atacar()

let Heroi2 = new Heroi("Johnatan", 20, "Guerreiro")
Heroi2.atacar()

let Heroi3 = new Heroi("Johnatan", 20, "Monge")
Heroi3.atacar()