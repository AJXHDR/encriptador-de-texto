function limpiarTexto() {
    // Convierte el texto a minúsculas y elimina caracteres especiales
    var input = document.getElementById('inputTexto');
    input.value = input.value.toLowerCase().replace(/[^a-z\s]/g, '');
}

function encriptarTexto() {
    var texto = document.getElementById('inputTexto').value;
    var textoEncriptado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    document.getElementById('mostrarTexto').innerText = textoEncriptado;
}

function desencriptarTexto() {
    var textoEncriptado = document.getElementById('inputTexto').value;
    var textoOriginal = textoEncriptado
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    document.getElementById('mostrarTexto').innerText = textoOriginal;
}

function copiarTexto() {
    // Obtiene el texto a copiar
    var textoACopiar = document.getElementById('mostrarTexto').innerText;

    // Usa la Clipboard API para copiar el texto al portapapeles
    navigator.clipboard.writeText(textoACopiar)
        .then(() => {
            alert('Texto copiado al portapapeles');
        })
        .catch(err => {
            console.error('Error al copiar el texto: ', err);
        });
}