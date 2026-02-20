function sortear() {
    // Obtém os valores dos campos de entrada
    quantidade = parseInt(document.getElementById("quantidade").value);
    de = parseInt(document.getElementById("de").value);
    ate = parseInt(document.getElementById("ate").value);
    // Utilizamos parseInt para converter os valores de string para números inteiros
    
    let sorteados = [];
    let numero;
    // Cria uma váriavel para armazenar os números sorteados
    // O laço for irá se repetir a quantidade de vezes definida pelo usuário, sorteando um número aleatório entre os valores "de" e "até" a cada iteração, e armazenando esses números no array "sorteados".
    for (let i = 0; i < quantidade; i++) {
        numero = obterNumeroAleatorio(de, ate);
        sorteados.push(numero);
    }

    alert(sorteados);
}

    function obterNumeroAleatorio(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }