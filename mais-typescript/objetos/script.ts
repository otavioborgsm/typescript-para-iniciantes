interface Produto {
  nome: string;
  quantidade: number;
}

// Partial<Produto>
// interface Produto {
//   nome?: string;
//   quantidade?: number;
// }

const produto1 = {
  nome: "Notebook",
  quantidade: 10,
  cor: "azul",
};

const produto2 = {
  nome: "Geladeira",
  quantidade: 4,
  freezer: true,
};

const servico1 = {
  nome: "Instalação",
};

function mostrarQuantidade(produto: Produto) {
  console.log(produto.quantidade + 20);
}
function mostrarQuantidadePartial(produto: Partial<Produto>) {
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


// -- Key unknown --

interface Post {
  titulo: string;
  visualizacoes: number;
  tags: string[];
  [key: string]: unknown; // Valor generico (campo e valor)
}

const artigo: Post = {
  titulo: "Como aprender HTML",
  visualizacoes: 3000,
  tags: ["Front End", "HTML"],
  autor: "Otávio",
};

artigo.autor;
artigo.descricao;

function handlePost(post: Post) {
  document.body.innerHTML += `${post.autor}`;
}

handlePost(artigo);


// -- RECORD --

type ObjetoLiteral1 = {
  [key: string]: unknown;
};

type ObjetoLiteral2 = Record<string, unknown>;

function mostrarTitulo(obj: ObjetoLiteral2) {
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
  titulo: "Otávio",
});
