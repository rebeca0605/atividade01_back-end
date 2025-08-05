/***********************************************************************************************
 * Objetivo: Calcular os juros compostos de uma venda parcelada.
 * Autor: Rebeca Gomes.
 * Data: 05/08/2025
 * Versão: 1.0
 ************************************************************************************************/

const MESSAGE_ERROR_EMPTY = 'ERRO: O campo não pode ser vazio.'

//Import da biblioteca do readline
var readline = require('readline')

//Cria um objeto para criar uma interface de entrada de dados via terminal
var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

//Entrada de dados do nome do cliente
entradaDeDados.question('Digite o nome do cliente: ', function (nome) {
    let nomeCliente = String(nome).toUpperCase()

    if (nomeCliente == '') {
        console.log(MESSAGE_ERROR_EMPTY)
        entradaDeDados.close()
    } else {

        //Entrada de dados do valor do produto
        entradaDeDados.question('Digite o valor do produto: ', function (capitalInicial) {
            let valorProduto = capitalInicial

            if (valorProduto == ''){
                console.log(MESSAGE_ERROR_EMPTY)
                entradaDeDados.close()
            } else {

                entradaDeDados.question('Digite o valor da taxa de juros: ' function())
            }

        })//Fecha o valor do produto
    }
})//Fecha o nome do cliente