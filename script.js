var calcular = document.getElementById('calcular')


function imc() {

    var nome = document.getElementById('nome').value
    var peso = document.getElementById('peso').value
    var altura = document.getElementById('altura').value
    var resultado = document.getElementById('resultado')

    if (nome.value !== '' && altura !== '' && peso !== '') {
        var valorImc = (peso / (altura * altura)).toFixed(2)

        let classificacao = ''
        if (valorImc < 18.5) {
            classificacao = 'abaixo do peso'
        } else if (valorImc <= 24.9) {
            classificacao = 'com peso normal'
        } else if (valorImc <= 29.9) {

            classificacao = 'com sobrepeso'

        } else if (valorImc <= 39.9) {
            classificacao = 'obeso'
        } else if (valorImc >= 40) {
            classificacao = 'com obesidade grave'
        }



        resultado.textContent = `Ola ${nome} seu imc é ${valorImc}  e voce esta  ${classificacao}`

    } else {
        resultado.textContent = 'favor preencher todos os campos!!!'
    }

}

calcular = addEventListener('click', imc)