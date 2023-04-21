const arrayNums = [1, 2, 3, 4]

//function multiplicaPorDez(num) {
//    return num * 10
//}
//const arraySomada = arrayNums.map(multiplicaPorDez)
//
//console.log(arraySomada)
/*IMPORTANTE: Observe a função multiplicaPorDez. Quando criamos esta função, especificamos que ela precisa receber o parâmetro (num) para ser executada corretamente. No entanto, quando ela está sendo chamada dentro de arrayNums.map(), não passamos nenhum parâmetro e mesmo assim funcionou. O que está aconteceu aqui?*/

const arraySomada = arrayNums.map(num => num * 10)
console.log(arraySomada)

/*No código acima, substituímos uma função externa e nomeada (a função multiplicaPorDez), por uma arrow function anônima que existe somente dentro do map(). Mas esta função anônima também tem um parâmetro, num, que representa cada um dos elementos do array que será iterado pelo map().

Por isso quando utilizamos uma função externa como callback de um map() não foi necessário passar um parâmetro. O map() executa automaticamente o bloco de código da função (nesse caso, num * 10) para cada elemento do array.*/