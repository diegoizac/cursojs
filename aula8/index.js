/*
Diego Izac Luis da Silva tem 38 anos, pesa 113 kg
tem 1.72 de altura e seu IMC é de 34.876543209876544
Diego Izac Luis nasceu em 1982
*/

const nome = 'Diego Izac Luis';
const sobrenome = 'da Silva';
const idade = 38;
const peso = 113;
const alturaEmM = 1.80; // altura em metros

let imc; // peso / (altura * altura)
let anoNascimento;
anoNascimento = 2020 - idade;
indiceDeMassaCorporal = peso / (alturaEmM * alturaEmM);

console.log(anoNascimento);
console.log(indiceDeMassaCorporal);

console.log(nome, sobrenome, 'tem', idade, 'anos, pesa ', peso, 'kg');
console.log(`tem ${alturaEmM}m de altura e seu IMC é de ${indiceDeMassaCorporal}.`); //template strings
console.log(nome + ' ' + sobrenome, 'nasceu em', anoNascimento+'.');

