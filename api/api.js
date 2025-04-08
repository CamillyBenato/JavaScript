//Função para consultar o CEP
function consultarCEP(){
    const cep = document.getElementById("cep").value;

    if(!cep){
        alert("Por favor, Insira um CEP");
        return;
    }

    //Fazendo a requisição para a API viaCEP
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(response => response.json()) //Converte diretamente para JSON
    .then(data => {
        if(data.erro){
            throw new Error ("CEP Inválido");
        }

        //Atualizando os elementos HTML com os dados retornados
        document.getElementById("logradouro").textContent = data.logradouro;
        document.getElementById("bairro").textContent = data.bairro;
        document.getElementById("cidade").textContent = data.localidade;
        document.getElementById("estado").textContent = data.uf;
        document.getElementById("error").textContent = "";
    })

    .catch(error => {
        //Exibindo mensagem de erro caso o CEP seja inválido ou ocorra
        document.getElementById("error").textContent = "Error: " + error.message;
        document.getElementById("logradouro").textContent = "";
        document.getElementById("bairro").textContent = "";
        document.getElementById("cidade").textContent = "";
        document.getElementById("estado").textContent = "";
    })
}
