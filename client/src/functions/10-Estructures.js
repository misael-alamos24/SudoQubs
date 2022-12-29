import { detectPrime } from "./9-PrimeNumber";

var size

// function Loop(loop,b){ //loop: cuántos elementos tendrá, b: qué valor tendrá cada elemento
//     let ar= new Array()
//     for(let a=0;a<loop;a++){
//         ar[a]=([])
//         if(b===0)ar[a]=0
//     }
//     return ar
// }

// /*
// Toda la estructura del sudoku se basa en cuántos casilleros tiene cada caja. 
// A partir de ese factor, se define el resto. 
// En el parámetro `loop` de la function Vertex, 
// el usuario define ese número según su preferencia.
// */

// function Vertex(loop){ 

//     if(typeof loop !== 'number') loop=9 
//     if(detectPrime(loop)) loop=9
//     size=loop

//     let rows= Loop(loop)
//     let cols= Loop(loop)
//     let boxs= Loop(loop)
//     let qubs= Loop(Math.pow(loop,2), 0)

//     return {
//         rows,
//         cols,
//         boxs,
//         qubs
//     }

// }
function Loop(loop,q){ //loop: cuántos elementos tendrá, b: qué valor tendrá cada elemento
    if (!q){
        let rows, cols, boxs
        rows= []
        cols= []
        boxs= []
        for(let a=0;a<loop;a++) {rows.push([]); cols.push([]); boxs.push([])}
        return {rows,cols,boxs}
    }
    if(q){
        let qubs= []
        for(let a=0;a<loop;a++){qubs.push(0)}
        return {qubs}
    }
}

/*
Toda la estructura del sudoku se basa en cuántos casilleros tiene cada caja. 
A partir de ese factor, se define el resto. 
En el parámetro `loop` de la function Vertex, 
el usuario define ese número según su preferencia.
*/

function Vertex(loop){ 

    if(typeof loop !== 'number') loop=9 
    if(detectPrime(loop)) loop=9
    size=loop

    let {rows, cols, boxs} = Loop(loop)

    let {qubs}= Loop(Math.pow(loop,2), true)

    return {
        rows,
        cols,
        boxs,
        qubs
    }

}

export {
    Loop,
    Vertex,
    // size,
}