const pessoa = {
    nome : "bruno",
    idade : 17
}
const {nome, idade} = pessoa //Tira as variaveis do obj e criam elas no programa
//Não estão mais associadas ao obj, e da para trocar os nomes também
const pessoa2 = {
    nome: "bruno lindo",
    idade: 20,
    logradouro : {
        rua : "kkkkkk"
    }
}
const { nome: no, idade:n1} = pessoa2

//Pessoa 1
console.log(nome,idade)

//Pessoa 2
console.log(no, n1)

//Acessar elementos dentro de outros obj
const { logradouro: { rua } } = pessoa       
console.log(rua)