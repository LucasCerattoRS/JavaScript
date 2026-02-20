let listDeNumerosSorteados = [];
let numeroLimite = 100;

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo Do Número Secreto!');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 100');
    exibirTextoNaTela('input', 'Digite um número...');
}

// Chamamos ela logo de cara
exibirMensagemInicial();

let numeroSecreto = gerarNumeroSecreto();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    // Se a tag for um input, mudamos o placeholder em vez do innerHTML
    if (tag === 'input') {
        campo.placeholder = texto;
    } else {
        campo.innerHTML = texto;
    }
     //if ('speechSynthesis' in window) {
       // let utterance = new SpeechSynthesisUtterance(texto);
        //utterance.lang = 'pt-BR'; 
        //utterance.rate = 1.2; 
        //window.speechSynthesis.speak(utterance); 
    //} Visual Studio IntelliCode//else {
        //console.log("Web Speech API não suportada neste navegador.");
    //}

}


function gerarNumeroSecreto() {
    const numeroSecreto = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeNumerosSorteados = listDeNumerosSorteados.length;
    if (quantidadeDeNumerosSorteados >= numeroLimite) {
        alert('Todos os números entre 1 e 100 já foram sorteados! Reiniciando a lista de números sorteados.');
        listDeNumerosSorteados = []; // Limpa a lista para começar novamente
    }
    if (listDeNumerosSorteados.includes(numeroSecreto)) {
        return gerarNumeroSecreto(); // Gera outro número se já tiver sido sorteado
    } else {
        listDeNumerosSorteados.push(numeroSecreto); // Adiciona o número à lista de sorteados
        console.log('Número secreto gerado: ' + numeroSecreto);
        return numeroSecreto;
    }
}

function verificarChute() {
    // Convertendo o valor do input para número inteiro logo na captura
    let chute = parseInt(document.querySelector('input').value);
    // Agora podemos usar === (comparação estrita)
    if (chute === numeroSecreto) {
        exibirTextoNaTela('h1', 'Parabéns! Você acertou o número secreto!');
        let palavraTentativas = tentativas === 1 ? 'tentativa' : 'tentativas';
        let mensagemTentativas = `Você acertou em ${tentativas} ${palavraTentativas}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');

    } else if (chute > numeroSecreto) {
        exibirTextoNaTela('h1', 'O número secreto é menor do que ' + chute + '. Tente novamente!');
        exibirTextoNaTela('p', 'Digite um número...'); // Adiciona a mensagem para digitar um número novamente
        tentativas++; 
        limparCampo(); // Dica: uma função para limpar o input ajuda muito! 
    } else {
        exibirTextoNaTela('h1', 'O número secreto é maior do que ' + chute + '. Tente novamente!');
        exibirTextoNaTela('p', 'Digite um número...'); // Adiciona a mensagem para digitar um número novamente
        tentativas++;
        limparCampo(); // Dica: uma função para limpar o input ajuda muito!
    }
}
function limparCampo() {
    let chute = document.querySelector('input');
    chute.value = '';
}   

function reiniciarJogo() {
    numeroSecreto = gerarNumeroSecreto();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}
