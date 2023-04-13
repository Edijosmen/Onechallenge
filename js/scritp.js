const keys = new Map([
    ["e","enter"],
    ["i","imes"],
    ["a","ai"],
    ["o","ober"],
    ["u","ufat"],

]);
function EncrpReplace(text){
    for( var [key, value] of keys){
        text = text.replace(new RegExp(key, "g"), value);
      }
    return text;
}
function DescrpReplace(text){
    for( var [key, value] of keys){
        text = text.replace(new RegExp(value, "g"), key);
      }
    return text;
}

function Mostrar(texto){
    document.getElementById("no-date").style.display = "none";
    document.getElementById("date").style.display = "flex";
    let  p = document.getElementById("texto");
    p.innerHTML = texto
}
function Encriptar() {
    var input = document.querySelector("textarea").value;
    let texto = EncrpReplace(input)
    Mostrar(texto)
}

function Descencriptar() {
    var input = document.querySelector("textarea").value;
    let texto = DescrpReplace(input)
    Mostrar(texto);
}

function copiarTexto(){
    let input = document.getElementById("texto");
    navigator.clipboard.writeText(input.innerText)
    .then(function() {
      // Mostrar una notificación o realizar acciones adicionales
      console.log("Texto copiado al portapapeles: " + input.innerText);
    })
    .catch(function(err) {
      // Manejar errores en caso de que no se pueda copiar el texto
      console.error("Error al copiar el texto: ", err);
    })
    
}
  