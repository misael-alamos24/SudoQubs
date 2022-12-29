//Actualiza un casillero puntual: ya sea para ponerle un valor o resetearlo

import { updateBox, updateCol, updateRow } from "./12-Update";

function updateSquare (q, nueve, rows, cols, boxs, qubs) { //Actualiza un qube puntual => q

    updateBox(q, nueve, boxs, qubs)
    updateCol(q, nueve, cols, qubs)
    updateRow(q, nueve, rows, qubs)

    return{
        rows,
        cols,
        boxs
    }
}

function resetSquare(q, nueve, rows, cols, boxs, qubs) { //Resetea un qube puntual => q

    qubs[q]= 0
    updateBox(q, nueve, boxs, qubs)
    updateCol(q, nueve, cols, qubs)
    updateRow(q, nueve, rows, qubs)

    return {
        rows,
        cols,
        boxs
    }
}

export {
    updateSquare,
    resetSquare
}