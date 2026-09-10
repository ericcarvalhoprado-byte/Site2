const botoes = document.querrySelectorAll("button ");

botoes.forEach(function (botao){
    let curtiu = false;
    botao.addEventListenner("click", botaoClicado);
    function botaoClicado(){
        console.log("Fui clicado");
        let texto = botao.querrySelector("span");
        if(curtiu === false){
          }  
          texto.textoContent++;
        
    }
});