// Testes do Ceep com node:test e um DOM falso mínimo (sem dependências).
// CEEP_DIR permite apontar para outra versão do código (usado para provar que o teste pega regressões).
import test from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

class Elemento {
  constructor(tag) {
    this.tag = tag; this.children = []; this.parentElement = null;
    this.classes = new Set(); this.ouvintes = {}; this.value = '';
    this._texto = ''; this.htmlInjetado = false; this.focado = false;
    this.classList = {
      add: (c) => this.classes.add(c),
      toggle: (c) => (this.classes.delete(c) ? false : (this.classes.add(c), true)),
      contains: (c) => this.classes.has(c),
    };
  }
  set textContent(v) { this._texto = String(v); }
  get textContent() { return this._texto; }
  set innerText(v) { this._texto = String(v); }
  get innerText() { return this._texto; }
  // Marca quando o texto entra como HTML: é o que permite XSS no navegador real.
  set innerHTML(v) { this._texto = String(v); this.htmlInjetado = /<[a-z]/i.test(this._texto); }
  get innerHTML() { return this._texto; }
  appendChild(f) { f.parentElement = this; this.children.push(f); return f; }
  remove() { const p = this.parentElement; if (p) p.children = p.children.filter((c) => c !== this); this.parentElement = null; }
  addEventListener(t, fn) { (this.ouvintes[t] ||= []).push(fn); }
  focus() { this.focado = true; }
  clicar() { const e = { target: this, preventDefault() { this.prevenido = true; }, prevenido: false };
    (this.ouvintes.click || []).forEach((fn) => fn(e)); return e; }
}

const lista = new Elemento('ul');
const input = new Elemento('input');
const botao = new Elemento('button');
globalThis.document = {
  createElement: (t) => new Elemento(t),
  querySelector: (s) => ({ '[data-list]': lista, '[data-form-input]': input, '[data-form-button]': botao })[s],
};
const dir = process.env.CEEP_DIR || path.resolve(import.meta.dirname, '../JVsDOM/CEEP');
await import(pathToFileURL(path.join(dir, 'main.js')).href);

const adicionar = (texto) => { input.value = texto; return botao.clicar(); };
const limpar = () => { lista.children.length = 0; input.value = ''; input.focado = false; };
const todos = (el) => [el, ...el.children.flatMap(todos)];

test('tarefa vazia ou só com espaços não entra na lista', () => {
  limpar();
  for (const v of ['', '   ', '\t\n']) { const e = adicionar(v); assert.equal(e.prevenido, true); }
  assert.equal(lista.children.length, 0);
});

test('HTML digitado vira texto puro (regressão do XSS via innerHTML)', () => {
  limpar();
  const payload = '<img src=x onerror=alert(1)>';
  adicionar(payload);
  const [li] = lista.children;
  assert.equal(li.children[0].textContent, payload);
  assert.ok(todos(lista).every((el) => !el.htmlInjetado), 'texto do usuário não pode passar por innerHTML');
});

test('adicionar limpa o input, devolve o foco e cria Concluir e Deletar', () => {
  limpar();
  adicionar('estudar');
  const [li] = lista.children;
  assert.equal(input.value, '');
  assert.equal(input.focado, true);
  assert.deepEqual(li.children.map((c) => c.tag), ['p', 'button', 'button']);
});

test('Concluir alterna "done": duas vezes volta ao estado original', () => {
  limpar();
  adicionar('a');
  const [li] = lista.children;
  const [, concluir] = li.children;
  concluir.clicar(); assert.equal(li.classList.contains('done'), true);
  concluir.clicar(); assert.equal(li.classList.contains('done'), false);
});

test('Deletar remove só a tarefa clicada', () => {
  limpar();
  adicionar('a'); adicionar('b'); adicionar('c');
  lista.children[1].children[2].clicar();
  assert.deepEqual(lista.children.map((li) => li.children[0].textContent), ['a', 'c']);
});
