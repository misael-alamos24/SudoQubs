import { Vertex } from "./10-Estructures"
import { updateEvery } from "./14-Global"
import { updateQubsBy } from "./16-UpdateQubsBy"
import { create3 } from "./17-Create"

// function Generate(vertex){
//     var s1= Vertex(vertex)
//     var u1= updateEvery(vertex * vertex, s1.rows, s1.cols, s1.boxs, s1.qubs)
//     var c1_s= create3(vertex, s1.rows,s1.cols,s1.boxs,s1.qubs)
//     c1_s.qubs= updateQubsBy('rows',s1.rows)
//     return c1_s
// }

function RestoreEstructures(vertex){
    var s1= Vertex(vertex)
    var u1= updateEvery(vertex * vertex, s1.rows, s1.cols, s1.boxs, s1.qubs)
    return s1
}

function kill(removing, qubs){
    for(let b=0;b<qubs.length;b++){
        for(let c=0;c<removing.length;c++){
            if(b===removing[c]){
                qubs[b]=0
            }
        }
    }
}

function Generate(sizing){ //console.log({sizing})

    // if(state.mood==='generated') del()
    //Próximamente: create3() tendrá adentro suyo las siguientes 4 líneas:
    var size= 0; size= parseInt(sizing)
    var s1= {}; s1= Vertex(size) //Estructuras
    var u1= {}; u1= updateEvery(size*size, s1.rows, s1.cols, s1.boxs, s1.qubs) //Con 0s
    var c1_s= {}; c1_s= create3(size, s1.rows, s1.cols, s1.boxs, s1.qubs) //Con el sudoku lleno
    c1_s.qubs = updateQubsBy('rows', s1.rows) //Qubs actualizados
    //console.log({before:c1_s})

    // let killed= Seniority(level, siz*siz) 

    // let ready= kill(killed, c1_s.qubs)

    updateEvery(size*size,c1_s.rows,c1_s.cols,c1_s.boxs,c1_s.qubs)

    //console.log({after:c1_s})
    // console.log('lo que estás buscando',equal(size,c1_s,s1))

    let sudoku= (c1_s) // acá se cambia y listo
    // setReact(sudoku)
    // setState({mood: 'generated'})
    return {sudoku}
}

export {
    Generate,
    RestoreEstructures,
    kill
}