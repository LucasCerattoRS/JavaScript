// Envolver o código em uma função auto-invocada para evitar poluição do escopo global
// Função auto-invocada para encapsular o código e evitar conflitos de variáveis no escopo global
(() => {
// Criar um novo item na lista de tarefas
const criarTarefa = (evento) => {
        // Prevenir o comportamento padrão do formulário, que é recarregar a página
        evento.preventDefault()
        // Selecionar a lista de tarefas e o campo de input para obter o valor da nova tarefa
        const lista = document.querySelector('[data-list]')
        // Selecionar o campo de input e obter o valor digitado pelo usuário
        const inputTarefa = document.querySelector('[data-form-input]')
        // Obter o valor do campo de input
        const valor = inputTarefa.value
        // Criar um novo elemento de lista (li) para a nova tarefa
        const tarefa =document.createElement('li')
        // Adicionar a classe 'task' ao elemento de lista para estilização
        tarefa.classList.add('task')
        // Criar o conteúdo HTML para a nova tarefa, incluindo o valor digitado pelo usuário
        const conteudo = `<p class="content">${valor}</p>`
        // Definir o conteúdo HTML do elemento de lista com a nova tarefa
        tarefa.innerHTML = conteudo
        tarefa.appendChild(BotaoConclui())
        // Adicionar o novo elemento de lista à lista de tarefas
        lista.appendChild(tarefa)
        // Limpar o campo de input após adicionar a tarefa
        inputTarefa.value = ""
}

// Selecionar o botão e adicionar um evento de clique
const novaTarefa = document.querySelector('[data-form-button]')

// Verificar se o elemento foi selecionado corretamente
novaTarefa.addEventListener('click', criarTarefa)

const BotaoConclui = () => {
        const botaoConclui = document.createElement('button')
        botaoConclui.classList.add('check-button')
        botaoConclui.innerText = 'Concluir'
                
        botaoConclui.addEventListener('click' , concluirTarefa)

        return botaoConclui
}       

const concluirTarefa = (evento) => {
        // Obter o botão que foi clicado
        const botaoConclui = evento.target
        // Obter o elemento pai do botão, que é a tarefa (li) correspondente
        const tarefaCompleta = botaoConclui.parentElement
        // Adicionar a classe 'done' à tarefa para marcar como concluída
        tarefaCompleta.classList.toggle('done')
}
})()