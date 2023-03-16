class Produto {
  nome: string;
  preco: number;
  constructor(nome: string, preco: number) {
    this.nome = nome;
    this.preco = preco;
  }
  precoReal() {
    return `R$ ${this.preco}`;
  }
}


const livro = new Produto('A Guerra dos Tronos', 200);

console.log(livro)
console.log(livro instanceof Produto)

class Livro extends Produto{
  autor: string
  constructor(nome: string, preco: number, autor: string){
    super(nome, preco)
    this.autor = autor
  }
}

class Jogo extends Produto{
  jogadores: number
  constructor(nome: string, preco: number,jogadores: number){
    super(nome, preco)
    this.jogadores = jogadores
  }
}

function buscarProduto(busca: string){
  if(busca === 'O Hobbit'){
    return new Livro("O Hobbit", 50.00, 'J. R. R. Tolkien')
  }
  if(busca === 'Dark Souls'){
    return new Jogo("Dark Souls", 299.00, 1)
  }
  return null
}

const produto = buscarProduto("O Hobbit")

if (produto instanceof Livro) {
  console.log(produto.autor)
}

// instanceof não funciona para interfaces



// Exercício

// 1 - Selecione o link utilizando o método getElementById.

// 2 - Substitua o href do link (HTMLAnchorElement) de http:// para https://.

const link = document.getElementById("origamid")

console.dir(link)

if(link instanceof HTMLAnchorElement){
  link.href = link.href.replace("http://", "https://")
}