let total: string | number = 200;
total = '300';

function isNumber(value: string | number){
    if(typeof value === "number"){
        return true
    }
    return false
}

const button = document.querySelector("button");

button?.click();


// Exercícios

// 1 - Crie uma função chamada toNumber
// 2 - A função pode receber number | string
// 3 - Se a função receber um número, retorne um número
// 4 - Se a função receber uma string, retorne um número
// 5 - Se ela receber algo diferente, retorne um erro. (throw "value deve ser um número ou uma string")

function toNumber(value: string | number){
    const number = +value

    if(number){
        return number
    }

    throw "value deve ser um número ou uma string"
}

console.log(toNumber("-20"))