const nomes = ["Ana", "Maria", "Ju"];
nomes.forEach(imprimiNome); //imprimiNota[i]. O segundo parâmetro de forEach é o indice, mas é opcional

function imprimiNome(nome) { // bom criar fora se tiver vários arrays para não precisar ficar repetindo código
    console.log(nome);
}