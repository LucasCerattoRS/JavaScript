/**
 * Função que verifica se uma palavra ou frase é um palíndromo.
 * Retorna true (verdadeiro) ou false (falso).
 */
function verificarPalindromo(texto) {
    // 1. LIMPEZA DO TEXTO
    // O toLowerCase() transforma tudo em minúsculo.
    // O replace(/\s/g, '') é um filtro que encontra todos os espaços vazios e os remove.
    let textoLimpo = texto.toLowerCase().replace(/\s/g, '');

    // 2. INVERSÃO DO TEXTO
    // .split('') = Corta a palavra transformando cada letra em um item de uma lista.
    // .reverse() = Inverte a ordem dessa lista.
    // .join('') = Junta todas as letras de volta em uma única palavra.
    let textoInvertido = textoLimpo.split('').reverse().join('');

    // 3. COMPARAÇÃO
    // Se o texto limpo for exatamente igual a ele mesmo invertido, é um palíndromo!
    if (textoLimpo === textoInvertido) {
        console.log(`"${texto}" é um palíndromo! ✅`);
        return true;
    } else {
        console.log(`"${texto}" NÃO é um palíndromo. ❌`);
        return false;
    }
}

// Testando a função no console:
verificarPalindromo("Ovo");
verificarPalindromo("A base do teto desaba");
verificarPalindromo("Javascript");