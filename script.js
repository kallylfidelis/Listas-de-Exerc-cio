var inputSaldo = document.querySelector('#saldo');
var btCalcular = document.querySelector('#btCalcular');
var h3Resultado = document.querySelector('#h3Resultado');

function calcularReajuste() {
    var saldo = Number(inputSaldo.value);

    if (saldo < 0) {
        h3Resultado.textContent = "Insira um valor válido e positivo.";
        return;
    }

    var reajuste = saldo * 0.01;
    var saldoFinal = saldo + reajuste;

    h3Resultado.textContent = "Saldo com reajuste: R$ " + saldoFinal.toFixed(2);
}

btCalcular.onclick = function() {
    calcularReajuste();
}
