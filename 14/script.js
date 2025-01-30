document.addEventListener("DOMContentLoaded", ()=>{
    const btnMenu = document.getElementById("btn-menu");
    const ListaMEnu = document.getElementById("lista-menu")
    btnMenu.addEventListener("click",()=>{
        ListaMEnu.style.display = ListaMEnu.style.display === "block" ? "none" : "block";

    })



    const abrirpainel = document.getElementById("abrir-painel");
    const fecharpainel = document.getElementById("fechar-painel");
    const painel = document.getElementById("painel-lateral");

    abrirpainel.addEventListener("click",()=>{
        painel.style.right = "0px";

    })
    fecharpainel.addEventListener("click",()=>{
        painel.style.right = "-250px";

    })
    
    // slider automatico
    const slides = document.querySelector(".slides");
    let index = 0;
    function mudarslide(){
        index = (index + 1) % 3;
        slides.style.transform = `translateX(-${index * 100}%)`;


    }
    setInterval(mudarslide,3000);




   

})