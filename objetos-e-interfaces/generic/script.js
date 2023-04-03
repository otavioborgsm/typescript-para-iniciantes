"use strict";
function retorno(a) {
    return a;
}
console.log(retorno('A game'));
console.log(retorno(200));
// Exemplo 2
function firstFive(lista) {
    return lista.slice(0, 5);
}
const numeros = [1, 3, 4, 5, 3, 20, 3, 4, 5];
const frutas = ['Banana', 'Pêra', 'Uva', 'Laranja', 'Limão'];
const five1 = firstFive(numeros);
const five2 = firstFive(frutas);
// Exemplo 3
function notNull(arg) {
    if (arg !== null)
        return arg;
    else
        return null;
}
notNull(200)?.toFixed();
notNull('André')?.toLowerCase();
// Exemplo 4
function tipoDado(a) {
    const resultado = {
        dado: a,
        tipo: typeof a,
    };
    console.log(resultado);
    return resultado;
}
tipoDado(true);
// Extends
// Exemplo 1
function extractText(el) {
    return el.innerText;
}
const link = document.querySelector('a');
if (link) {
    console.log(extractText(link));
    // extractText<HTMLAnchorElement extends HTMLElement>(el: HTMLAnchorElement): string
}
// Exemplo 2
function $(selector) {
    return document.querySelector(selector);
}
const link2 = $('a')?.href;
// Define que o retorno será um HTMLAnchorElement
const link3 = document.querySelector('.link');
link3?.href;
async function getData(url) {
    const response = await fetch(url);
    return await response.json();
}
async function handleData() {
    const notebook = await getData('https://api.origamid.dev/json/notebook.json');
    console.log(notebook.nome);
}
handleData();
