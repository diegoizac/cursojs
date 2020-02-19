/**
 * 
 *
 
 
let varA = 'A';//B
let varB = 'B';//C
let varC = 'C';//A

const varAInicial = varA;
const varBInicial = varB;
const varCInicial = varC;

varA = varBInicial;
varB = varCInicial;
varC = varAInicial;


console.log(varA, varB, varC);
 * 
 * 
 * 
 */



//outra maniera mais moderna de resolver a mesma situação
let varA = 'A';//B
let varB = 'B';//C
let varC = 'C';//A

[varA, varB, varC] = [varB, varC, varA];

console.log(varA, varB, varC);


