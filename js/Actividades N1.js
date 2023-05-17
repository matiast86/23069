//Actividad 1
const nombre = "Matias Tailler";
const comision = '23069';
const hobbies = "mirar series y nadar"

console.log("Me llamo" + " " + nombre + "." + " " + "Estoy en la comision" + " " + comision + "." + " " + "Me gusta" + " " + hobbies + ".");

//Actividad 2
function fraseAPedido () {
    const frase = prompt("Ingrese una frase")
    console.log(frase)
}

//Actividad 4
function imprimirNombrePorConsola() { 
    let nombre = document.getElementById('nombreCompleto');

    console.log(nombre)
}

//Actividad 5
obtenerNacimiento = () =>{
    const apuntadorANacimiento = document.getElementById('birthdate');
    const fechaDeNacimiento = apuntadorANacimiento.value;
    return fechaDeNacimiento;
}

formatoFecha = (fechaDeNacimiento) =>{
    const fechaSplitted = fechaDeNacimiento.split('-');
    console.log(fechaSplitted);
    return fechaSplitted;
}

convertirFecha = (fechaSplitted) =>{
    const fechaDeNacimientoConvetida = new Date(fechaSplitted[0], Number(fechaSplitted[1])-1, fechaSplitted[2]);
    return fechaDeNacimientoConvetida;
}

mostrarResultado = (fechaDeNacimientoConvetida) =>{
    document.getElementById('resultado').innerHTML = fechaDeNacimientoConvetida;
}

//Actividad 6
function indiceMasaCorporal() {
    const pesoPersona = document.getElementById('peso').value;
    const alturaPersona = document.getElementById('altura').value;
    const pesoObtenido = Number(pesoPersona)
    const alturaObtenida = Number(alturaPersona)
    const CalculoImc = pesoObtenido / (alturaObtenida)^2;

    const apuntadorAlImc = document.getElementById('imc');
    apuntadorAlImc.innerHTML = CalculoImc;
}

let cantidadDeVentanas = Number(4)

console.log("Cantidad de ventanas en casa:" + " " + cantidadDeVentanas)

let = soyHumano = true

console.log("Soy humano:" + " " + soyHumano)

let miGustoDePizza = "jamón y huevo"

console.log("Mi pizza favorita es la de" + " " + miGustoDePizza)

//Actividad


