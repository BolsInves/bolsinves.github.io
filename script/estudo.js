function salvar() {
    if (typeof(Storage) !== "undefined") {
        // Store
        localStorage.setItem("text", document.getElementById("anotacaoResult").value);
        alert("Sua anotação foi salva!");
    } else {
        document.getElementById("anotacaoResult").innerHTML = "Seu navegador não suporta anotações!";
    }
}

document.getElementById("anotacaoResult").innerHTML = localStorage.getItem("text");