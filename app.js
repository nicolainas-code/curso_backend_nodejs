const readlineSync = require('readline-sync');
const { mostrarListaEstudiantes } = require('./listaEstudiantes');

const registrarEstudiantes = () => {
console.log("Registro de alumnos")

let cantidadEstudiantes = readlineSync.question("ingrese cantidad de estudiantes a registrar : ")
console.log("cantidad de estudiantes:" + cantidadEstudiantes)

let estudiantes = []

for(let i=0; i<cantidadEstudiantes;i++){
    let nombreEstudiante = readlineSync.question("ingrese nombre del estudiante" + i + " :")
    let edad = readlineSync.question("ingrese la edad de " + nombreEstudiante + " :");
    console.log("nombre : " + nombreEstudiante);
    console.log("edad : " + edad)

    let estudiante  = {
        nombre : nombreEstudiante,
        edad : edad
    }
    estudiantes.push(estudiante)
}
return estudiantes
}

let estudiantesRegistrados = registrarEstudiantes();

mostrarListaEstudiantes(estudiantesRegistrados)

