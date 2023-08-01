class Motor{
    constructor(p){
        console.log("Construtor do motor rodando...");
        this.potenciamotor = p;
    }
}

class Carro {
    constructor(cor){
        this.cor = cor;
    }
    acelerar(){
        console.log("Vrummmmm");
    }
}
let mmedio = new Motor(5);
let c = new Carro();
let cor = new Carro("Azul");
c.acelerar();

console.log(cor)
const motor = {
    Cavalos: 180,
    Combustível: "Diesel",
    Modelo: "2.0",
}

console.log(motor);