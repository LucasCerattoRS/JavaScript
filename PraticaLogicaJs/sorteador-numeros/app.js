function sortear() {
    // Obtém os valores dos campos de entrada
    quantidade = parseInt(document.getElementById("quantidade").value);
    de = parseInt(document.getElementById("de").value);
    ate = parseInt(document.getElementById("ate").value);
    // Utilizamos parseInt para converter os valores de string para números inteiros
    
    while (isNaN(quantidade) || isNaN(de) || isNaN(ate)) {
        alert("Por favor, preencha todos os campos com números válidos.");
        return;
    } // O loop while é utilizado para verificar se os valores inseridos pelo usuário são números válidos. A função isNaN() é usada para verificar se algum dos valores é "Not a Number" (NaN), o que indica que o usuário não inseriu um número válido. Se algum dos campos contiver um valor inválido, uma mensagem de alerta é exibida solicitando ao usuário que preencha os campos corretamente, e a função retorna, interrompendo a execução do código.

    while (quantidade <= 0 || de < 0 || ate < 0) {
        alert("Por favor, insira valores positivos para quantidade, de e até.");
        return;
    } // O segundo loop while é utilizado para garantir que os valores inseridos sejam positivos. Ele verifica se a quantidade é menor ou igual a zero, ou se os valores "de" e "até" são menores que zero. Se alguma dessas condições for verdadeira, uma mensagem de alerta é exibida solicitando ao usuário que insira valores positivos, e a função retorna, interrompendo a execução do código.

    while (de >= ate) {
        alert("O valor 'de' deve ser menor que o valor 'até'.");
        return;
    } // O terceiro loop while é utilizado para garantir que o valor "de" seja menor que o valor "até". Ele verifica se "de" é maior ou igual a "ate". Se essa condição for verdadeira, uma mensagem de alerta é exibida solicitando ao usuário que insira um valor "de" menor que "até", e a função retorna, interrompendo a execução do código.


    while (quantidade > (ate - de + 1)) {
        alert("A quantidade de números a serem sorteados é maior do que o intervalo disponível. Por favor, ajuste os valores.");
        return;
    }   // O quarto loop while é utilizado para garantir que a quantidade de números a serem sorteados não seja maior do que o intervalo disponível entre "de" e "até". Ele verifica se a quantidade é maior do que a diferença entre "ate" e "de" mais um (para incluir ambos os limites). Se essa condição for verdadeira, uma mensagem de alerta é exibida solicitando ao usuário que ajuste os valores, e a função retorna, interrompendo a execução do código.
    let sorteados = [];
    let numero;
    // O array "sorteados" é criado para armazenar os números sorteados, e a variável "numero" é declarada para armazenar temporariamente cada número sorteado durante o processo.
    // Cria uma váriavel para armazenar os números sorteados
    // O laço for irá se repetir a quantidade de vezes definida pelo usuário, sorteando um número aleatório entre os valores "de" e "até" a cada iteração, e armazenando esses números no array "sorteados".
    for (let i = 0; i < quantidade; i++) {
        numero = obterNumeroAleatorio(de, ate);

        while (sorteados.includes(numero)) {
            numero = obterNumeroAleatorio(de, ate);
            // O loop while é utilizado para garantir que o número sorteado seja único, ou seja, que não tenha sido sorteado anteriormente. Ele verifica se o número já está presente no array "sorteados" usando o método includes(), e se estiver, gera um novo número aleatório até encontrar um número que ainda não tenha sido sorteado.   
        }
        
        sorteados.push(numero);
        // O número sorteado é adicionado ao array "sorteados" usando o método push(), garantindo que cada número sorteado seja armazenado para referência futura e para evitar repetições.
    }
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados.join(", ")}</label>`;
    // O resultado é exibido em um elemento HTML com o id "resultado", onde os números sorteados são apresentados como uma string, separados por vírgulas, utilizando o método join() para formatar a saída.
    alterarStatusBotao();
}   
// A função "obterNumeroAleatorio" é responsável por gerar um número aleatório entre os valores "min" e "max" fornecidos como argumentos. Ela utiliza a função Math.random() para gerar um número decimal aleatório entre 0 (inclusive) e 1 (exclusivo), e depois o ajusta para o intervalo desejado usando a fórmula: Math.floor(Math.random() * (max - min + 1)) + min. O resultado é um número inteiro aleatório dentro do intervalo especificado.
    function obterNumeroAleatorio(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

function alterarStatusBotao() {
    let botao = document.getElementById('btn-reiniciar');
    // se tiver a classe "container__botao-desabilitado", ela é removida e a classe "container__botao" é adicionada, habilitando o botão. Caso contrário, nenhuma ação é realizada.
    if (botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    }   
    else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
        // O código dentro do bloco else é executado quando o botão já está habilitado. Ele remove a classe "container__botao" e adiciona a classe "container__botao-desabilitado", desabilitando o botão. Isso garante que o botão de reiniciar só esteja habilitado após um sorteio ter sido realizado, e seja desabilitado novamente após ser clicado para reiniciar o processo.
    }
}

function reiniciar() {  
    document.getElementById("quantidade").value = '';
    document.getElementById("de").value = '';
    document.getElementById("ate").value = '';
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    alterarStatusBotao();
}   