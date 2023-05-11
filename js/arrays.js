//array vacio
const edificioVacio = []

//array inicializado con valores
const edificio = ['matias', 'veronica', 'brisabed']

//acceder a un elemento del array
console.log('0', edificio[0])

//agregar elemntos a un array
edificio.push('carlos')
edificio.push('jose')

//recorrer
//for estructura de iteración
console.log('recorriendo el edificio con for...')
for(let persona of edificio) {
    console.log(persona)
}

//busca un elemento en el array
const jose = edificio.find(nombre => nombre === 'jose'); //voy a centrarme en QUE quiero buscar

//if
if(jose !== undefined) { //valor true or false
    console.log('jose vive en el edificio', jose)
} else {
    console.log('jose NO vive en el edificio', jose)
}