const { Col, Row } = require("./11-Dimensions");
const { boxSize } = require("./8-Aux");

// function updateCol(inx, nueve) {
//     cols[modul(inx, nueve)][floor(inx,nueve)]= qubs[inx]
//     return qubs[inx]
// }

// function updateRow(inx,nueve) {
//     rows[floor(inx,nueve)][modul(inx,nueve)]= qubs[inx]
//     return qubs[inx]
// }

function updateCol(inx, nine, cols, qubs) {
    var floor= Math.floor(inx / nine)
    var mod= inx % nine
    cols[mod][floor]= qubs[inx]
    // return qubs[inx]
}
// return {
//     response: cols[Col(inx, nine)][Row(inx,nine)],
//     square: `cols[${Col(inx, nine)}][${Row(inx,nine)}]`
// }


function updateRow(inx, nine, rows, qubs) {
    rows[Row(inx, nine)][Col(inx, nine)]= qubs[inx]
    // return rows[Row(inx, nine)][Col(inx, nine)]
    // return {
    //     response: rows[Row(inx, nine)][Col(inx, nine)],
    //     square: `rows[${Row(inx, nine)}][${Col(inx, nine)}]`
    // }
}

function IndexBox(q, nine) {

    let x= boxSize(nine).width
    let y= boxSize(nine).heigth

    // console.log('line 27',x,y)

    var gross= Row(q , nine) //indica el numero de fila
//calculamos el index vertical
    var index= Row(gross , x) //este da 0, 1 ó 2
//lo usamos para calcular el box exacto al cual pertenecerá
    var module= (q % nine) 

    let foundbox= Row(module , y) + index * x //índice del box -> 0 al 8
    let indexbox = (Row(q , nine) * y + q % y) % nine //índice puntual -> 0 al 8

    return {first: foundbox, second: indexbox}

}


function updateBox(q, nine, boxs, qubs) {

    // console.log('line 43', q, nine)
    
    let first= IndexBox(q, nine).first
    let second= IndexBox(q, nine).second

    // console.log(first, second, 'qubs'+ qubs, q)
    boxs[first][second]= qubs[q]

    // return boxs[first][second]

}

module.exports = {
    updateBox,
    updateCol,
    updateRow,
    IndexBox,
}