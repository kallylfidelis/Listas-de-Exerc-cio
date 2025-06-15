let inputNum1 = document.querySelector("#inputNum1");
let inputNum2 = document.querySelector("#inputNum2");
let inputNum3 = document.querySelector("#inputNum3");
let btCalcular = document.querySelector("#btCalcular");
let h3Resultado = document.querySelector("#h3Resultado");

function calcularMedias() {
    let num1 = Number(inputNum1.value);
    let num2 = Number(inputNum2.value);
    let num3 = Number(inputNum3.value);

    // Cálculo da média aritmética
    let mediaAritmetica = (num1 + num2 + num3) / 3;

    // Cálculo da média ponderada com pesos 3, 2 e 5
    let somaValoresPeso = (num1 * 3) + (num2 * 2) + (num3 * 5);
    let somaPesos = 3 + 2 + 5;
    let mediaPonderada = somaValoresPeso / somaPesos;

    // Soma das duas médias
    let somaMedias = mediaAritmetica + mediaPonderada;

    // Média das médias
    let mediaDasMedias = somaMedias / 2;

    // Exibir resultados
    h3Resultado.textContent = "Média Aritmética: " + mediaAritmetica.toFixed(2) + 
                               " | Média Ponderada: " + mediaPonderada.toFixed(2) + 
                               " | Soma das Médias: " + somaMedias.toFixed(2) + 
                               " | Média das Médias: " + mediaDasMedias.toFixed(2);
}

btCalcular.onclick = function() {
    calcularMedias();
}
