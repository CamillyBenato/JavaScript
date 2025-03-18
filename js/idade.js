function idade(){
    let n1 = parseFloat(document.getElementById("idade").value);

    if(n1 <= 2){
        resultado.innerHTML = "Bebê 👶🏽";
    }if(n1 >= 3 && n1 <= 12){
        resultado.innerHTML = "Criança 🎈";
    }if(n1 >= 13 && n1 <= 18){
        resultado.innerHTML = "Adolescente 📱";
    }if(n1 >= 19 && n1 <= 59){
        resultado.innerHTML = "Adulto 🎓";
    }if(n1 >= 59){
        resultado.innerHTML = "Melhor idade 💅";
    }
}
