 import validator from './validator.js'
 const formulario = document.getElementById("formulario");
    
formulario.addEventListener("submit", function (evento) {
    evento.preventDefault()

    const nroTarjeta = document.getElementById("tarjeta");

    const esTarjetaValida = validator.isValid(nroTarjeta.value)

    if (esTarjetaValida) {
        alert("Si es tarjeta valida")
    } else {
        alert("No es tarjeta valida")
    }
    nroTarjeta.value = validator.maskify(nroTarjeta.value)
})