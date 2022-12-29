// import { size } from "./10-Estructures"
// _________________________________________
/* Funciones auxiliares usadas para updatear */

function Row (qube, width) { //Retorna en qué fila va el qube (0 ~ 81) ingresado
    return Math.floor(qube / width) 
}

function Col (qube, heigth) { //Retorna en qué columna va el qube (0 ~ 81) ingresado 
    return qube % heigth
}

module.exports = {
    Row,
    Col,
}