// Como estamos usando ES6 Modules (type="module" no HTML), o escopo global
// já está protegido nativamente. Não é mais necessário usar funções auto-invocadas (IIFE).

import BotaoConclui from "./componentes/concluitarefas.js";
import BotaoDeleta from "./componentes/deletatarefas.js";

// Função principal responsável por montar a nova tarefa na tela
const criarTarefa = (evento) => {
    // Evita que o formulário recarregue a página ao ser enviado
    evento.preventDefault();

    const lista = document.querySelector('[data-list]');
    const inputTarefa = document.querySelector('[data-form-input]');
    const valor = inputTarefa.value;

    // Melhoria extra: Não permite adicionar uma tarefa vazia
    if (valor.trim() === '') {
        return; 
    }

    // Cria o esqueleto do item da lista (li)
    const tarefa = document.createElement('li');
    tarefa.classList.add('task');

    // Insere o texto digitado pelo usuário dentro da tag <p>
    const conteudo = `<p class="content">${valor}</p>`;
    tarefa.innerHTML = conteudo;

    // Anexa os botões criados nos outros arquivos dentro desta nova <li>
    tarefa.appendChild(BotaoConclui());
    tarefa.appendChild(BotaoDeleta());

    // Joga a <li> pronta (texto + botões) para dentro da <ul> na tela
    lista.appendChild(tarefa);

    // Limpa o input para o usuário digitar a próxima tarefa
    inputTarefa.value = "";
    // Melhoria extra: Devolve o cursor piscando para o input automaticamente
    inputTarefa.focus(); 
}

// Inicializa a escuta do botão "Novo Item"
const novaTarefa = document.querySelector('[data-form-button]');
novaTarefa.addEventListener('click', criarTarefa);

// CORREÇÃO: Havia uma chave '}' solta aqui no final do seu código que causava erro.