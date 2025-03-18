function parimpar(){
    let n1 = parseFloat(document.getElementById("num1").value);

    if(n1 % 2 == 0){
        resultado.textContent = "Par";
    } else{
        resultado.textContent = "Ímpar";
    }
}
