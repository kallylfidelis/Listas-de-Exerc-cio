var valorPago = document.querySelector ('#valorPago')
var valorProduto = document.querySelector ('#valorProduto')
var btVerificar = document.querySelector ('#btVerificar')
var h3Resultado = document.querySelector ('#h3Resultado')

function VerificarTroco() {
    var pago = Number (valorPago.value);
    var preco = Number (valorProduto.value);
    var troco = Number (valorPago.value);

    if (pago < preco) {
        h3Resultado.textContent = "Valor pago insuficiente para comprar o produto."
    }


    var trocoCalculado = pago - preco;

    if (troco === trocoCalculado) {
        h3Resultado.textContent = `Troco correto: R$ ${trocoCalculado.toFixed(2)}`;
    } else if (troco < trocoCalculado) {
        h3Resultado.textContent = `Troco informado abaixo do correto. Troco correto: R$ ${trocoCalculado.toFixed(2)}`;
    } else {
        h3Resultado.textContent = `Troco informado acima do correto. Troco correto: R$ ${trocoCalculado.toFixed(2)}`;
    }
}

btVerificar.onclick = function() {
    VerificarTroco()
}

