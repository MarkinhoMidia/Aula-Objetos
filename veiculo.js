const Veiculo = require('./heranca')

class Aviao extends Veiculo{
    constructor(potencia, velocidade, modelo, cor, passageiros){
        super(velocidade,cor,modelo, passageiros)
        this.potencia = potencia;
    }
    acelera = function (){
        return this.velocidade += 20
    }
    freia = function (){
        if(this.velocidade > 50){
            return this.velocidade -= 100
        }
    }
}

const boeing = new Aviao(175000, 920,'Boeing 777', 'Branco', 368)
boeing.acelera()
boeing.freia()
console.log(boeing.toString())
