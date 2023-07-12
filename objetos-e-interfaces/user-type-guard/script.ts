// Uma array não pode ser verificada com o typeof pois a mesma é um object.
// Podemos verificar se o dado é instanceof Array ou podemos usar a função Array.isArray().

async function fetchCursos() {
  const response = await fetch('https://api.origamid.dev/json/cursos.json')
  const json = await response.json();
  handleCursos(json);
}
fetchCursos();

function handleCursos(data: unknown) {
  if (data instanceof Array) {
    console.log('É instância de Array');
  }
  if (Array.isArray(data)) {
    console.log('É array');
  }
}

// TypeScript não executa JavaScript

function isString(value: unknown): value is string {
  return typeof value === 'string';
}

function handleData(data: unknown) {
  if (isString(data)) {
    data.toUpperCase();
  }
}

console.log(handleData('Origamid'));
console.log(handleData(200));

// Type Guard para Objetos

async function fetchProduto() {
  const response = await fetch('https://api.origamid.dev/json/notebook.json');
  const json = await response.json();
  handleProduto(json);
}
fetchProduto();

interface Produto {
  nome: string;
  preco: number;
}

function isProduto(value: unknown): value is Produto {

  // Necessita verificar se é objeto para evitar erro de Runtime
  if (
    value &&
    typeof value === 'object' &&
    'nome' in value &&
    'preco' in value
  ) {
    return true;
  } else {
    return false;
  }
}

function handleProduto(data: unknown) {
  if (isProduto(data)) {
    console.log(data);
  }
}


// Exercício

// 1 - Faça um fetch da API: https://api.origamid.dev/json/cursos.json
// 2 - Defina a interface da API
// 3 - Crie um Type Guard, que garanta que a API possui nome, horas e tags
// 4 - Use Type Guards para garantir a Type Safety do código
// 5 - Preencha os dados da API na tela.


// {
//   "nome": "HTML e CSS",
//   "horas": 40,
//   "aulas": 200,
//   "gratuito": false,
//   "tags": ["HTML", "CSS", "JavaScript", "Browser"],
//   "idAulas": [1, 2, 3, 4, 5, 6, 7, 8, 9],
//   "nivel": "iniciante"
// }



interface Curso {
  nome: string
  horas: number
  aulas: number
  gratuito: boolean
  tags: string[]
  idAulas: object
  nivel: "iniciante" | "avancado"
}

function isCurso(curso: unknown): curso is Curso{
  if(curso && typeof curso === 'object' &&
    'nome' in curso && 'horas' in curso && 'tags' in curso){
    return true
  } else {
    return false
  }
}

async function consultaCursos() {
  const response = await fetch('https://api.origamid.dev/json/cursos.json')
  const json = await response.json();
  handleCursos(json)
  if(Array.isArray(json)){
    json.forEach(curso => {
      if(isCurso(curso)){
        document.body.innerHTML += `
          <div>
            <p>${curso.nome}</p>
            <p>${curso.horas}</p>
            <p>${curso.tags.join(" / ")}</p>
          </div>
        `
      }
    });  
  }
}
consultaCursos();

