"use strict";
document.querySelector('video'); // HTMLVideoElement
document.querySelector('img'); // HTMLImageElement
const link1 = document.querySelector('a'); // HTMLAnchorElement
const link2 = document.querySelector('#origamid'); // Element
link1?.href;
// link2?.href; // erro no ts, pois pode ser qualquer elemento com id
// Correção do erro
if (link2 instanceof HTMLAnchorElement) {
    link2?.href;
}
const links = document.querySelectorAll('.link');
console.log(links instanceof NodeList);
links.forEach((link) => {
    if (link instanceof HTMLAnchorElement) {
        console.log(link.href);
    }
    else {
        console.log(typeof link); // retorna object
    }
});
// erro, filter é um método de Array e não de NodeList
// const anchorLinks = links.filter((link) => link instanceof HTMLAnchorElement);
// Funciona, pois a NodeList foi transformada em uma Array
const anchorLinks = Array.from(links).filter((link) => link instanceof HTMLAnchorElement);
console.log(anchorLinks);
// Exercício
// 1 - Selecione os elementos com a classe link.
// 2 - Crie uma função que deve ser executada para cada elemento.
// 3 - Modificar através da função o estilo da color e border.
const elementosLink = document.querySelectorAll('.link');
function modificaBorder(link) {
    link.style.border = "2px solid black;";
    link.style.color = "red;";
}
Array.from(elementosLink).forEach((link) => {
    if (link instanceof HTMLElement) {
        modificaBorder(link);
    }
});
