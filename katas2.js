// comece a criar a sua função add na linha abaixo
function add(xAdd, yAdd){
    return xAdd + yAdd
}
console.assert(add(3, 5) === 8, 'A função add não está funcionando como esperado');


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


// comece a criar a sua função power na linha abaixo
function power(xPower, nPower){
    let final = 1

    for(let i = 0; i <  nPower; i = add(i, 1)){
        final = multiply(xPower, final)
    }
    return final
}
console.assert(power(3, 4) === 81, 'A função power não está funcionando como esperado');


// comece a criar a sua função factorial na linha abaixo
function factorial(xFac){
    let final = 1

    for(let i = 1; i <= xFac; i = add(i, 1)){
        final = multiply(i, final)
    }
    return final
}
console.assert(factorial(5) === 120, 'A função factorial não está funcionando como esperado');


/**
 * BONUS (aviso: o grau de dificuldade é bem maior !!!)
 */

// crie a função fibonacci
function fibonacci(xFib){
    let xFibonacci = 0
    let yFibonacci = 1
    
    let final = 0

    if(xFibonacci === 1){
        return 0
    }
    for(let i = 2; i < xFib; i = add(i, 1)){
        final = add(xFibonacci, yFibonacci)
        xFibonacci = yFibonacci
        yFibonacci = final
    }
    return final
}
console.assert(fibonacci(8) === 13, 'A função fibonacci não está funcionando como esperado');


//OUTRO MODELO
/* 
function fibonacci(xFib){
let fibo = [];
xFibonacci[0] = 0;
yFibonacci[1] = 1;

for(let i = 2; i < number; i++){
  fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
}
return fibonacci[8];
}
let final = fibonacci(10);
console.log(final); 
*/
