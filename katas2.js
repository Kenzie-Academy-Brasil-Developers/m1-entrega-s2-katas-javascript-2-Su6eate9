// comece a criar a sua função add na linha abaixo
function add(xAdd, yAdd){
    return xAdd + yAdd
}
console.assert(add(3, 5) === 8, 'A função add não está funcionando como esperado');

//TESTE DE MESA
/* 
xAdd;yAdd;soma;return;console
0;0;"0 + 0 ";-;-
0;0;0 + 0;0;-
3;5;3 + 5 = 8;3 + 5 = 8;8
 */


// comece a criar a sua função multiply na linha abaixo
function multiply(xMult, yMult){
    let mult = xMult
    let final = 0

    for(let i = 0; i < yMult; i = add(i, 1)){
        final = add(mult, final)
    }
    return final
}
console.assert(multiply(4, 6) === 24, 'A função multiply não está funcionando como esperado');

//TESTE DE MESA
/* 
mult;yMult;final;i;return;console
xMult;-;-;0 + 1 = 1;-;-
xMult;yMult > 0;mult * final = final;1 + 1 = 2;-;-
-;yMult > 0;mult * final = final;2 + 1 = 3;mult * final = final;-
4;6;4 * 6 = 24;3 + 1 = 4;24;24
 */


// comece a criar a sua função power na linha abaixo
function power(xPower, nPower){
    let final = 1

    for(let i = 0; i <  nPower; i = add(i, 1)){
        final = multiply(xPower, final)
    }
    return final
}
console.assert(power(3, 4) === 81, 'A função power não está funcionando como esperado');

//TESTE DE MESA
/* 
xPower;nPower;final;i;return;console
-;-;1;0 + 1;-;-
final / final;nPower > i;xPower ^ final;1 + 1;-;-
final / final;nPower > i;xPower ^ final;2 + 1;final;-
3;4;3^4;3 + 1;3^4 = 81;81
 */


// comece a criar a sua função factorial na linha abaixo
function factorial(xFac){
    let final = 1

    for(let i = 1; i <= xFac; i = add(i, 1)){
        final = multiply(i, final)
    }
    return final
}
console.assert(factorial(5) === 120, 'A função factorial não está funcionando como esperado');

//TESTE DE MESA
/* 
xFac;final;i;return;console
-;1;1 + 1;-;-
>= i;1;2 + 1;-;-
>= i;i * final = 1;3 + 1;final;-
5;i * final = 120;4 + 1;i * final = 120;120
 */



/**
 * BONUS (aviso: o grau de dificuldade é bem maior !!!)
 */

// crie a função fibonacci
function fibonacci(xFib){
    let xFibonacci = 0
    let yFibonacci = 1
    
    let final = 0

    if(xFib === 1){
        return 0
    }
    for(let i = 2; i < xFib; i = add(i, 1)){
        final = add(xFibonacci, yFibonacci)
        xFibonacci = yFibonacci
        yFibonacci = final
    }
    return yFibonacci
}
console.assert(fibonacci(7) === 13, 'A função fibonacci não está funcionando como esperado');

//TESTE DE MESA
/* 
xFib;xFibonacci;yFibonacci;final;i;return;console
-;0;1;0;-;-;-
-;1;1;0;-;0;-
> 2;1;1;0;2 + 1;-;-
> 2;1;1;xFibonacci * yFibonacci;3 + 1;-;-
> 2;yFibonacci;xFibonacci;xFibonacci * yFibonacci;4 + 1;final;-
13;final;final;13;5 + 1;13;13
 */


//OUTRO MODELO
/* 
function fibonacci(xFib){
let fibo = [];
xFibonacci[0] = 0;
yFibonacci[1] = 1;

for(let i = 2; i < number; i++){
  fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
}
return fibonacci[7];
}
let final = fibonacci(10);
console.log(final); 
*/
