import { solution } from "./0-Unrepeatable"
import { Loop } from "./10-Estructures"
import { IndexBox, updateBox, updateCol } from "./12-Update"
import { updateQubsBy } from "./16-UpdateQubsBy"
import { RestoreEstructures } from "./25-Generate"
import { boxSize } from "./8-Aux"

// function updateBoxCol(loop, aa){
//     for(let b=0;b<loop;b++){ //nine
//         updateBox((aa * loop) +b, loop, width, heigth ) //nine
//         updateCol((aa * loop) +b, loop, cols ) //nine
//     }
// }

function create3(loop, rows, cols, boxs, qubs){

    var molino= 0
    var ochouno= 0
    let setRows= new Set()
    let setBoxs= new Set()
    let theSet= new Set() 

    let width= boxSize(loop).width
    let heigth= boxSize(loop).heigth

    for (let aa= 0; aa < loop; aa++) { //nine
        for (let a= 0; a < loop; a++) { //nine
            if(molino>loop*loop*1000) {
                let sud1= RestoreEstructures(loop)
                let created= create3(loop, sud1.rows, sud1.cols, sud1.boxs, sud1.qubs)
                let updated= updateQubsBy('rows', sud1.rows)
                rows= created.rows; cols= created.cols; boxs= created.boxs; qubs= updated
                console.log('from beyond', created, updated, 'limite tomado:', loop*loop*1000)
                return created
            }
            molino++
            let random= Math.ceil( Math.random() * loop ) //nine
            rows[aa][a]= random
            if ( solution( rows[aa] ) !== -1 ) {
                setRows.add(random)             
                if(setRows.size >= loop) { //nine
                    setBoxs= new Set()
                    setRows= new Set()
                    rows[aa]= [] //reemplacé new Array(9) por Loop()
                    for(let zz=0; zz<loop;zz++){rows[aa][zz]=0}

                    // console.log('line 36', rows, typeof rows)
                    qubs= updateQubsBy("rows", rows, cols, boxs)
                    // updateBoxCol(loop, aa)
                    for(let b=0;b<loop;b++){ //nine
                        updateBox((aa * loop) +b, loop, boxs, qubs ) //nine
                        updateCol((aa * loop) +b, loop, cols, qubs ) //nine
                    }
                    ochouno= aa* loop //nine
                    a= -1
                    continue
                }
                a= a-1
                continue
            }

            cols[a][aa]= random
            if (aa > 0){
                if ( solution( cols[a] ) !== -1 ) {
                    setRows.add(random)             
                    if(setRows.size >= loop) {
                        setBoxs= new Set()
                        setRows= new Set()
                        rows[aa]= [] //reemplacé new Array(9) por Loop()
                        for(let zz=0; zz<loop;zz++){rows[aa][zz]=0}

                        qubs= updateQubsBy("rows", rows, cols, boxs)
                        // updateBoxCol(loop, aa)
                        
                        for(let b=0;b<loop;b++){ //nine
                            updateBox((aa * loop) +b, loop, boxs, qubs ) //nine
                            updateCol((aa * loop) +b, loop, cols, qubs ) //nine
                        }
                        ochouno= aa* loop
                        a= -1
                        continue
                    }    
                    a= a-1
                    continue
                }
            }

            // REMODULADO
            // var q= ochouno
            // var gross= Math.floor(q / 9) //indica el numero de fila
            // var index= Math.floor(gross / 3) //este da 0, 1 ó 2
            // var module= (q % 9)
            // let indexbox = (Math.floor(q/9)*3 + q%3) %9 //índice puntual -> 0 al 8
            // var foundbox= Math.floor(module / 3) + index * 3 //índice del box -> 0 al 8
            // boxs[foundbox][indexbox]= random

            // updateBox(ochouno, loop, width, heigth)
            let first= IndexBox(ochouno, loop, width, heigth).first
            let second= IndexBox(ochouno, loop, width, heigth).second
            boxs[first][second]= random

            if ( solution( boxs[first] ) !== -1 ) {
                setRows.add(random)
                boxs[first][second]= 0                     
                // console.log(setRows, aa, a, random, ochouno)                    
                if(setRows.size >= loop) {
                    setBoxs= new Set()
                    setRows= new Set()
                    rows[aa]= [] //reemplacé Loop() por direct explicit impertative code
                    for(let zz=0; zz<loop;zz++){rows[aa][zz]=0}
                    // updateBoxCol(loop, aa)
                    
                    for(let b=0;b<loop;b++){ //nine
                        updateBox((aa * loop) +b, loop, boxs, qubs ) //nine
                        updateCol((aa * loop) +b, loop, cols, qubs ) //nine
                    }
                    ochouno= aa* loop
                    a= -1
                    continue
                }
                a=a-1
                continue
            }
            
            if(solution(rows[aa])=== -1){
                rows[aa][a]= random
            }
            ochouno++
            setBoxs= new Set()
            setRows= new Set()
        }
        theSet= new Set()
    }
    return {ok:"ok", molino, rows, cols, boxs, qubs}
}

export {
    create3,
}