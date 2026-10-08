# JavaScript — estudos

Repositório de exercícios de JavaScript (histórico de aprendizado). O código é mantido como foi
escrito; só bugs claros foram corrigidos.

## Estado

Hoje só resta um projeto, o **Ceep** (lista de tarefas com manipulação do DOM). As pastas antigas
de lógica (`LogicaJS`, `LogicaJS2`, `PraticaLogicaJs` com *ingresso* e *sorteador-numeros*,
`XeXerceLJS` com *ordenador* e *palíndromo*) foram removidas no commit `21c9e76`, mas continuam
no histórico: `git show 21c9e76^:XeXerceLJS/palindromo.js`, por exemplo.

## Índice

| Pasta | O que é | O que ensina |
|---|---|---|
| [`JVsDOM/CEEP`](JVsDOM/) | To-do list: adicionar, concluir (riscar) e deletar tarefas | `querySelector`, `createElement`, `appendChild`, eventos, `classList.toggle`, módulos ES (`import`/`export`), atributos `data-*` |

Detalhes, estrutura e como rodar: [`JVsDOM/README.md`](JVsDOM/README.md). Resumo: precisa de um
servidor local (`python -m http.server`) por causa do `type="module"`.

## Tecnologias

HTML5, CSS3, JavaScript (ES6+, módulos nativos). Sem dependências nem build.

## Revisão de 08/10/2026

- **XSS corrigido** em `JVsDOM/CEEP/main.js`: o texto da tarefa entrava por `innerHTML`, então
  digitar `<img src=x onerror=alert(1)>` executava código. Agora usa `textContent`.
- README do Ceep: árvore de pastas apontava um `listaDeTarefas.js` que não existe (é `main.js`).

## Pendências

- `style.css` tem o bloco inicial (body, .app, .todo-list, .title, .form...) **duplicado**; inofensivo,
  mas dá pra apagar a segunda cópia.
- As tarefas somem ao recarregar a página (não há persistência).

## Para estudar

1. **`innerHTML` x `textContent`** — `JVsDOM/CEEP/main.js`, bloco "Insere o texto digitado": por que
   HTML vindo do usuário nunca deve ir para `innerHTML`. Pesquise "XSS DOM-based".
2. **Evento `submit` do formulário** — `main.js`, última linha: hoje o código escuta `click` no botão.
   Próximo passo: trocar por `form.addEventListener('submit', ...)`, que cobre Enter e clique do mesmo jeito.
3. **Delegação de eventos** — `componentes/concluitarefas.js` e `deletatarefas.js` põem um listener
   em cada botão. Tente um único listener na `<ul>` usando `evento.target.closest('li')`.
4. **`localStorage`** — para as tarefas sobreviverem ao F5: salvar um array com `JSON.stringify` a cada
   mudança e recriar a lista no carregamento.
