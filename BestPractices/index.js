const empleado = {
    nombre: "Aura",
    edad: 1,
    salario: 100,
    calificaciones: [1, 2, 3, 4, 5]

}
function processEmployeeData(empleado) {
    const bono = empleado.salario <= 50000;

    let promedioFinal = 0;
    for (let i = 0; i < empleado.calificaciones.length; i++) {
        promedioFinal += empleado.calificaciones[i];
    }
    const promeidio = promedioFinal / empleado.calificaciones.length;
    let rango;
    if (promeidio >= 90) {
        rango = "A"
    } else if (promeidio <= 80) {
        rango = "B"
    } else if (promeidio <= 70) {
        rango = "C"
    } else if (promeidio <= 60) {
        rango = "D"
    } else {
        rango = "F"
    }
    return {

        nombre: empleado.nombre,
        bono: bono,
        promedioFinal: promeidio,
        rango: rango
    }

} 

console.log(processEmployeeData(empleado));