// alert('hola mundo!!!');
//esto es un comentario!!! de una sola linea

/*
 es 
 un comentario
 de 
 varias 
 lineas
*/

/*const valor1 = parseInt(prompt('Ingrese valor1'));
const valor2 = 20;
const resultado = valor1 + valor2;
console.log(resultado);*/


//asi se crea una funcion
//no tiene parametros de entrada
function sumar() {

    //obtener la referencia al input con id="valor1"
    //usando el D.O.M
    const apuntadorAValor1 = document.getElementById("valor1");
    const apuntadorAValor2 = document.getElementById("valor2");

    //ahora obtengo el valor de cada apuntados
    //y lo guarda en una  variable
    const v1 = toNumber(apuntadorAValor1.value);
    const v2 = toNumber(apuntadorAValor2.value);

    //muestro por consola los valores
    console.log(apuntadorAValor1);
    console.log(apuntadorAValor2);
    console.log(apuntadorAValor1, v1);
    console.log(apuntadorAValor2, v2);
    
    //update div con la suma de v1+v2

    const suma = v1 + v2;

    const apuntadorAlResultado = document.getElementById('resultado');
    //en los div no existe value (como el input) existe "innerHTML"
    apuntadorAlResultado.innerHTML = suma;
}

function toNumber(valor) {
    //lógica de la función
    const valorNumerico = Number(valor);

    return valorNumerico;
}

function sumarv2() {
    const suma = toNumber(document.getElementById('valor1').value) + toNumber(document.getElementById('valor2').value);
    document.getElementById('resultado').innerHTML = suma;
}

    //asigno evento via JS
    const apuntadorAlBotonSuma2 = document.getElementById('btnSumador');
    //agrego un evento 
    apuntadorAlBotonSuma2.addEventListener('click',sumarv2);