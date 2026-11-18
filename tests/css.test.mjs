// Testes do CSS do Ceep: sem regra duplicada e toda classe usada no HTML/JS tem estilo.
// CEEP_DIR permite apontar para outra versão do código (prova de que o teste pega regressões).
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const raiz = path.resolve(process.env.CEEP_DIR || path.join(import.meta.dirname, '..', 'JVsDOM', 'CEEP'));
const ler = (rel) => fs.readFileSync(path.join(raiz, rel), 'utf8');
const css = ler('assets/css/style.css');

// Seletor normalizado, para "a, b" e "a,\nb" contarem igual. Não confere declarações (aparência).
const regras = [...css.replace(/\/\*[\s\S]*?\*\//g, '').matchAll(/([^{}]+)\{[^}]*\}/g)].map((m) => ({
  seletor: m[1].split(',').map((s) => s.trim()).join(', '),
}));

test('CSS: nenhum seletor aparece em duas regras', () => {
  const vistos = new Map();
  for (const r of regras) vistos.set(r.seletor, (vistos.get(r.seletor) || 0) + 1);
  const repetidos = [...vistos].filter(([, n]) => n > 1).map(([s]) => s);
  assert.deepEqual(repetidos, []);
});

test('CSS: sourceMappingURL só se o .map existir', () => {
  const m = css.match(/sourceMappingURL=(\S+?)\s*\*\//);
  if (m) assert.ok(fs.existsSync(path.join(raiz, 'assets/css', m[1])), `${m[1]} não existe`);
});

test('CSS: toda classe usada no HTML e no JS tem regra', () => {
  const html = ler('index.html');
  const js = ['main.js', 'componentes/concluitarefas.js', 'componentes/deletatarefas.js'].map(ler).join('\n');
  const usadas = new Set([
    ...[...html.matchAll(/class="([^"]+)"/g)].flatMap((m) => m[1].split(/\s+/)),
    ...[...js.matchAll(/classList\.(?:add|toggle)\(\s*['"]([\w-]+)['"]/g)].map((m) => m[1]),
  ]);
  const comEstilo = new Set(regras.flatMap((r) => [...r.seletor.matchAll(/\.([\w-]+)/g)].map((m) => m[1])));
  const semEstilo = [...usadas].filter((c) => !comEstilo.has(c));
  assert.ok(usadas.size >= 8, `poucas classes achadas (${usadas.size}): regex quebrou?`);
  assert.deepEqual(semEstilo, []);
});
