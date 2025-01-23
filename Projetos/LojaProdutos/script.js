
const card = document.querySelectorAll(".card");
const btnredefinir = document.getElementById("btn-redefenir");



card.forEach(card =>{
    card.addEventListener("click",() =>{
       card.classList.toggle("selecionado");
    })
})
card.forEach(card =>{
    btnredefinir.addEventListener("click",() =>{
        card.classList.remove("selecionado");
    })
})
