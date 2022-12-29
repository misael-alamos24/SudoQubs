const { resetSquare, updateSquare } = require("./13-Punctual");

function restore(mainloop, rows, cols, boxs){

    let nine= Math.sqrt(mainloop)

    for (let a= 0; a < mainloop; a++) {
        resetSquare(a, nine, rows, cols, boxs)
    }
    return {
        rows,
        cols,
        boxs
    }
}

function updateEvery(mainloop, rows, cols, boxs, qubs){

    let nine= Math.sqrt(mainloop)

    for (let a= 0; a < mainloop; a++) {
        updateSquare(a, nine, rows, cols, boxs, qubs)
    }
    return {
        rows,
        cols,
        boxs
    }
}

module.exports = {
    restore,
    updateEvery,
}