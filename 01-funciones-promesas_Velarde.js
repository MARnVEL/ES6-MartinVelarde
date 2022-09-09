/* 

//*1-CONSIGNA

//! Promesa almacenada en una constante
    const promesa = new Promise((resolve, reject)=>{

        if( 10 === 11){
            resolve('Los valores son iguales');
        } else {
            reject('Los valores son distintos')
        }

    });

    promesa

//*1-SOLUCIÓN
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

//#################################################################################################
//*2-CONSIGNA

/* 
//!Promesa dentro en una función.
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

//*2-SOLUCIÓN

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
 */

//*Con fucniones flecha y borrando el return new Promise((resolve, reject) => {}), AHORA UTILIZAMOS EL node.js
/* 
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
.catch(err => console.log(err))
 */

//##############################################################################################################

//*3-CONSIGNA

// function promesaTres(valorBooleano){

//     new Promise( ()=> {
//         ( true === valorBooleano )
//         ? resolve('Los valores son iguales')
//         : reject('Los valores son distintos')
//     })
    
// }

// promesaTres()


//*3-SOLUCIÓN


function promesaTres(valorBooleano){
    return new Promise( (resolve, reject) => {
            ( true === valorBooleano )
            ? resolve('Los valores son iguales')
            : reject('Los valores son distintos')
        })
}
promesaTres(true)
    .then(respuesta => console.log(respuesta))
    .catch(err => console.log(err))
/* 
//*Con función flecha:

const promesaTres1 = valorBooleano => {
    return new Promise((resolve, reject) => { 
        ( true === valorBooleano ) 
        ? resolve('Los valores son iguales')
        : reject('Los valores son distintos')
    })
}

promesaTres1(true)
    .then(respuesta => console.log(respuesta))
    .catch(err => console.log(err))

//*Con función flecha y async:

const promesaTres2 = async valorBool => (true === valorBool) ? ('Los valores son iguales'):('Los valores son distintos')
promesaTres2(true)
    .then(respuesta => console.log(respuesta))
    .catch(err => console.log(err));
 */
//##############################################################################################################

//*4-CONSIGNA

// function promesaCuatro(){

//     new Promise( ()=> {
//         ( true === arguments )
//         ? resolve('Los valores son iguales')
//         : reject('Los valores son distintos')
//     })
    
// }

// promesaCuatro()


//*4-SOLUCIÓN
/* 

function promesaCuatro(arguments) {
     return   new Promise((resolve, reject) => {
                (true === arguments)
                ? resolve("Los valores son iguales!")
                : reject("Los valores son distintos")
                })
}
promesaCuatro(false)
    .then(response => console.log(response))
    .catch(error => console.log(error))

//*Con fucnión flecha:
const promesaCuatro1 = arguments => {
    return   new Promise((resolve, reject) => {
        (true === arguments)
        ? resolve("Los valores son iguales!")
        : reject("Los valores son distintos!")
        })
}
promesaCuatro1(true)
    .then(response => console.log(response))
    .catch(error => console.log(error))

//*Con función flecha y async:

const promesaCuatro2 = async arguments => {
        return (true === arguments)
        ? ("Los valores son iguales! (async)")
        : ("Los valores son distintos!")
        }

promesaCuatro2(true)
    .then(response => console.log(response))
    .catch(error => console.log(error))


//*Con función flecha y async teniendo en cuenta el retorno implícito:

const promesaCuatro3 = async arguments => (true === arguments) ? ("Los valores son iguales ATR! (async)") :("Los valores son distintos!");

promesaCuatro3(true)
.then(response => console.log(response))
.catch(error => console.log(error))


 */








