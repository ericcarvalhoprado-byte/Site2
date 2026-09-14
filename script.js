const botoes = document.querySelectorAll("button");

botoes.forEach(function (botao) {
    let curtiu = false;
    
    botao.addEventListener("click", botaoClicado);

    function botaoClicado() {
        console.log("Fui clicado");
        let texto = botao.querySelector("span");

        if (texto) {
            // Converte o texto em número e incrementa
            let contador = parseInt(texto.textContent);
            contador++;
            texto.textContent = contador;
            
            curtiu = true;
        }
    }
});