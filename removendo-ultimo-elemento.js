const notas = [10, 7, 5, 8, 10];
notas.pop() // não precisa passar parâmetros. Remove sempre o último elemento.
console.log(notas);

let media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;
console.log(`A média do aluno é ${media}`);