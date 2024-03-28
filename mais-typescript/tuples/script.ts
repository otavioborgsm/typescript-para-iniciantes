// Array com tipos diversos
const produto1: (string | number)[] = ["Notebook", 2500];

// Array com tipo definido por posição
const produto2: [string, number] = ["Notebook", 2500];

const nome1 = produto1[0]; // string | number
const nome2 = produto2[0]; // string

const [nome, preco] = produto2;

console.log(nome); // string
console.log(preco); // number

function getText(selector: string) {
  const el = document.querySelector<HTMLElement>(selector);
  if (el) {
    // [HTMLElement, string] e readonly
    return [el, el.innerText] as const;
  } else {
    return null;
  }
}

const button = getText("button");

if (button) {
  const [buttonElement, buttonText] = button;
  console.log(buttonElement);
  console.log(buttonText);
}

async function fetchVendas() {
  const response = await fetch("https://api.origamid.dev/json/vendas.json");
  const data = await response.json();
  somarVendas(data);
}

interface ProdutoDetalhes {
  marca: string;
  cor: string;
}

// tuple de venda
type Venda = [string, number, string, ProdutoDetalhes];

function somarVendas(vendas: Venda[]) {
  // Com for loop
  let total1 = 0;
  for (let i = 0; i < vendas.length; i++) {
    total1 += vendas[i][1];
  }
  document.body.innerHTML += `<p>Total: R$ ${total1}</p>`;

  // Com reduce
  const total2 = vendas.reduce((total, venda) => {
    return total + venda[1];
  }, 0);

  document.body.innerHTML += `<p>Total: R$ ${total2}</p>`;
}

fetchVendas();
