var btnGreet = document.getElementById("btnSaludo")
var txtName = document.getElementById("txtNombre")
var txtGreet = document.getElementById("txtSaludo")

var lista =[
    "Hello",
    "Bonjour",
    "Hallo",
    "Ciao",
    "Ola",
    "Namaste",
    "Aloha",
    "Konnlichiwa",
    "Kerhaba"
]
function Saludar(){
    if(txtName.value == "") {
        alert("Error, ingresa un Nombre.")
        txtGreet.innerHTML=""
    }else{
        var Nombre = txtName.value
        var Numero = Math.floor(Math.random()*lista.length)
        var Saludo = lista[Numero] +", " + Nombre
        txtGreet.innerHTML = Saludo
        }
}
