import { updateSquare } from "./13-Punctual"

function poss(loop){
    for (let a= 0; a < loop; a++) {
        updateSquare(a)
    }
}

export {
    poss,
}