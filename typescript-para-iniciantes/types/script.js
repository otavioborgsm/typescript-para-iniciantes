
//@ts-check
const frase = 'Front End'
const total = 100.05
const empresas = ['Microsoft', 'Apple', 'Dell']

console.log(frase.toLowerCase())
//total.toLowercase()

console.log(total.toFixed())

empresas.map((empresa) => empresa.toLowerCase())

const body = document.body

body.style.background = "#000"

const button = document.querySelector("button")

if(button){
    button.click()
}

const operacao = 100 + 200

console.log(operacao)