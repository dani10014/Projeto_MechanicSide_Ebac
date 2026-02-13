const Btncard = document.querySelectorAll(".carrosel-servicos .card .saiba-mais");

Btncard.forEach(botao => {
    botao.addEventListener("click", function(){
        const container = this.closest(".col-12");
        
        const cardAberto = container.querySelector(".card-aberto");
        const cardFechado = container.querySelector(".card-fechado");

        if (!cardAberto || !cardFechado) return;

        container.classList.toggle("virado");
    });
});