// Desestruturar objetos indicando o tipo dos dados
var body = document.body;
console.log(body);
function handleData(_a) {
    var nome = _a.nome, preco = _a.preco;
    nome.includes('book');
    preco.toFixed();
}
handleData({
    nome: 'Notebook',
    preco: 2000
});
// Sempre cuidado ao tipo de dado que está lidando, indicar sempre o tipo exato.
function handleClick(_a) {
    var currentTarget = _a.currentTarget, pageX = _a.pageX;
    if (currentTarget instanceof HTMLElement) {
        currentTarget.innerHTML = "<h1>Mouse Click em x:".concat(pageX, "</h1>");
    }
}
document.documentElement.addEventListener('click', handleClick);
// Operador ...rest
function comparar(tipo) {
    var numeros = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        numeros[_i - 1] = arguments[_i];
    }
    if (tipo === 'maior') {
        return Math.max.apply(Math, numeros);
    }
    if (tipo === 'menor') {
        return Math.min.apply(Math, numeros);
    }
}
console.log(comparar('maior', 3, 2, 4, 30, 5, 6, 20));
console.log(comparar('menor', 3, 2, 4, 1, 5, 6, 20));
