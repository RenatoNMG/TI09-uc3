

function saudacao(nome) {
    console.log(`ola, ${nome}`);
}

function calculaODobro(valorOriginal){
    let dobro = valorOriginal * 2;

    //codigo a ser executado
    return dobro;

}

// let resposta = calculaODobro(15);
// console.log(resposta);

function multiplicar(a , b, pessoa){
    saudacao(pessoa);
    return a * b;
}


let resultado = multiplicar(4,5,"renato");

console.log(resultado);