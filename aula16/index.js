const nome = 'Diego Izac';
const alunos = ['Luiz','Maria', 'João'];
console.log(alunos);
console.log(alunos[1]);
console.log(alunos.length);

alunos[0]='Diego';
console.log(alunos);
alunos[3] = 'Tião';
console.log(alunos.length);
console.log(alunos);
alunos[alunos.length]='Izac';
alunos[alunos.length]='Pedro';
alunos[alunos.length]='Carlos';
alunos.push('Rafael');//adiciona um item ao array na ultima posição
alunos.push('Luiza');//adiciona um item ao array na ultima posição
const removido = alunos.pop();// remove item do final do array 
console.log(removido);
console.log(alunos);

// const removido = alunos.shift();// remove item do começo do array 
// console.log(removido);
// console.log(alunos);

console.log(alunos.length);
console.log(alunos);

alunos.unshift('PrimeiroNome');//adiciona um item na primiera posição do array
console.log(alunos);