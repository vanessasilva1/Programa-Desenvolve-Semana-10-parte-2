const numeros = [0, 20, 30, 10];

let soma = 0;

for(let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
}

console.log(soma);
let media = soma / numeros.length;
console.log(media);