const textArea = document.querySelector(".texto");
const mensaje = document.querySelector(".areaencriptado");
const mensajeen =document.querySelector(".textomensaje")
const imgBuscando = document.getElementById("muñeco");
const msgNoHayTexto = document.querySelector(".msg");
const aparece =document.querySelector(".botoncopiar")

/*La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"*/

function encriptarf(stringEncriptado){
    let matrizcodigo =[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase()

    for(i=0; i < matrizcodigo.length; i++){
        if(stringEncriptado.includes(matrizcodigo[i][0])){
            stringEncriptado=stringEncriptado.replaceAll(matrizcodigo[i][0], matrizcodigo[i][1])
        }
    } 
    return stringEncriptado
}
aparece.style.visibility="hidden"

function btnencriptar(){
    const textoEncriptado = encriptarf(textArea.value)
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.background = "none";
    msgNoHayTexto.hidden = true;
    // msgNoHayTexto.style.visibility= "hidden";  
    mensaje.value = textoEncriptado;
    aparece.style.visibility = "visible";
}

function desencriptar(stringDesencriptado){
    let matrizcodigo =[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase()

    for(i=0; i < matrizcodigo.length; i++){
        if(stringDesencriptado.includes(matrizcodigo[i][1])){
            stringDesencriptado=stringDesencriptado.replaceAll(matrizcodigo[i][1], matrizcodigo[i][0])
        }
    } 
    return stringDesencriptado
}

function btndesencriptar(){
    const textoDesencriptado = desencriptar(textArea.value)
    mensaje.value = textoDesencriptado
    textArea.value = "";
}

function btncopiar(){
    var origen = document.getElementById('areaencriptado');
    var destino = document.getElementById('texto');
    var copyFrom = document.createElement("textarea");
    copyFrom.textContent = origen.value;
    var body = document.getElementsByTagName('body')[0];
    body.appendChild(copyFrom);
    copyFrom.select();
    document.execCommand('copy');
    body.removeChild(copyFrom);
    destino.focus();
    document.execCommand('paste');
}
