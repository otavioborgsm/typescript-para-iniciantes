const frase: string = 'Front End';
const preco: number = 500;
const condi: boolean = preco > 100;


console.log(typeof null) // Retorna object

if (typeof frase === 'string') {
    console.log('frase é string');
} else {
    console.log('frase não é string');
}
if (typeof preco === 'number') {
    console.log('preco é number');
}
if (typeof condi === 'boolean') {
    console.log('condi é boolean');
}
