
//*1-CONSIGNA

// const retrasar = milisegundos => new Promise(resolve => setTimeout(resolve, milisegundos));

// // Función que retorna los datos de provincias
// function obtenerPcias() {
//     await retrasar(1800);

//     const consulta = fetch('');
// }

//*1-SOLUCIÓN



const retrasar = milisegundos => new Promise(resolve => setTimeout(resolve, milisegundos));

// Función que retorna los datos de provincias
async function obtenerPcias() {

    await retrasar(1800);
    const consulta = fetch('https://datosgobar.github.io/georef-ar-api/');
}

obtenerPcias()


// Función que retorna los datos de departamentos
function obtenerDptos() {
    await retrasar(1391);

    const consulta = fetch('');
}













