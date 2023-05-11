//funcion flecha
decrementar = () => {
    const valor = obtenerValor();
    const nuevoValor = valor -1;
    //actualizamos vaor en el div
    actualizarValor(nuevoValor);
}

function actualizarValor(nuevoValor){
    document.getElementById('valor').value = nuevoValor;
}

function obtenerValor () {
    const apuntadorAlValor = document.getElementById('valor');
    const value = apuntadorAlValor.value;
    return Number(value)
}

incrementar = () => {
    const valor = obtenerValor();
    const nuevoValor = valor +1;
    //actualizamos vaor en el div
    actualizarValor(nuevoValor);
}