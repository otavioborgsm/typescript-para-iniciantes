"use strict";
// null é um tipo primitivo que representa a ausência de valor. 
// É comum em funções do DOM que fazem uma busca, retornarem null quando não são bem sucedidas.
const button = document.querySelector('button');
const config = localStorage.getItem('config');
if (button !== null) {
    button.click();
}
if (button) {
    button.click();
}
if (button)
    button.click();
button?.click();
console.log(typeof null);
// undefined representa variáveis/propriedades que foram instanciadas, 
// porém, os seus valores ainda não foram definidos.
let total;
console.log(total); // undefined
const data = {};
console.log(data.nome);
const livro = {};
const jogo = {
    nome: 'Ragnarok',
};
jogo.nome?.toLowerCase();
livro.nome?.toLowerCase();
// Erros de null só são apontados com a configuração strictNullChecks ou strict
