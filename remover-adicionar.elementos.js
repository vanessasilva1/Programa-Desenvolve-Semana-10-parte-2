const listaChamada = ["Vanessa", "Ana", "Marta", "Maria", "Gabriela"];

//listaChamada.splice(2, 3, "Bia"); // onde começo, quantos elementos quero excluir e se quero algo para substituir
//splice altera o array original
listaChamada.splice(2, 0, "Beatriz"); // 2 - onde quero que o novo elemento entre 0 - tem que colocar e que elemento eu quero adicionar. Ele coloca o nome Beatriz antes de Marta que é elemento 2

console.log(listaChamada);
