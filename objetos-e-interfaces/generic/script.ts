function retorno<variavel>(a: variavel): variavel {
  return a
}

console.log(retorno('A game'))
console.log(retorno(200))

// Exemplo 2
function firstFive<Tipo>(lista: Tipo[]): Tipo[] {
  return lista.slice(0, 5);
}

const numeros = [1, 3, 4, 5, 3, 20, 3, 4, 5];
const frutas = ['Banana', 'Pêra', 'Uva', 'Laranja', 'Limão'];

const five1 = firstFive<number>(numeros);
const five2 = firstFive<string>(frutas);

// Exemplo 3
function notNull<Tipo>(arg: Tipo) {
  if (arg !== null) return arg;
  else return null;
}

notNull(200)?.toFixed();
notNull('André')?.toLowerCase();

// Exemplo 4
function tipoDado<T>(a: T): { dado: T; tipo: string } {
  const resultado = {
    dado: a,
    tipo: typeof a,
  };
  console.log(resultado);
  return resultado;
}
tipoDado(true);

// Extends
// Exemplo 1
function extractText<Tipo extends HTMLElement>(el: Tipo): string {
  return el.innerText;
}

const link = document.querySelector('a');

if (link) {
  console.log(extractText(link));
  // extractText<HTMLAnchorElement extends HTMLElement>(el: HTMLAnchorElement): string
}

// Exemplo 2
function $<Tipo extends Element>(selector: string): Tipo | null {
  return document.querySelector(selector);
}

const link2 = $<HTMLAnchorElement>('a')?.href;

// Define que o retorno será um HTMLAnchorElement
const link3 = document.querySelector<HTMLAnchorElement>('.link');
link3?.href;

async function getData<T>(url: string): Promise<T> {
  const response = await fetch(url);
  return await response.json();
}

interface Notebook {
  nome: string;
}

async function handleData() {
  const notebook = await getData<Notebook>(
    'https://api.origamid.dev/json/notebook.json',
  );
  console.log(notebook.nome);
}

handleData()
