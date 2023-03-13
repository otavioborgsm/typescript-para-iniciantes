let produto: String = "Livro";
let preco: Number = 200;

const carro: {
    marca: String,
    portas: Number
} = {
    marca: "Audi",
    portas: 5
}

const barato: boolean | string = preco < 400 ? true : "produto caro"

function somar(a: number, b: number): string{
    return `${a + b}`
}

console.log(somar(4, 10))

const nintendo = {
    nome: "Nintendo",
    preco: "2000"
}

function transformarPreco(produto: {nome: string, preco: string}){
    produto.preco = "R$ " + produto.preco

    return produto
}

const produtoNovo = transformarPreco(nintendo)

console.log(produtoNovo)

// Ex 1

// Conserte a função com TypeScript

// function normalizarTexto(texto) {
//     return texto.trims().toLowercase();
// }

function normalizarTexto(texto: string) {
    return texto.trim().toLowerCase();
}

// Ex 2

// Conserte as funções com TypeScript

const input = document.querySelector('input');

const total = localStorage.getItem('total');

if(total && input){
    input.value = total;
    calcularGanho(input.value);
}

function calcularGanho(value: string) {

  const p = document.querySelector('p');
  if(p){
    p.innerText = `ganho total: ${+value + 100 - +value * 0.2}`;
  }
}

function totalMudou() {
    console.log("passou")
    if(input){
        const value = input.value;
        localStorage.setItem('total', value);
        calcularGanho(value);
    }
}

if(input){
    input.addEventListener('keyup', totalMudou);
}
