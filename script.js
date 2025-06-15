var inputValorQuilo = document.querySelector('#valorQuilo');
var inputQuantidadeProdutos = document.querySelector('#quantidadeProdutos');
var btCalcular = document.querySelector('#btCalcular');
var h3Resultado = document.querySelector('#h3Resultado');

function calcularQuilo() {
    var valor = Number(inputValorQuilo.value);
    var quantidade = Number(inputQuantidadeProdutos.value);

    if (valor <= 0 || quantidade <= 0) {
        h3Resultado.textContent = "Insira um valor válido e/ou positivo.";
        return;
    }

    var valorFinal = valor * quantidade;

    h3Resultado.textContent = "Valor a ser pago R$ " + valorFinal.toFixed(2);
}

btCalcular.onclick = function() {
    calcularQuilo();
}
