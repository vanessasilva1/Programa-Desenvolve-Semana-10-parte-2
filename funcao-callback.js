const notas = [10, 20, 30];

let soma = 0;

//callback - função que chama outra função
//notas.forEach(nota => {
//    soma += nota;
//})

notas.forEach(function(nota) {
            // não precisa do ´[i]
            //nota[i] // forEach já entende que cada nota é um indice 
     soma += nota;
})

let media = soma / notas.length;

console.log(media);