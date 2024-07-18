class Veiculo{
    #velocidade;
    constructor(velocidade, cor, modelo, passageiros){
        this.#velocidade = velocidade;
        this.cor = cor;
        this.modelo = modelo;
        this.passageiros = passageiros
   }
acelera = function(){
    return this.#velocidade += 5
}

freia = function(){
    if(velocidade > 20){
        return this.#velocidade -= 5
    }
}

toString = function(){
    return `O ${this.modelo}, ${this.cor}, com ${this.passageiros} pessoas esta a ${this.#velocidade}Km/h.`
}

}

module.exports = Veiculo;
