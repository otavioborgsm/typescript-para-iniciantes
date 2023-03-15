"use strict";
function normalizar(texto) {
    return texto.trim().toLowerCase();
}
console.log(normalizar(' DeSIGN'));
function mostrarCursos(cursos) {
    cursos.forEach((curso) => {
        document.body.innerHTML += `
      <div>
        <h2>${curso.nome}</h2>
        <p>Horas: ${curso.horas}</p>
      </div>
    `;
    });
}
const dados = 'o any gera problemas';
mostrarCursos(dados);
