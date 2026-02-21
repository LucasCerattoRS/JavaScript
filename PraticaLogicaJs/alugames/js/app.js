/**
 * Função para alternar o status de aluguel de um jogo (Toggle).
 * Ela recebe o 'id' do jogo clicado (ex: 1, 2 ou 3) direto do HTML.
 */
function alterarStatus(id) {
    // 1. CAPTURAR OS ELEMENTOS HTML
    // Usamos a crase (Template String) para juntar a palavra "game-" com o número do id.
    // Isso captura a tag <li> inteira (o cartão do jogo específico).
    let cartaoJogo = document.getElementById(`game-${id}`);
    
    // O querySelector procura a primeira tag específica DENTRO do elemento 'cartaoJogo'.
    // Aqui estamos pegando a tag <a> (o botão) que pertence apenas a este jogo.
    let botao = cartaoJogo.querySelector('a');
    
    // Aqui estamos pegando a primeira tag <div> (que é a caixa que guarda a imagem do jogo).
    let caixaImagem = cartaoJogo.querySelector('div');


    // 2. LÓGICA DE ALTERNÂNCIA (TOGGLE)
    // O classList.contains verifica se o botão tem a classe específica de "jogo alugado".
    if (botao.classList.contains('dashboard__item__button--return')) {
        
        // --- SE JÁ ESTIVER ALUGADO (Ação: Devolver) ---
        
        // Remove a classe que deixa o botão escuro
        botao.classList.remove('dashboard__item__button--return');
        
        // Muda o texto interno da tag <a> de volta para "Alugar"
        botao.textContent = "Alugar"; 
        
        // Remove a classe que deixa a imagem do jogo escura
        caixaImagem.classList.remove("dashboard__item__img--rented");
        
    } else {
        
        // --- SE ESTIVER DISPONÍVEL (Ação: Alugar) ---
        
        // Adiciona a classe que deixa o botão escuro (estilo de devolução)
        botao.classList.add('dashboard__item__button--return'); 
        
        // Muda o texto interno da tag <a> para "Devolver"
        botao.textContent = "Devolver";
        
        // Adiciona a classe que aplica o filtro escuro na imagem do jogo
        caixaImagem.classList.add("dashboard__item__img--rented");
    }
}