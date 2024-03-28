class Livro {
  tipo = "livro";
  nome: string;
  preco: number | undefined;
  constructor(nome: string, preco?: number) {
    this.nome = nome;
    this.preco = preco;
  }
}

const livro = new Livro("Harry Potter");
const livro2 = new Livro("Harry Potter 2", 30.1);

class Produto {
  readonly tipo = "livro";
  nome: string;
  private preco: number;
  constructor(nome: string, preco: number) {
    this.nome = nome;
    this.preco = preco;
  }

  getPreco() {
    return this.preco;
  }

  static trsnaformarPreco(preco: number): string {
    return `R$ ${preco}`;
  }
}

const produto = new Produto("Harry Potter", 10.5);
console.log(produto.getPreco());
console.log(Produto.trsnaformarPreco(produto.getPreco()));

class Quadrado {
  readonly lados = 4;
  medida: number;
  constructor(medida: number) {
    this.medida = medida;
  }
  getPerimetro() {
    return this.medida * this.lados;
  }
  getArea() {
    return this.medida * this.medida;
  }
}

class Circulo {
  readonly PI = Math.PI;
  raio: number;
  constructor(raio: number) {
    this.raio = raio;
  }
  getPerimetro() {
    return Math.round(2 * this.PI * this.raio * 100) / 100;
  }
  getArea() {
    return Math.round(this.PI * (this.raio * this.raio) * 100) / 100;
  }
}

const formas = [2, 32, 12, 3, 4, 20, 37, 9].map((n) => {
  if (n < 15) {
    return new Quadrado(n);
  } else {
    return new Circulo(n);
  }
});

formas.forEach((forma) => {
  if (forma instanceof Quadrado) {
    console.log(forma.getArea());
  }
  if (forma instanceof Circulo) {
    console.log(forma.getPerimetro());
  }
});
