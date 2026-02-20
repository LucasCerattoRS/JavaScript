alert('Boas vindas ao jogo de adivinhação! Tente adivinhar o número entre 1 e 5000. Boa sorte!');
let numeroMaximo = 5000
let numeroSecreto = Math.floor(Math.random() * numeroMaximo) + 1;
console.log('Número secreto:', numeroSecreto); // Para fins de teste, você pode remover esta linha depois de verificar que o jogo funciona corretamente.    
let palpite = prompt('Digite seu palpite:');
let tentativas = 1;


while (palpite != numeroSecreto) {
        if (palpite < numeroSecreto) {alert('Tente um número maior!'); 
            palpite = prompt('Digite seu palpite:');} 
        else if (palpite > numeroSecreto) {alert('Tente um número menor!');
            palpite = prompt('Digite seu palpite:');}
        tentativas++;
    }
// Se tentativas for igual a 1, a palavra é 'tentativa'; senão, é 'tentativas'
let palavratentativas = tentativas == 1 ? 'tentativa' : 'tentativas';
alert(`Parabéns! Você acertou, o número ${numeroSecreto} é o número correto! Houve ${tentativas} ${palavratentativas}.`);