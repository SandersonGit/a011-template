// Aula objetos

// criando objetos

const estudante = {
    nome: "Sanderson",
    sobrenome: "Luiz Celestino",
    matricula: 4520955,
    notasDoSemestre: [10, 8, 9]

}
console.log(estudante);

estudante.modulo = "git e terminal"

console.log(estudante);

console.log("nome", estudante.nome);
console.log("segunda nota", estudante.notasDoSemestre[1]);
console.log("Módulo", estudante["modulo"]);

const estudanteCopia = {...estudante}
estudanteCopia.nome = "Astrodev"
estudanteCopia.notasDoSemestre = [...estudante.notasDoSemestre, 9]
estudanteCopia.modulo = "Introdução Web"
console.log(estudanteCopia);

const estudanteLabenu = []
estudanteLabenu.push(estudante, estudanteCopia)

console.log(estudanteLabenu);

const carrinho = {
    nome:"Sanderson",
    formaDePagamento:"dinheiro",
    endereço: "Rua Augusta",
}



carrinho.compras = [{
    nome: "Leite",
    unidade: 3,
    preço: 2.50,
}
,
{
    nome: "Pão",
    unidade: 10,
    preço: 1.00
        
}
,    
{
    nome: "Laranja",
    unidade: 10,
    preço: 1

}]

console.log(carrinho.compras);

const carrinhoPresente = {...carrinho}
console.log(carrinhoPresente);

carrinhoPresente.nome = "Melanie"
carrinhoPresente.formaDePagamento = "cartão presente"

console.log(carrinhoPresente);

console.log(carrinho.compras.length)
console.log(carrinho.compras[2]);








