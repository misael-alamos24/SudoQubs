
function rows_cols_to_squares(first, second, rowsORcols, nine){
    function dependsWhom(dominante, calibrador){
        return dominante*nine +calibrador
    }
    if(rowsORcols==='rows'){
        return dependsWhom(first,second)
    }
    if(rowsORcols==='cols'){
        return dependsWhom(second,first)
    }
}

function boxs_to_squares(box, index, six, ejeX, ejeY){
    return Math.floor(index/ejeY)*six + index % ejeY + (box % ejeX) * ejeY + Math.floor(box/ejeX) *ejeX*six
}

module.exports = {
    rows_cols_to_squares,
    boxs_to_squares,
}

/*

> boxs_to_squares(0,0,6,2,2,3,2,3,3)// forma vertical, intento ap. 12, width: 3, heigth: 2
> boxs_to_squares(5,5,6,3,3,2,3,2,2)// forma horizontal, qubs[12]= boxs[2][0]
*/