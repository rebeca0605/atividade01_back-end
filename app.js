/***********************************************************************************************
 * Objetivo: Calcular os juros compostos de uma venda parcelada.
 * Autor: Rebeca Gomes.
 * Data: 05/08/2025
 * Versão: 1.0
 ************************************************************************************************/

const MESSAGE_ERROR = 'ERRO: Valor inválido! Digite apenas números.'
const MESSAGE_ERROR_EMPTY = 'ERRO: O campo não pode ser vazio.'

//Import do arquivo de calculo de juros
var calcJuros = require('./modulo/juros.js')

//import do arquivo de mensagem para o cliente
var mensagem = require('./modulo/juros.js')

//Import da biblioteca do readline
var readline = require('readline')

//Cria um objeto para criar uma interface de entrada de dados via terminal
var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

//Entrada de dados do nome do cliente
entradaDeDados.question('Seja bem-vindo a Decora fácil! Por favor, digite seu nome: ', function (nome) {
    let nomeCliente = String(nome).toUpperCase()

    if (nomeCliente == '') {
        console.log(MESSAGE_ERROR_EMPTY)
        entradaDeDados.close()

    } else {
        //Entrada de dados do nome do produto
        entradaDeDados.question('Digite o nome do produto: ', function (nome2) {
            let nomeProduto = String(nome2).toUpperCase()

            if (nomeProduto == '') {
                console.log(MESSAGE_ERROR_EMPTY)
                entradaDeDados.close()

            } else {
                //Entrada de dados do valor do produto
                entradaDeDados.question('Digite o valor do produto: ', function (valor1) {
                    let valorProduto = Number(valor1)

                    if (valorProduto == '' || Number(valorProduto) < 0) {
                        console.log(MESSAGE_ERROR)
                        entradaDeDados.close()

                    } else {
                        //Entrada de dados dos juros anuais
                        entradaDeDados.question('Digite o valor dos juros anuais: ', function (valor2) {
                            let jurosAnuais = Number(valor2)

                            if (jurosAnuais == '' || Number(jurosAnuais) < 0) {
                                console.log(MESSAGE_ERROR)
                                entradaDeDados.close()

                            } else {
                                //Entrada de dados dos juros são compostos por ano
                                entradaDeDados.question('Digite o número de vezes que os juros são compostos por ano: ', function (valor3) {
                                    let jurosCompostos = Number(valor3)

                                    if (jurosCompostos == '' || Number(jurosCompostos) < 0) {
                                        console.log(MESSAGE_ERROR)
                                        entradaDeDados.close()

                                    } else {
                                        //Entrada de dados dos juros são compostos por ano
                                        entradaDeDados.question('Digite a quantidade de anos do parcelamento: ', function (valor4) {
                                            let anosParcelados = Number(valor4)

                                            if (anosParcelados == '' || Number(anosParcelados) < 0) {
                                                console.log(MESSAGE_ERROR)
                                                entradaDeDados.close()
                                            } else {
                                                let montanteFinal = calcJuros.calculoDeJuros(valorProduto, jurosAnuais, jurosCompostos, anosParcelados)

                                                let mensagemFim = mensagem.mensagemFinal(nomeCliente, nomeProduto, valor1, valor3, montanteFinal)

                                                entradaDeDados.close()
                                            }
                                        })//Fecha o valor de anos parcelados
                                    }
                                })//Fecha o valor dos juros compostos
                            }
                        })//Fecha o valor dos juros anuais
                    }
                })//Fecha o valor do produto
            }
        })//Fecha o nome do produto
    }
})//Fecha o nome do cliente