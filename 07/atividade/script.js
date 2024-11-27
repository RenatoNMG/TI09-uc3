


function calculadora(a, b, op) {
    if (op === "+") {
        console.log(`${a} ${op} ${b} = `,a + b);
        return (a + b);
    } else if (op === "-") {
        console.log(`${a} ${op} ${b} = `,a - b);
        return (a - b);
    } else if (op === "*") {
        console.log(`${a} ${op} ${b} = `,a * b);
        return (a * b);
    } else if (op === "/") {
        if(b === 0){
            console.log(`${a} ${op} ${b} = `,0)
            return (0);
        }else{
            console.log(`${a} ${op} ${b} = `,a / b);
            return (a / b);
        }
    } else {
        console.log("parametro incorreto")
    }
}





function exibirResultado(){

    //pega da tela
    let numero1 = parseFloat(document.getElementById("numero1").value);
    let numero2 = parseFloat(document.getElementById("numero2").value);
    let op = document.getElementById("operacao").value;
    // manda para a calculadora
    console.log(numero1,numero2,op)
    let resul = calculadora(numero1,numero2,op);

    //exibe o resultado na tela

    document.getElementById("resultado").innerText = resul;
}