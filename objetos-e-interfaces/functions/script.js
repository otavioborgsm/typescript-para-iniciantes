"use strict";
function somar(a, b, c) {
    return a + b + (c ? c : 0);
}
somar(3, 4);
somar(3, 4, 1);
const subtrair = (a, b) => a - b;
subtrair(10, 2);
// Void
function pintarTela(cor) {
    document.body.style.background = cor;
}
pintarTela('black');
// Erro, void não pode ser verificado
// if (pintarTela('black')) {
// }
const btn = document.querySelector('button');
// Erro, void não pode ser verificado
// if (btn && btn.click()) {
// }
// Se a função tiver qualquer tipo de retorno,
// ela não terá mais o void como uma opção e sim o undefined
function isString(value) {
    if (typeof value === 'string') {
        return true;
    }
}
if (isString('teste')) {
    console.log('É string');
}
// Never
function abortar(mensagem) {
    throw new Error(mensagem);
}
//abortar('Um erro ocorreu');
console.log('Tente novamente');
function calcular(forma) { }
function normalizar(valor) {
    if (typeof valor === "string") {
        return valor.trim().toLowerCase();
    }
    else {
        return valor.map((item) => item.trim().toLowerCase());
    }
}
normalizar(" Produto ");
normalizar(["Banana ", " UVA"]);
function $(seletor) {
    return document.querySelector(seletor);
}
$("a")?.href;
$("video")?.volume;
$(".teste")?.innerHTML;
function arredondarParaCima(valor) {
    if (typeof valor === 'number') {
        return Math.ceil(valor);
    }
    else {
        return Math.ceil(+valor) + '';
    }
}
console.log(arredondarParaCima(200.32));
console.log(arredondarParaCima("200.32"));
