


function calcular() {
    let minutos = document.getElementById("minutos").value;
    if (minutos === "" || minutos < 0) {
        document.getElementById("resultado").innerText = `Minutos invalidos`;


    } else {
        let horas = parseInt(minutos / 60)
        minutos -= horas * 60;
        document.getElementById("resultado").innerText = `${horas} Horas e ${minutos} minutos`;
    }

}