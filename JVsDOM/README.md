# 1823_DOM

# 📝 Ceep - App de Lista de Tarefas

Um projeto prático de **Lista de Tarefas (To-Do List)** desenvolvido para treinar e aprofundar os conhecimentos em manipulação do **DOM** usando JavaScript puro (Vanilla JS) e arquitetura de Módulos (ES6).

## 💡 Sobre o Projeto

O objetivo deste projeto é construir uma aplicação interativa onde o usuário pode adicionar novas tarefas, marcá-las como concluídas e deletá-las. Tudo isso é feito dinamicamente, alterando a interface na tela sem a necessidade de recarregar a página.

### Funcionalidades
- [x] Adicionar novas tarefas à lista.
- [x] Impedir a criação de tarefas vazias.
- [x] Marcar uma tarefa como concluída (riscando o texto).
- [x] Excluir uma tarefa da lista.
- [x] Separação de responsabilidades (Componentização dos botões).

---

## 🧠 O que foi aprendido: O que é o DOM?

Durante o desenvolvimento deste projeto, o foco principal foi entender e manipular o **DOM (Document Object Model)**. 

Para entender de forma simples: o arquivo HTML é apenas um texto estático. Quando o navegador lê esse HTML, ele transforma todas as tags (`<body>`, `<div>`, `<ul>`, `<li>`) em uma **árvore de objetos vivos** chamada DOM. 

O JavaScript, por si só, não entende cores ou botões, e o HTML não tem inteligência para reagir a cliques. O **DOM é a ponte** entre os dois. Ele permite que o JavaScript "converse" com o HTML em tempo real.

**Como aplicamos o DOM neste projeto:**
1. **Buscando elementos na tela:** Usamos o `document.querySelector('[data-list]')` para encontrar a lista (`<ul>`) exata onde as tarefas devem ser inseridas.
2. **Criando novos elementos do zero:** Usamos o `document.createElement('li')` para gerar um novo item de lista sempre que o botão de adicionar é clicado.
3. **Modificando a interface:** Usamos o `lista.appendChild(tarefa)` para "grudar" o item que criamos no JavaScript direto na tela do usuário.

---

## 🛠️ Tecnologias e Estrutura

- **HTML5:** Estruturação semântica usando atributos `data-` para separar as classes de CSS das âncoras do JavaScript.
- **CSS3:** Estilização da interface.
- **JavaScript (ES6+):** Lógica da aplicação utilizando Módulos (`import` e `export`).

### Estrutura de Pastas

```text
/
├── assets/
│   └── css/
│       └── style.css
├── componentes/
│   ├── concluitarefas.js   # Componente do botão de concluir
│   └── deletatarefas.js    # Componente do botão de deletar
├── index.html              # Estrutura principal
├── listaDeTarefas.js       # Script principal de controle da lista
└── README.md
