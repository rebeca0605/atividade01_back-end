/************************************************************************************************************
 * Objetivo: Arquivo responsável pelo processamento de cálculos de juros compostos.
 * Autor: Rebeca Gomes
 * Data: 30/07/2025
 * Versão: 1.0
 ************************************************************************************************************/

//Função para realizar cálculo de juros
function calculoDeJuros(valor1, valor2, valor3, valor4, montanteFinal) {
    let valorProduto = valor1
    let jurosAnuais = valor2
    let jurosCompostos = valor3
    let anosParcelados = valor4
    let montanteF = montanteFinal

    montanteF = valorProduto * Math.pow((1 + Number(jurosAnuais/100) / Number(jurosCompostos)), Number(jurosCompostos) * Number(anosParcelados));

    return montanteF.toFixed(1)
}

function mensagemFinal(nomeCliente, nomeProduto, valor1, valor3, montanteFinal){
    console.log('******************* Decora Fácil *******************')
    console.log('')
    console.log(`Muito obrigado por realizar a sua compra conosco Sr(a) ${nomeCliente}.`)
    console.log(`A compra do produto ${nomeProduto}, tem um valor de: ${valor1}.`)
    console.log(`A sua compra será parcelada em ${valor3} vezes e o Sr(a) pagará: ${montanteFinal}`)
    console.log('Muito obrigado por escolher a Decora Fácil.')
    console.log('')
    console.log('****************************************************')

    return mensagemFinal
}

//let montanteF = calculoDeJuros('300', '8', '6', '1')
//console.log(montanteF)
//console.log(mensagemFinal)

module.exports ={
    calculoDeJuros, 
    mensagemFinal
}