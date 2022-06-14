//Refrigerante
let quantidadeRefrigerante = parseInt(prompt("Qual a quantidade de refrigerante?"))
const valorUnitarioRefrigerante = parseFloat(prompt("Qual o valor unitário do refrigerante?"))

//Macarrão
let quantidadeMacarrao  = parseInt(prompt("Qual a quantidade de macarrão?"))
const valorUnitarioMacarrao = parseFloat(prompt("Qual o valor unitário do macarrão?"))

//Ervilha
let quantidadeErvilha = parseInt(prompt("Qual a quantidade de ervilha?"))
const valorUnitarioErvilha = parseFloat(prompt("Qual o valor unitário da ervilha?"))

//Arroz
let quantidadeArroz = parseInt(prompt("Qual a quantidade de arroz?"))
const valorUnitarioArroz = parseFloat(prompt("Qual o valor unitário do arroz?"))

//Feijão
let quantidadeFeijao = parseInt(prompt("Qual a quantidade de feijão?"))
const valorUnitarioFeijao = parseFloat(prompt("Qual o valor unitário do feijão?"))


//Vinho
let quantidadeVinho = parseInt(prompt("Qual a quantidade de vinho?"))
const valorUnitarioVinho = parseFloat(prompt("Qual o valor unitário do vinho?"))

let valorTotalRefrigerante = quantidadeRefrigerante * valorUnitarioRefrigerante
let valorTotalMacarrao = quantidadeRefrigerante * valorUnitarioRefrigerante
let valorTotalErvilha = quantidadeErvilha * valorUnitarioErvilha
let valorTotalArroz = quantidadeErvilha * valorUnitarioErvilha
let valorTotalFeijao = quantidadeFeijao * valorUnitarioFeijao
let valorTotalVinho = quantidadeVinho * valorUnitarioVinho

let valorCompra = valorTotalRefrigerante + valorTotalMacarrao + valorTotalErvilha + valorTotalArroz + valorTotalFeijao + valorTotalVinho

console.log (`O valor total da compra foi de R$${valorCompra}.`)
alert(`Valor total a ser pago: R$${valorCompra}`)

valorTotalMenosODoVinho = valorCompra - valorUnitarioVinho

if (valorCompra % 2 != 0) {
    console.log (`Eu e meu amigo deverá pagar metade do valor total da compra, incluindo o vinho, sendo assim, ambos pagarão um valor de R$ ${valorCompra / 2}`)
}else{
    console.log (`O amigo que perdeu a proposta pagará o valor do vinho mais a metade do restante da compra, que se totalizará R$${valorTotalMenosODoVinho / 2 + valorUnitarioVinho}. Dessa forma, eu não pagarei o vinho, apenas metade do restante da compra, que será R$${valorTotalMenosODoVinho / 2}`)
}



