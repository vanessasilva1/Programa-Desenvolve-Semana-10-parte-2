              // 0                  // 2
const nome = ["Vanessa", "Allana", "Carmem", "Bruna", "Carlos", "Izaura"];
const sala1 = nome.slice(0, nome.length / 2); // slice corta nosso array, no caso tem que passar onde começar e onde parar.
const sala2 = nome.slice(nome.length / 2); /// não precisa passar ponde termina, pq ele automaticamente entende q é até o final

console.log(`Os alunos da sala é um são ${sala1}, enquanto os da sala 2 são ${sala2}`)