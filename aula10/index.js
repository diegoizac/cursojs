/**
 Aritméticos
 + Adição / Concatenação
 - Subtração
 / Divisão 
 * Multiplicação 
 ** Potenciação
 % Resto da divisão

 Precedencia 
 
    ()
    **
    *    /    %
    +    -

    da esquerda para a direita
 */
//o incremento poderá ocorrer previamento sendo ++contador ou posteriormente contador++
/**
 Incremento = ++
 Decremento = --
 */
 let contador = 1;
 ++contador; //2
 ++contador; //3
 ++contador; //4
 ++contador; //5

 console.log(contador++);
 console.log(contador);

/**
 Operadores de atribuição
**=
+=
-=
/=

 */

 let contador2 = 2;
 contador2 *= 2;
 contador2 *= 2;
 contador2 **= 2;

 console.log(contador2);


 const num1 = 10;
 const num2 = 5;

 console.log(num1 % num2);

 // NaN - Not a number
 const num5 = 10;
 const num6 = parseInt('5'); //converte a string em um numero inteiro
 const num8 = parseFloat('5.2'); //converte a string em um numero com casas decimais
 const num9 = Number('5.2'); //converte a string em um numero
 console.log(num5 + num6);
 console.log(typeof num6);
