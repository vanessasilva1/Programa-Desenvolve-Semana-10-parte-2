const sala1 = [10, 20, 30];
const sala2 = [10, 10, 10];
const sala3 = [50, 30];

function mediaSala(notasSala) { //notasSala vai ser substituido em cada vez por sala1, sala2 e sala3
    const soma = notasSala.reduce((acumulador, atual) => atual + acumulador, 0); //acum e atual são padrões, tem sempre q ter. Reduce vai reduzir o array em um número só. Vai somar tudo o que estivar la; É importante a ordem dos parametros, vindo o acum primeiro e depois o atual
    return soma / notasSala.length;
}

console.log(`Sala 1: ${mediaSala(sala1)}`);
console.log(`Sala 2: ${mediaSala(sala2)}`);
console.log(`Sala 3: ${mediaSala(sala3)}`);

// Média das notas

const notas = [10, 10 , 10, 10];

const media = notas.reduce((acum, atual) => atual + acum, 0);

console.log(media);
//3) A função callback foi escrita na forma de arrow function; nesse caso, quando só temos uma linha de instrução dentro da função (atual + acum) não precisamos usar chaves e nem da palavra-chave return.
/*
    Caso você tenha mais de uma linha de instrução dentro de uma arrow function, as chaves {} e a palavra-chave return voltam a ser necessários.

const soma = numeros.reduce(function (acum, atual) {
 return atual + acum
}, 0)

function operacaoNumerica(acum, atual) {
 return atual + acum
}

const soma = numeros.reduce(operacaoNumerica, 0)
*/
