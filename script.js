document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault(); 
    const campoA = parseFloat(document.getElementById("campoA").value);
    const campoB = parseFloat(document.getElementById("campoB").value);

    if (campoB > campoA) {
        alert("Sucesso: O campo B é maior que A");
    } else {
        alert("Erro: O campo B é menor que A.");
    }
});