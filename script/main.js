var textInput = document.querySelector("#input-texo")
var output = document.querySelector("#output")

function criptografar(){
    var texto = textInput.value;

    var resultCripto = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai")
    .replace(/o/g, "ober").replace(/u/g, "ufat");

    document.getElementById('output').innerHTML = 'textarea readonly id=m"input-texto">'+resultCripto
    '<textarea>' + '<button class="ntn-copiar" id="copiar" onclick=copiar()">copiar</button'
}

function descriptografar(){
    var texto = textInput.value;

    var resultDescriptoripto = texto.replace(/enter/g, "e").replace
}