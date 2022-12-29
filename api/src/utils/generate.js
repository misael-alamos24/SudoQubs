const { Vertex } = require('../functions/10-Estructures.js');
const { updateEvery } = require('../functions/14-Global');
const { create3 } = require('../functions/17-Create');
const { updateQubsBy } = require('../functions/16-UpdateQubsBy');

function generate(sizing){

    // if(state.mood==='generated') del()
    //Próximamente: create3() tendrá adentro suyo las siguientes 4 líneas:
    var size= 0; size= parseInt(sizing)
    var s1= {}; s1= Vertex(size) //Estructuras
    var u1= {}; u1= updateEvery(size*size, s1.rows, s1.cols, s1.boxs, s1.qubs) //Con 0s
    var c1_s= {}; c1_s= create3(size, s1.rows, s1.cols, s1.boxs, s1.qubs) //Con el sudoku lleno
    c1_s.qubs = updateQubsBy('rows', s1.rows) //Qubs actualizados
    console.log({before:c1_s})

    // let killed= Seniority(level, siz*siz) 

    // let ready= kill(killed, c1_s.qubs)

    updateEvery(size*size,c1_s.rows,c1_s.cols,c1_s.boxs,c1_s.qubs)

    console.log({after:c1_s})
    // console.log('lo que estás buscando',equal(size,c1_s,s1))

    sudoku= (c1_s) // acá se cambia y listo
    // setReact(sudoku)
    // setState({mood: 'generated'})
    return {sudoku}
}

module.exports = {
    generate,
}