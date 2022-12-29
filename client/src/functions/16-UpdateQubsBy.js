import { boxSize } from "./8-Aux"

function updateQubsBy(what, rows, cols, boxs){

    let miniloop= rows.length
    let x=boxSize(rows.length).width
    let y=boxSize(rows.length).heigth

    var q= 0
    var qubes= []

    for(let aa= 0; aa < miniloop; aa++){
        for(let a= 0; a < miniloop; a++){
            if(what==="rows") {
                qubes.push(rows[aa][a])
                // console.log('line 9 updateWubsBy', what, rows, cols, boxs)
            }
            if(what==="cols") {
                qubes.push(cols[a][aa])
            }
            if(what==="boxs") {
                var gross= Math.floor(q / miniloop) //indica el numero de fila
                var index= Math.floor(gross / x) //este da 0, 1 ó 2
                var module= (q % miniloop)
                let indexbox = (Math.floor(q/miniloop)*y + q%x) %miniloop //índice puntual -> 0 al 8
                var foundbox= Math.floor(module / y) + index * y //índice del box -> 0 al 8
                qubes.push(boxs[foundbox][indexbox])
                q++
            }            
        }
    }
    return qubes
}


export {
    updateQubsBy,
}