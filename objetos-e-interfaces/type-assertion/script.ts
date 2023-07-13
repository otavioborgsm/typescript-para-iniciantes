// const video = document.querySelector('.player') as HTMLVideoElement;
// video.volume;
// erro runtime, não existe volume de null

// erro TS, possíveis dados devem ser compatíveis com Element | null
// const link = document.querySelector('.link') as string;

// Muito utilizado em retornos do tipo any (recorrente em consultas de api)

interface Produto {
  nome: string;
  preco: number;
}

async function fetchProduto() {
  const response = await fetch('https://api.origamid.dev/json/notebook.json');
  return response.json() as Promise<Produto>;
}

// Podemos usar o as em diferentes locais.
async function handleProduto1() {
  const produto = await fetchProduto();
  produto.nome;
}

async function handleProduto2() {
  const produto = (await fetchProduto()) as Produto;
  produto.nome;
}

async function handleProduto3() {
  const produto = await fetchProduto();
  (produto as Produto).nome;
}

// !
// non-null operator
// Utilizar com cuidado

// const video = document.querySelector('video')!;
// video.volume;
// erro runtime, não existe volume de null

// erro runtime
// document.querySelector('a')!.href = 'https://www.origamid.com';

// Outras sintaxes

// const video1 = document.querySelector('.player') as HTMLVideoElement;
// const video2 = <HTMLVideoElement>document.querySelector('.player');
// const video3 = document.querySelector<HTMLVideoElement>('.player');
// const video4 = document.querySelector('.player');

// video1.volume;
// video2.volume;
// video3?.volume;
// (video4 as HTMLVideoElement).volume;