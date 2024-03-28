// Partial<Produto>
// interface Produto {
//   nome?: string;
//   quantidade?: number;
// }
var produto1 = {
    nome: "Notebook",
    quantidade: 10,
    cor: "azul"
};
var produto2 = {
    nome: "Geladeira",
    quantidade: 4,
    freezer: true
};
var servico1 = {
    nome: "Instalação"
};
function mostrarQuantidade(produto) {
    console.log(produto.quantidade + 20);
}
function mostrarQuantidadePartial(produto) {
    if (produto.quantidade) {
        console.log(produto.quantidade + 20);
    }
}
mostrarQuantidade(produto1);
mostrarQuantidade(produto2);
// erro, não possui quantidade
// mostrarQuantidade(servico1);
mostrarQuantidadePartial(produto2);
// Com Partial permite
mostrarQuantidadePartial(servico1);
var artigo = {
    titulo: "Como aprender HTML",
    visualizacoes: 3000,
    tags: ["Front End", "HTML"],
    autor: "Otávio"
};
artigo.autor;
artigo.descricao;
function handlePost(post) {
    document.body.innerHTML += "".concat(post.autor);
}
handlePost(artigo);
function mostrarTitulo(obj) {
    if ("titulo" in obj) {
        console.log(obj.titulo);
    }
}
// Erros:
// mostrarTitulo("string");
// mostrarTitulo(200);
// mostrarTitulo([1, 2]);
// mostrarTitulo(null);
// mostrarTitulo(undefined);
mostrarTitulo({
    titulo: "Otávio"
});
