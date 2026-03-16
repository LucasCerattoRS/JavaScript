// Componente: Cria e retorna o botão de deletar
const BotaoDeleta = () => {
    const botaoDeleta = document.createElement('button');
    botaoDeleta.innerText = 'Deletar';
    botaoDeleta.classList.add('delete-button');

    // Escuta o evento de clique e chama a função de deleção
    botaoDeleta.addEventListener('click', deletarTarefa);

    return botaoDeleta;
}

// Ação: O que acontece quando o botão é clicado
const deletarTarefa = (evento) => {
    const botaoDeleta = evento.target; // Pega o botão clicado
    const tarefaCompleta = botaoDeleta.parentElement; // Pega a <li> correspondente
    
    // Remove o elemento HTML inteiro da tela
    tarefaCompleta.remove();
}

export default BotaoDeleta;