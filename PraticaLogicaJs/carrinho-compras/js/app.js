function adicionar() {
    let produto = document.getElementById("produto").value;
    // O método split() é usado para dividir uma string em um array de substrings, com base em um separador especificado. No caso, o separador é o caractere "-". O resultado é um array onde cada elemento é uma parte da string original que estava separada pelo caractere "-".
    const partes = produto.split("-");
    // O método parseFloat() é usado para converter uma string em um número de ponto flutuante (decimal). Ele analisa a string e retorna o valor numérico correspondente. Se a string não puder ser convertida em um número, ele retornará NaN (Not-a-Number).
    let nomeProduto = partes[0];
    let textoPreço = (partes[1]);
    let numeroLimpo = textoPreço.replace("R$", "").trim();
    let valorProduto = parseFloat(numeroLimpo);
    // O método replace() é usado para substituir uma parte de uma string por outra. No caso, ele está sendo usado para remover o símbolo "R$" da string valorProduto. 
    // O método trim() é usado para remover espaços em branco no início e no final da string resultante.
    // O método getElementById() é usado para acessar um elemento HTML com um ID específico. Ele retorna uma referência ao elemento, permitindo que você manipule suas propriedades e valores. No caso, ele está sendo usado para obter o valor do campo de entrada com o ID "quantidade".
    let quantidade = document.getElementById("quantidade").value;
    if (quantidade <= 0) {
        alert("A quantidade deve ser maior que zero.");
        return;
    }
    let quantidadeLimpa = parseInt(quantidade);
    // O método parseInt() é usado para converter uma string em um número inteiro. Ele analisa a string e retorna o valor numérico correspondente. Se a string não puder ser convertida em um número inteiro, ele retornará NaN (Not-a-Number).
    let valorTotal = valorProduto * quantidadeLimpa;
    totalGeral = totalGeral + valorTotal;
    document.getElementById("quantidade").value = "";
    let totalGeralFormatado = document.getElementById("valor-total").innerHTML = ` R$${totalGeral.toFixed(2)}`;
    // O método toFixed() é usado para formatar um número com um número específico de casas decimais. No caso, ele está sendo usado para formatar o valor total geral (totalGeral) com 2 casas decimais, garantindo que o valor seja exibido corretamente como uma quantia monetária.;
    // O operador de adição (+) é usado para somar o valor total do produto (valorTotal) ao total geral (totalGeral). Ele atualiza o valor de totalGeral com a nova soma.
    // O operador de multiplicação (*) é usado para calcular o valor total do produto, multiplicando o preço unitário (valorProduto) pela quantidade (quantidadeLimpa).
    let listaProdutos = document.getElementById("lista-produtos").innerHTML;
    // O método innerHTML é usado para acessar ou modificar o conteúdo HTML de um elemento. No caso, ele está sendo usado para obter o conteúdo atual do elemento com o ID "lista-produtos".
    let novoProduto = `<section><span class="texto-azul">${quantidadeLimpa}x</span> ${nomeProduto} <span class="texto-azul">R$${valorTotal.toFixed(2)}</span></section>`;
    // A sintaxe `${}` é usada para inserir expressões JavaScript dentro de uma string. No caso, ela está sendo usada para incluir as variáveis nomeProduto, valorProduto, quantidadeLimpa e valorTotal dentro da string que representa o novo item da lista de produtos.
    document.getElementById("lista-produtos").innerHTML = listaProdutos + novoProduto;
    // O operador de adição (+) é usado para concatenar a string existente (listaProdutos) com a nova string (novoProduto), resultando em uma única string que contém todos os itens da lista de produtos.
}

let totalGeral = 0;
// A variável totalGeral é declarada e inicializada com o valor 0. Ela é usada para armazenar o valor total acumulado dos produtos adicionados ao carrinho de compras. Cada vez que um novo produto é adicionado, o valor total do produto é calculado e somado ao totalGeral, permitindo que o valor total seja atualizado corretamente.

function limpar() {
    document.getElementById("lista-produtos").innerHTML = "";
    document.getElementById("valor-total").innerHTML = "R$0,00";
    document.getElementById("quantidade").value = "";
    totalGeral = 0;
}

