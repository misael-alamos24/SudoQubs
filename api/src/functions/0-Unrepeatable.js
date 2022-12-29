//Algoritmo detector de repeticiones
/* La función recibe 2 parámetros:
const Parámetros= {
    a: "En el primer parámetro se ingresa el Array en el cual se buscará dos elementos iguales",
    quantity: "si en quantity no se pasa nada, o se le pasa un 1, solo devuelve la primera repetición que encuentra;
    si a quantity se le pasa cualquier número mayor a 1, devuelve todas las repeticiones que se encuentren en el Array"
}

*/
function solution(a, quantity){
    let response= []
    for(let b= 1; b< a.length; b++){
        for(let c= b; c>= 0; c--){
            if(a[b]===a[c] &&b!=c) {
                if(a[b] !== 0 && a[b]!== undefined) {
                    var catt= [a[b], a[c]]//Object.assign(a[c], a[b])
                    // return catt
                    response.push({
                        reps: [b,c],
                        vals: catt
                    })
                }
            }
        }
    }
    if(quantity > 1 && response.length){
        return response
    }
    if((!quantity || quantity===1) && response.length){
        return response[0]
    }
    return -1
}

// module.exports = {
//     solution
// }
module.exports = {
    solution
}