// strings são indexaváveis 
//               0123456789...
let umaString = "Um \" \\ o texto \"  ";

console.log(umaString.toUpperCase());// passa tudo para caixa alta
console.log(umaString.toLowerCase());// passa tudo para caixa baixa

console.log(umaString.length); //conta a quantidade de caracteres de uma String
console.log(umaString.slice(10, 13)); //pega os caracteres de um marcador ate o outro dentro de uma String
console.log(umaString.slice(-3)); //pega os caracteres de um marcador do final para o começo de uma String
console.log(umaString.slice(-5, umaString.length- 1)); //define a area de uma string que devera ser pego


console.log(umaString[7]); //exibe letra e que está na posição 7 da String
console.log(umaString.charAt(9)); //exibe letra e que está na posição 9 da String
console.log(umaString.charCodeAt(9)); //exibe o codigo da letra "t" na tabela ASCII e que está na posição 9 da String
console.log(umaString.concat(' em um lindo dia')); //concatena o conteúdo à String
console.log(umaString + ' em um lindo dia'); //concatena o conteúdo à String
console.log(`${umaString} em um lindo dia`); //concatena o conteúdo à String
console.log(umaString.indexOf('texto')); //pesquisa um indice dentro da String, neste caso posição 6
console.log(umaString.indexOf('texto' , 2)); //pesquisa um indice após o indice 2 dentro da String, neste caso posição 6
console.log(umaString.lastIndexOf('x')); //pesquisa um indice dentro da String, do final para o começo
console.log(umaString.match(/[a-z]/)); //pesquisa um indice dentro da String *obs aceita expressoes regulares - neste caso retornou todas as minusculas do texto
console.log(umaString.match(/[a-z]/g)); //pesquisa um indice dentro da String *obs aceita expressoes regulares - neste caso retornou todas as minusculas do texto, e a utilização do g retorna dentro de um array
console.log(umaString.search(/x/)); //pesquisa um indice dentro da String *obs aceita expressoes regulares
console.log(umaString.replace('Um', 'Outra')); //substitui o primeiro valor pelo segundo -> ex: substitiu um por outra
console.log(umaString.replace(/Um/, 'Outra')); //substitui o primeiro valor pelo segundo -> ex: substitiu um por outra
console.log(umaString.replace(/o/, '#')); //substitui o primeiro valor pelo segundo -> ex: substitiu um por outra
console.log(umaString.replace(/o/g, '#')); //substitui todos os valores pelo segundo -> ex: substitiu um por outra