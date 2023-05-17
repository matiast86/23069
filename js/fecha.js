calcularAnios = () => {

    let fechaDeMiCumple = obtenerCumple();

    if(!fechaDeMiCumple)
     return;
     
    let fechaSplitted = formatoFecha(fechaDeMiCumple);

    let fechaDeMiCumpleConvetida = convertirFecha(fechaSplitted);

    const edad =  calcularEdad(fechaDeMiCumpleConvetida);

    //si 


    mostrarResultado(edad);

}

calcularEdad = (fechaDelFormulario) => {
    debugger;
    // logica
    return new Date().getFullYear() - fechaDelFormulario.getFullYear();
}

obtenerCumple = () =>{
    const apuntadorAMiCumple = document.getElementById('miCumple');
    const fechaDeMiCumple = apuntadorAMiCumple.value;
    return fechaDeMiCumple;
}

formatoFecha = (fechaDeMiCumple) =>{
    const fechaSplitted = fechaDeMiCumple.split('-');
    console.log(fechaSplitted);
    return fechaSplitted;
}

convertirFecha = (fechaSplitted) =>{
    const fechaDeMiCumpleConvetida = new Date(fechaSplitted[0], Number(fechaSplitted[1])-1, fechaSplitted[2]);
    return fechaDeMiCumpleConvetida;
}

mostrarResultado = (fechaDeMiCumpleConvetida) =>{
    document.getElementById('resultado').innerHTML =fechaDeMiCumpleConvetida;
}

       //si edad   <=25             => plan1
    //si edad   > 25 && <= 35    => plan2 (>,<,>=,<=, !==)
    //si edad   > 35              => plan3 

    function calcularPlan() {
        let plan;
        if(edad <= 25) {
            plan = 'plan 1'
        }
        if(edad > 25 && edad <= 35) {
        plan = 'plan 2'
        }   
        if(edad > 35) {
            plan = 'plan 3'
        }
}