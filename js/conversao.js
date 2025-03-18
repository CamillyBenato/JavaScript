function conversao(){
    let n1 = parseFloat(document.getElementById("num1").value);
    
    let conta = (n1 * 1.8) + 32;
    document.getElementById("resultado").textContent = "Resultado: " + conta;
}