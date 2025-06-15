var inputValor1 = document.querySelector("#inputValor1")
var inputValor2 = document.querySelector("#inputValor2")
var inputValor3 = document.querySelector("#inputValor3")
var inputValor1 = document.querySelector("#inputValor3")
var inputValor1 = document.querySelector("#btCalcular")
var inputValor1 = document.querySelector("#h3Resultado")


function calcularMaiorValor (){
    var valor1 = Number (inputValor1.value)
    var valor2 = Number (inputValor2.value)
    var valor3 = Number (inputValor3.value)
    var valor4 = Number (inputValor4.value)

    var maiorValor = valor1 > valor2 > valor3 > valor4 ? valor1 : valor3 
    h3Resultado.textContent = "seu maior valor é: " + maiorValor
}

btCalcular.onclick = function() {
    calcularMaiorValor()
}