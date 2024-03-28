var Livro = /** @class */ (function () {
    function Livro(nome, preco) {
        this.tipo = "livro";
        this.nome = nome;
        this.preco = preco;
    }
    return Livro;
}());
var livro = new Livro("Harry Potter");
var livro2 = new Livro("Harry Potter 2", 30.1);
var Produto = /** @class */ (function () {
    function Produto(nome, preco) {
        this.tipo = "livro";
        this.nome = nome;
        this.preco = preco;
    }
    Produto.prototype.getPreco = function () {
        return this.preco;
    };
    Produto.trsnaformarPreco = function (preco) {
        return "R$ ".concat(preco);
    };
    return Produto;
}());
var produto = new Produto("Harry Potter", 10.5);
console.log(produto.getPreco());
console.log(Produto.trsnaformarPreco(produto.getPreco()));
var Quadrado = /** @class */ (function () {
    function Quadrado(medida) {
        this.lados = 4;
        this.medida = medida;
    }
    Quadrado.prototype.getPerimetro = function () {
        return this.medida * this.lados;
    };
    Quadrado.prototype.getArea = function () {
        return this.medida * this.medida;
    };
    return Quadrado;
}());
var Circulo = /** @class */ (function () {
    function Circulo(raio) {
        this.PI = Math.PI;
        this.raio = raio;
    }
    Circulo.prototype.getPerimetro = function () {
        return Math.round(2 * this.PI * this.raio * 100) / 100;
    };
    Circulo.prototype.getArea = function () {
        return Math.round(this.PI * (this.raio * this.raio) * 100) / 100;
    };
    return Circulo;
}());
var formas = [2, 32, 12, 3, 4, 20, 37, 9].map(function (n) {
    if (n < 15) {
        return new Quadrado(n);
    }
    else {
        return new Circulo(n);
    }
});
formas.forEach(function (forma) {
    if (forma instanceof Quadrado) {
        console.log(forma.getArea());
    }
    if (forma instanceof Circulo) {
        console.log(forma.getPerimetro());
    }
});
