/**
 * Função que recebe três números independentes e os retorna
 * em uma lista ordenada do menor para o maior (ordem crescente).
 */
function ordenarNumeros(num1, num2, num3) {
    // 1. CRIANDO A LISTA (ARRAY)
    // Agrupamos os três números soltos dentro de colchetes para formar uma lista
    let listaDeNumeros = [num1, num2, num3];

    // 2. ORDENANDO OS NÚMEROS
    // A função .sort() vai pegar os números de 2 em 2 (chamados aqui de 'a' e 'b')
    // A regra (a - b) diz ao computador: "Se o resultado for negativo, o 'a' vem primeiro".
    // Isso garante que a lista fique em ordem matemática crescente.
    listaDeNumeros.sort((a, b) => a - b);

    // 3. RETORNANDO O RESULTADO
    return listaDeNumeros;
}

// Testando a função e exibindo os números ordenados:
let resultadoOrdenado = ordenarNumeros(85, 12, 42);

// Exibindo no console com uma mensagem amigável:
console.log(`Os números em ordem crescente são: ${resultadoOrdenado.join(', ')}`);