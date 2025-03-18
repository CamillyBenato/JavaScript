function imc(){
    let n1 = parseFloat(document.getElementById("peso").value);
    let n2 = parseFloat(document.getElementById("altura").value);
    let conta = n1 / n2 ** 2;
    document.getElementById("resultado").textContent = "Resultado: " + conta;
}