const nome = ["Ana", "Maria", "Rodrigo"];
const notas = [10, 3, 6];

let juncao = [nome, notas];

const exibirLista = (nomeDoAluno) => { // arrow function
    if(juncao[0].includes(nomeDoAluno)) { // includes - percorre o array para achar se tem. Faz uma busca pelo valor, no caso maria. Retorna um V ou F
        let indice = juncao[0].indexOf(nomeDoAluno); // retorna o indice 
        return `${juncao[0][indice]}, sua é ${juncao[1][indice]}`
    } else {
        return `Nome não encontrado na lista`
    }
}

console.log(exibirLista('Maria'))