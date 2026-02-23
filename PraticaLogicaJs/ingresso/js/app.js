// O método getElementById() é usado para acessar um elemento HTML com um ID específico. Ele retorna uma referência ao elemento, permitindo que você manipule suas propriedades e valores. No caso, ele está sendo usado para obter o conteúdo de elementos HTML com os IDs "qtd-pista", "qtd-superior" e "qtd-inferior", que representam a quantidade de ingressos disponíveis para cada tipo de ingresso. 
// O método textContent é usado para obter o conteúdo textual desses elementos, que é então convertido em um número inteiro usando o método parseInt() e armazenado nas variáveis quantidadePista, quantidadeCadeiraSuperior e quantidadeCadeiraInferior, respectivamente.
// O método parseInt() é usado para converter uma string em um número inteiro. Ele analisa a string e retorna o valor numérico correspondente. Se a string não puder ser convertida em um número inteiro, ele retornará NaN (Not-a-Number). No caso, ele está sendo usado para obter a quantidade de ingressos disponíveis para cada tipo de ingresso a partir do conteúdo de elementos HTML com os IDs "qtd-pista", "qtd-superior" e "qtd-inferior". O valor obtido é armazenado nas variáveis quantidadePista, quantidadeCadeiraSuperior e quantidadeCadeiraInferior, respectivamente.

// Função principal acionada pelo clique do botão "Comprar" no HTML
function comprar() {
    // Captura em formato de texto qual ingresso foi escolhido no menu (ex: "pista")
    let tipoIngresso = document.getElementById("tipo-ingresso").value;
    // Captura a quantidade digitada (que vem como texto) e converte para número inteiro com parseInt() para evitar erros matemáticos futuros.
    let quantidade = parseInt(document.getElementById("qtd").value);
    
    
    // Se a quantidade for inválida (0 ou negativa), exibe um alerta e cancela (return) o restante da função.
    if (quantidade <= 0) {
        alert("Por favor, selecione pelo menos um ingresso para calcular o valor total.");
        return;
    }

    if (tipoIngresso === "pista") {
        // Variável para armazenar a quantidade de ingressos disponíveis
        // 1. Obter a quantidade de ingressos disponíveis para o tipo de ingresso selecionado usando o método getElementById() para acessar o elemento com o ID "qtd-pista" e o método textContent para obter seu conteúdo, que é então convertido em um número inteiro usando o método parseInt() e armazenado na variável quantidadePista.
        let quantidadePista = parseInt(document.getElementById("qtd-pista").textContent);
            // Verificar se a quantidade solicitada é maior do que a quantidade disponível. Se for, exibir um alerta informando que não há ingressos suficientes disponíveis e retornar da função para evitar que o processo de compra continue.
        if (quantidade > quantidadePista) {
            alert("Quantidade de ingressos solicitada maior do que a disponível.");
            return;
        }
        // 2. Subtrair a 'quantidade' que o cliente quer comprar
        quantidadePista = quantidadePista - quantidade;
        // 3. Atualizar o estoque da pista no HTML usando o método getElementById() para acessar o elemento com o ID "qtd-pista" e o método textContent para atualizar seu conteúdo com a nova quantidade de ingressos disponíveis.
        document.getElementById("qtd-pista").textContent = quantidadePista;
    } else if (tipoIngresso === "superior") {
        let quantidadeCadeiraSuperior = parseInt(document.getElementById("qtd-superior").textContent);
        if (quantidade > quantidadeCadeiraSuperior) {
            alert("Quantidade de ingressos solicitada maior do que a disponível.");
            return;
        }
        quantidadeCadeiraSuperior = quantidadeCadeiraSuperior - quantidade;
        document.getElementById("qtd-superior").textContent = quantidadeCadeiraSuperior;
    } else if (tipoIngresso === "inferior") {
        let quantidadeCadeiraInferior = parseInt(document.getElementById("qtd-inferior").textContent);
        if (quantidade > quantidadeCadeiraInferior) {
            alert("Quantidade de ingressos solicitada maior do que a disponível.");
            return;
        }
        quantidadeCadeiraInferior = quantidadeCadeiraInferior - quantidade;
        document.getElementById("qtd-inferior").textContent = quantidadeCadeiraInferior;
    }
      else {
        alert("Tipo de ingresso inválido. Por favor, selecione um tipo válido.");
    }
 document.getElementById("qtd").value = "";
}