/* 
//* Promesa almacenada en una constante
const promesa = new Promise((resolve, reject)=>{
    if( 11 === 11){
        resolve('Los valores son iguales');
    } else {
        reject('Los valores son distintos')
    }
});
promesa
.then(resp => console.log(resp))
.catch(err => console.log(err)) */

//*OTRA FORMA (con función):
/* 
const promesa1 = () => {
    return new Promise((resolve, reject) => {
    if( 11 === 11) resolve('Los valores son iguales');
    else reject('Los valores son distintos');
    } )
};
console.log(promesa1());
promesa1()
.then(res => console.log(res))
.catch(err => console.log(err)) */


/* 
//!2 CONSIGNA: Promesa dentro en una función.
function promesaDos(provincia){

    const promesa = new Promise( (resolve, reject)=> {
    
            if('Formosa' === provincia){
                resolve('Usted está ubicado en Formosa');
            } else {
                reject('Error al realizar la consulta')
            }

    });

    return promesa;
}
promesaDos() */

//!2 SOLUCIÓN:
// Promesa dentro en una función.
/* 
function promesaDos(provincia){

    return new Promise( (resolve, reject) => {

            if('Formosa' === provincia){
                resolve('Usted está ubicado en Formosa');
            } else {
                reject('Error al realizar la consulta');
            }
    } );
}

let provincia = "Formosa"
promesaDos(provincia)
.then(resp => console.log(resp))
.catch(err => console.log(err))
 

//*Con fucniones flecha y borrando el return new Promise((resolve, reject) => {})

const promesaDos = async provincia =>{
        if('Formosa' === provincia){
            console.log('Usted está ubicado en Formosa');
        } else {
            console.log('Error al realizar la consulta');
        }
}

let provincia = "Córdoba";
promesaDos(provincia)
.then(resp => console.log(resp))
.catch(err => console.log(err));
*/


//!3 CONSIGNA:
// function promesaTres(valorBooleano){

//     new Promise( ()=> {
//         ( true === valorBooleano )
//         ? resolve('Los valores son iguales')
//         : reject('Los valores son distintos')
//     })
    
// }

// promesaTres()

//! 3 SOLUCIÓN
/* 
// const promesaTres = valorBooleano => {
//     return new Promise((resolve, reject) => {
//         ( true === valorBooleano )
//         ? resolve('Los valores son iguales')
//         : reject('Los valores son distintos')
//     })
// } */

//*SIMPLIFICADO:
// const promesaTres = valorBooleano => new Promise( (resolve, reject) => {
//     ( true === valorBooleano ) 
//     ? resolve('Los valores son iguales')
//     : reject('Los valores son distintos') })



// promesaTres()
//     .then(respuesta => console.log(respuesta))
//     .catch(error => console.log(error))

//* Con async

const promesaTres = async valorBooleano => {
    return ( true === valorBooleano ) 
    ?('Los valores son iguales')
    :('Los valores son distintos') }



promesaTres()
    .then(respuesta => console.log(respuesta))
    .catch(error => console.log(error))














