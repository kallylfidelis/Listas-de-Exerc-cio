var inputNum1 = document.querySelector ("#inputNum1")
var btCalcular = document.querySelector ("#btCalcular")
var h3Resultado = document.querySelector ("#h3Resultado")

function numeroImpar () {
    var impar = Number (inputNum1.value)


    if (impar % 2 !== 0) {
        h3Resultado.textContent = "O número " + impar + " é ímpar.";
    } else {
        h3Resultado.textContent = "O número " + impar + " não é ímpar.";
    }
}
btCalcular.onclick = function() {
    numeroImpar()
}