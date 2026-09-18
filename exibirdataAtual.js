function exibirDataAtual(){
    const agora = new Date();
    const dia=String(agora.getDate());
    const mes=String(agora.getMonth());
    const ano=agora.getFullYear();

    const dataFormatada = $(dia)/$(mes)/$(ano);

    document.getElementById('data-blog').immerText = dataFormatada;
}
exibirDataAtual();