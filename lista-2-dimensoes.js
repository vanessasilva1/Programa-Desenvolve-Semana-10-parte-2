// 2 dimensões - são listas que contém listas dentro dela - matrizes
                //0
const nomes = ["Ana", "Maria", "João"];
const notas  = ["10", "8", "5"];

                ///0     //1
let listaNotas = [nomes, notas];


console.log(`${listaNotas[0][0]} tirou nota ${listaNotas[1][0]}`); // eu estou pegando o array 0 da listaNotas, que é nome e então pegando o valor 0 que está dentro do array nome que é ana o outro é basicamente o mesmo processo.
//Então, as linhas são o primeiro colchete e a coluna o segundo colchete.