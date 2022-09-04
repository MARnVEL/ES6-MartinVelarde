
//*1-CONSIGNA

// const retrasar = milisegundos => new Promise(resolve => setTimeout(resolve, milisegundos));

// // Función que retorna los datos de provincias
// function obtenerPcias() {
//     await retrasar(1800);

//     const consulta = fetch('');
// }

//*1-SOLUCIÓN

/* 

const retrasar = milisegundos => new Promise(resolve => setTimeout(resolve, milisegundos));

// Función que retorna los datos de provincias
const obtenerPcias = async () => {
    try {
        await retrasar(1800);
        const consulta = await fetch("https://apis.datos.gob.ar/georef/api/provincias");
        const consultaToJson = await consulta.json().then(resp => resp.provincias);
        return consultaToJson;
    } catch (error) {
        console.log(error);
        // return alert('Error al consultar los datos')
    }
} */
// obtenerPcias()
// console.log(obtenerPcias())
// obtenerPcias()
//     .then((consulta) => consulta.json())
//     .then(json => console.log(josn))


    // .then(consulta => consulta.json())
    // .then(consultaJson => console.log(consultaJson))
    // .catch(err => console.log(err))

/* 
//! Otro ejemplo sacado de clases del profe Ale
// Implementación de una función asíncrona para pedir datos.
 const pedirDatos = async () => {
        try {
            const respuesta = await fetch('https://jsonplaceholder.typicode.com/photos')
            const datosToJson = await respuesta.json();
            console.log(datosToJson);
        } catch (error) {
            console.log(error)
            return alert('Error al consultar los datos')
        }
} */

//*2-CONSIGNA
// // Función que retorna los datos de departamentos
// function obtenerDptos() {
//     await retrasar(1391);

//     const consulta = fetch('');
// }

//*2-SOLUCIÓN
/* 
const obtenerDptos = async () => {

    try {
        await retrasar(1391);
        const consulta = await fetch("https://apis.datos.gob.ar/georef/api/departamentos?max=529");
        const consultaToJson = await consulta.json().then(resp => resp.departamentos);
        return consultaToJson;
    } catch (error) {
        console.log(error);
        // return alert('Error al consultar los datos')
    }
//     const consulta = fetch('');
} */

// obtenerDptos()

//*3-CONSIGNA
// // Función que retorna los datos de localidades
// function obtenerLocalidades() {
//     await retrasar(900);

//     const consulta = fetch('');
// }

//*3-SOLUCIÓN

/* const obtenerLocalidades = async () => {

    try {
        await retrasar(900);
        const consulta = await fetch("https://apis.datos.gob.ar/georef/api/localidades?max=4142");
        const consultaToJson = await consulta.json().then(resp=>resp.localidades);
        return consultaToJson;
    } catch (error) {
        console.log(error);
        // return alert('Error al consultar los datos')
    }
//     const consulta = fetch('');
} */

// obtenerLocalidades();

//*4-CONSIGNAS:

// // Funcion para obtener todos los datos
// function consultarDatos() {
//     const provincias = obtenerPcias();
//     const dptos = obtenerDptos();
//     const localidades = obtenerLocalidades();

//     console.log(provincias);
//     console.log(dptos);
//     console.log(localidades);
// }

// consultarDatos();

//*4-SOLUCIONES



/* 
const consultarDatos = async () => {
    const provincias = await obtenerPcias();
    const dtos = await obtenerDptos();
    const localidades = await obtenerLocalidades();

    console.log(provincias);
    console.log(dtos);
    console.log(localidades);
}


consultarDatos(); */


//*7-CONSIGNA:
//7. Utilizar la palabra reservada **export** para exportar las funciones y
// que puedan ser utilizadas desde el archivo __app.js__. 
//Pueden exportarlas una por una o como un solo objeto.

//*7-SOLUCIÓN

const misFunciones = require("./libs/funciones-exportadas.js");

const consultarDatos = async () => {
    const provincias = await misFunciones.obtenerPcias();
    const dtos = await misFunciones.obtenerDptos();
    const localidades = await misFunciones.obtenerLocalidades();

    console.log(provincias);
    console.log(dtos);
    console.log(localidades);
}
consultarDatos();


//*otra forma:
/* import { obtenerPcias, obtenerDptos, obtenerLocalidades } from './libs/funciones-exportadas.js';

const consultarDatos = async () => {
    const provincias = await obtenerPcias();
    const dtos = await obtenerDptos();
    const localidades = await obtenerLocalidades();

    console.log(provincias);
    console.log(dtos);
    console.log(localidades);
}
consultarDatos();
*/









