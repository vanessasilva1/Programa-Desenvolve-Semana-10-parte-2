const nomes = ['Ana', 'Julia', 'Maria'];

const notas = [4.5, 6, 3];

const reprovados = nomes.filter( (_, indice) => notas[indice] < 6); // filter retorna uma lista, e a gente coloca paratenses quando for mais de 1 parâmetro, e o filter é aquela que a gente quer q imprime, q filtra. Quando a gente tem um parametro, mas não vai usá-lo, colocar _
//Filter retorna true ou false
console.log(`Reprovados ${reprovados}`);