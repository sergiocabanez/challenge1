/*e-- enter
o-- ober
i-- imes
a- ai 
u-- ufat */

function encriptar (){
    var texto = document.getElementById("input-texto").value.toLowerCase;
    var txtcifrado = texto.replace(/e/igm,"enter");
    var txtcifrado = txtcifrado.replace(/o/igm,"ober");
    var txtcifrado = txtcifrado.replace(/i/igm,"imes");
    var txtcifrado = txtcifrado.replace(/a/igm,"ai");
    var txtcifrado = txtcifrado.replace(/u/igm,"ufat");

document.getElementById("imgDer").style.display = none;
document.getElementById("texto").style.display = none;

document.getElementById("texto2").innerHTML = txtcifrado;
}