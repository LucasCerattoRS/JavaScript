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

        while (sorteados.includes(numero)) {
            numero = obterNumeroAleatorio(de, ate);
            // O loop while é utilizado para garantir que o número sorteado seja único, ou seja, que não tenha sido sorteado anteriormente. Ele verifica se o número já está presente no array "sorteados" usando o método includes(), e se estiver, gera um novo número aleatório até encontrar um número que ainda não tenha sido sorteado.
        }
        
        sorteados.push(numero);
    }
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados.join(", ")}</label>`;
    // O resultado é exibido em um elemento HTML com o id "resultado", onde os números sorteados são apresentados como uma string, separados por vírgulas, utilizando o método join() para formatar a saída.
}
// A função "obterNumeroAleatorio" é responsável por gerar um número aleatório entre os valores "min" e "max" fornecidos como argumentos. Ela utiliza a função Math.random() para gerar um número decimal aleatório entre 0 (inclusive) e 1 (exclusivo), e depois o ajusta para o intervalo desejado usando a fórmula: Math.floor(Math.random() * (max - min + 1)) + min. O resultado é um número inteiro aleatório dentro do intervalo especificado.
    function obterNumeroAleatorio(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }