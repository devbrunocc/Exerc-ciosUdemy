let a;
console.log(a)
let valor = null; // ausência de valor
//Null geralmente usado para variáveis tipo referência
console.log(valor)
let produtos = {
    preco: 6.75,
    nome: null,
    nacionalidade: undefined
}
console.log(produtos.nome)
delete produtos.nacionalidade
console.log(produtos)
console.log(!!produtos)//Convertendo para boolean
const prod = {
    preco: null
}
console.log(!!prod.preco)