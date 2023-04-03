function somar(a: number, b: number, c?: number): number {
  return a + b + (c ? c : 0);
}
somar(3, 4);
somar(3, 4, 1);

const subtrair = (a: number, b: number): number => a - b;

subtrair(10, 2);

type Callback = (event: MouseEvent) => void;

// Void

function pintarTela(cor: string) {
  document.body.style.background = cor;
}

pintarTela('black');

// Erro, void não pode ser verificado
// if (pintarTela('black')) {
// }

const btn = document.querySelector('button');

// Erro, void não pode ser verificado
// if (btn && btn.click()) {
// }

// Se a função tiver qualquer tipo de retorno,
// ela não terá mais o void como uma opção e sim o undefined
function isString(value: any) {
  if (typeof value === 'string') {
    return true;
  }
}

if (isString('teste')) {
  console.log('É string');
}

// Never

function abortar(mensagem: string): never {
  throw new Error(mensagem);
}

//abortar('Um erro ocorreu');
console.log('Tente novamente');


// Método dentro do objeto
interface Quadrado {
  lado: number;
  perimetro(lado: number): number;
}

function calcular(forma: Quadrado) {}



// OVERLOAD

// Existem funções que retornam diferentes dados dependendo do argumento.

// Podemos declarar a interface dessas funções utilizando function overload. 
// Basta declarar a interface antes da definição da mesma, utilizando o mesmo nome.

// O Overload deve ser compatível com a função original.

// Exemplo 1
function normalizar(valor: string): string;
function normalizar(valor: string[]): string[];
function normalizar(valor: string | string[]): string | string[] {
  if (typeof valor === "string") {
    return valor.trim().toLowerCase();
  } else {
    return valor.map((item) => item.trim().toLowerCase());
  }
}

normalizar(" Produto ");
normalizar(["Banana ", " UVA"]);

// Exemplo 2
function $(seletor: "video"): HTMLVideoElement | null;
function $(seletor: "div"): HTMLDivElement | null;
function $(seletor: "a"): HTMLAnchorElement | null;
function $(seletor: string): Element | null;
function $(seletor: string): Element | null {
  return document.querySelector(seletor);
}

$("a")?.href;
$("video")?.volume;
$(".teste")?.innerHTML;

// Exercício

// Crie uma função que arredonda um valor passado para cima.
// A função pode receber string ou number.
// A função deve retornar o mesmo tipo que ela receber.
function arredondarParaCima(valor: string): string
function arredondarParaCima(valor: number): number
function arredondarParaCima(valor: number | string): number | string {
  if(typeof valor === 'number'){
    return Math.ceil(valor)
  }else{
    return Math.ceil(+valor) + ''
  }
}

console.log(arredondarParaCima(200.32))
console.log(arredondarParaCima("200.32"))