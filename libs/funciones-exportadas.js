
// const fetch = require('node-fetch');
const retrasar = milisegundos => new Promise(resolve => setTimeout(resolve, milisegundos));

// Función que retorna los datos de provincias
export const obtenerPcias = async () => {
    try {
        await retrasar(1800);
        const consulta = await fetch("https://apis.datos.gob.ar/georef/api/provincias");
        const consultaToJson = await consulta.json().then(resp => resp.provincias);
        return consultaToJson;
    } catch (error) {
        console.log(error);
        // return alert('Error al consultar los datos')
    }
}



export const obtenerDptos = async () => {

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
}


export const obtenerLocalidades = async () => {

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
}


/* module.exports = {
    retrasar,
    obtenerPcias,
    obtenerDptos,
    obtenerLocalidades
} */









