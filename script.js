var inputValor1 = document.querySelector('#inputValor1');
var inputValor2 = document.querySelector('#inputValor2');
var btCalcular = document.querySelector('#btCalcular');
var h3Resultado = document.querySelector('#h3Resultado');

function calcularMaiorValor() {
    var valor1 = Number(inputValor1.value);
    var valor2 = Number(inputValor2.value);
    if (isNaN(valor1) || isNaN(valor2)) {
        h3Resultado.textContent = "Por favor, insira valores válidos.";
        return;
    }
    var maiorValor = valor1 > valor2 ? valor1 : valor2;
    h3Resultado.textContent = "O maior valor é: " + maiorValor;
}
btCalcular.onclick = function() {
    calcularMaiorValor();
}
