// Adiciona um novo amigo à lista exibida na tela
function adicionar() {
    // Captura o valor digitado no campo de texto
    let nome = document.getElementById("nome-amigo").value;

    // Validação: impede a adição de nomes vazios ou apenas com espaços
    if (nome.trim() === "") {
        alert("Por favor, insira um nome válido.");
        return; // Interrompe a função se o nome for inválido
    }

    // Seleciona o elemento onde a lista de amigos será mostrada
    let lista = document.getElementById("lista-amigos");

    let amigos = Array.from(lista.children).map(item => item.textContent);
    // Verifica se o nome já existe na lista para evitar duplicatas
    if (amigos.some(amigo => amigo.toLowerCase() === nome.toLowerCase())) {
        alert("Este nome já foi adicionado. Por favor, insira um nome diferente.");
        return; // Interrompe a função se o nome já estiver na lista
    }

    // Cria um novo item de lista (<li>) na memória do navegador
    let item = document.createElement("li");
    item.textContent = nome; // Define o texto do item como o nome digitado

    item.onclick = function() {
        // Confirmação para remover o amigo da lista
        if (confirm("Deseja remover " + nome + " da lista?")) {
            lista.removeChild(item); // Remove o item da lista no HTML
        }
        document.getElementById("lista-sorteio").innerHTML = ""; }

    // Adiciona o novo item criado dentro da lista no HTML
    lista.appendChild(item);

    // Limpa o campo de entrada para o próximo nome
    document.getElementById("nome-amigo").value = "";
}

// Algoritmo de Fisher-Yates para embaralhar os nomes de forma aleatória
function embaralhar(lista) {
    for (let i = lista.length - 1; i > 0; i--) {
        // O i representa o "limite" atual de onde estamos sorteando.
        // Escolhe um índice aleatório entre 0 e i
        const j = Math.floor(Math.random() * (i + 1));
        // Troca os elementos de posição (destructuring assignment)
        // Esta linha é um "truque" moderno do JavaScript chamado Atribuição por Desestruturação.
        // como se estivéssemos a dizer ao computador: "Pega no que está na mão direita e põe na esquerda, e o que está na esquerda põe na direita", tudo ao mesmo tempo. 🔄
        [lista[i], lista[j]] = [lista[j], lista[i]];
    }
}

// Realiza o sorteio circular entre todos os amigos da lista
function sortear() {
    // Obtém a lista de amigos atual do HTML
    let listaHTML = document.getElementById("lista-amigos");
    
    // Converte os elementos HTML em uma Array de textos (nomes) puro
    // O .map extrai apenas o conteúdo textual de cada <li>
    let amigos = Array.from(listaHTML.children).map(item => item.textContent);

    // Validação: o Amigo Secreto precisa de pelo menos 2 participantes
    if (amigos.length < 2) {
        alert("Adicione pelo menos dois amigos para sortear.");
        return;
    }

    // Embaralha a ordem dos nomes para garantir um sorteio aleatório
    embaralhar(amigos);

    // Seleciona o campo de resultado e limpa sorteios anteriores
    let resultado = document.getElementById("lista-sorteio");
    resultado.innerHTML = ""; 

    // Loop para percorrer a lista e formar os pares
    for (let i = 0; i < amigos.length; i++) {
        // Lógica Circular:
        // Se for o último nome da lista, ele tira o primeiro (amigos[0])
        // Caso contrário, ele tira o próximo nome da lista (amigos[i + 1])
        if (i === amigos.length - 1) {
            resultado.innerHTML += amigos[i] + " --> " + amigos[0] + "<br>";
        } else {
            resultado.innerHTML += amigos[i] + " --> " + amigos[i + 1] + "<br>";
        }
    }
}

// Limpa todos os dados da tela para começar um novo jogo
function reiniciar() {
    document.getElementById("lista-amigos").innerHTML = "";
    document.getElementById("lista-sorteio").innerHTML = "";
}