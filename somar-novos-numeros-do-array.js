const notas = [10, 9, 8, 7, 6];

const notasAtualizadas = notas.map(nota => nota == 10 ? nota : ++nota); // o método map retorna um novo array, diferente do ForEach que não retorna nada. nota é nosso parametro e ++nota vai incrementar antes de retornar. Ou seja 1 + 9, pq senão dá erro e ele imprimi antes de incrementar. Bom para retornar um  novo array

console.log(notasAtualizadas)