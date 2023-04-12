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

  
  