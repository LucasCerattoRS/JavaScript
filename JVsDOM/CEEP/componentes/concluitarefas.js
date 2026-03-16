// Componente: Cria e retorna o botão de concluir
const BotaoConclui = () => {
    const botaoConclui = document.createElement('button');
    botaoConclui.classList.add('check-button');
    botaoConclui.innerText = 'Concluir';
            
    // Escuta o evento de clique e chama a função para riscar a tarefa
    botaoConclui.addEventListener('click', concluirTarefa);

    return botaoConclui;
}       

// Ação: O que acontece quando o botão é clicado
const concluirTarefa = (evento) => {
    const botaoConclui = evento.target; // Descobre exatamente qual botão foi clicado
    const tarefaCompleta = botaoConclui.parentElement; // Pega a <li> pai onde o botão mora
    
    // Adiciona ou remove a classe 'done' (que no CSS deve riscar a palavra)
    tarefaCompleta.classList.toggle('done');
}; // CORREÇÃO: Faltava esta chave de fechamento no seu código!

export default BotaoConclui;