// import { solution } from "./0-Unrepeatable"
// import { boxs, cols, poss, qubs, resetSquare, rows, update, updateBox, updateCol, updateRow } from "./2-Estructures";
// poss()

// var rs= [   [],[],[],  [],[],[],   [],[],[]    ]
// var cs= [   [],[],[],  [],[],[],   [],[],[]    ]
// var bs= [   [],[],[],  [],[],[],   [],[],[]    ]

// const { solution } = require('../functions/0-Unrepeatable.js');
// const { cols, qubs, resetSquare, rows, update, updateCol, updateRow } = require('../functions/2-Estructures.js');

//Funcion para dificultad
//level -> number between 1 to 5, the lower level is the easier sudoku
// function difficult(level) {
//     var coef= level *0.4 +5

//     var diff= Math.random() * 15 
//     var float= parseFloat(diff.toString().slice(0,3))

//     if(float > coef) {
//         return true //se busca un numero
//     }
//     return false //no se busca nada
// }

// function updateQubsBy(what){
//     var q= 0
//     var qubes= []
//     for(let aa= 0; aa < 9; aa++){
//         for(let a= 0; a < 9; a++){
//             if(what==="rows") {
//                 qubes.push(rows[aa][a])
//             }
//             if(what==="cols") {
//                 qubes.push(cols[a][aa])
//             }
//             if(what==="boxs") {
//                 var gross= Math.floor(q / 9) //indica el numero de fila
//                 var index= Math.floor(gross / 3) //este da 0, 1 ó 2
//                 var module= (q % 9)
//                 let indexbox = (Math.floor(q/9)*3 + q%3) %9 //índice puntual -> 0 al 8
//                 var foundbox= Math.floor(module / 3) + index * 3 //índice del box -> 0 al 8
//                 qubes.push(boxs[foundbox][indexbox])
//                 q++
//             }            
//         }
//     }
//     return qubes
// }

// function updateQubsByRows(){
//     let qubes= updateQubsBy("rows")
//     return qubes
// }

// function verificate81(){ //Verificativa de objetivo alcanzado

//     var ochouno= 0
//     for (let aa= 0; aa < 3; aa++) {
//         for (let a= 0; a < 3; a++) {

//         }
//     }

// }

// function z(q){ //Informativa de índice buscado
//     var gross= Math.floor(q / 9) //indica el numero de fila
//     var index= Math.floor(gross / 3) //este da 0, 1 ó 2
//     var module= (q % 9)
//     let indexbox = (Math.floor(q/9)*3 + q%3) %9 //índice puntual -> 0 al 8
//     var foundbox= Math.floor(module / 3) + index * 3 //índice del box -> 0 al 8
//     // qubes.push(boxs[foundbox][indexbox])
//     return [foundbox, indexbox]

// }

// function create3(){
//     var molino= 0
//     var ochouno= 0
//     let setRows= new Set()
//     let setBoxs= new Set()
//     let theSet= new Set() 
//     for (let aa= 0; aa < 9; aa++) {
//         for (let a= 0; a < 9; a++) {
//             molino++
//             let random= Math.ceil( Math.random() * 9 ) 
//             rows[aa][a]= random
//             // if (a > 0){
//                 if ( solution( rows[aa] ) !== -1 ) {
//                     setRows.add(random)             
//                     if(setRows.size >= 9) {
//                         // rows[aa][a]= 0
//                         // console.log("set a 9 en rows",theSet)
//                         // console.log(setRows, aa, a, random, ochouno, 'rows == 9', rows[aa])     
//                         setBoxs= new Set()
//                         setRows= new Set()
//                         rows[aa]= [0,0,0,  0,0,0,  0,0,0]
//                         qubs= updateQubsBy("rows")
//                         for(let b=0;b<9;b++){
//                             updateBox((aa * 9) +b)
//                             updateCol((aa * 9) +b)
//                         }
//                         ochouno= aa* 9
//                         a= -1
//                         continue
//                     }
//                     // console.log(setRows, aa, a, random, ochouno, 'rows', rows[aa])     
//                     a= a-1
//                     continue
//                 }
//             // }
//             cols[a][aa]= random
//             if (aa > 0){
//                 if ( solution( cols[a] ) !== -1 ) {
//                     setRows.add(random)             
//                     if(setRows.size >= 9) {
//                         // rows[aa][a]= 0
//                         // console.log("set a 9 en rows",theSet)
//                         // console.log(setRows, aa, a, random, ochouno, 'rows == 9', rows[aa])     
//                         setBoxs= new Set()
//                         setRows= new Set()
//                         rows[aa]= [0,0,0,  0,0,0,  0,0,0]
//                         qubs= updateQubsBy("rows")
//                         for(let b=0;b<9;b++){
//                             updateBox((aa * 9) +b)
//                             updateCol((aa * 9) +b)
//                         }
//                         ochouno= aa* 9
//                         a= -1
//                         continue
//                     }
//                     // console.log(setRows, aa, a, random, ochouno, 'rows', rows[aa])     
//                     a= a-1
//                     continue
//                 }
//             }
//                 // console.log("pasé los continue")
//             // }

//             var q= ochouno
//             var gross= Math.floor(q / 9) //indica el numero de fila
//             var index= Math.floor(gross / 3) //este da 0, 1 ó 2
//             var module= (q % 9)
//             let indexbox = (Math.floor(q/9)*3 + q%3) %9 //índice puntual -> 0 al 8
//             var foundbox= Math.floor(module / 3) + index * 3 //índice del box -> 0 al 8
//             boxs[foundbox][indexbox]= random
            
//             // if( indexbox > 0 ) {
//                 if ( solution( boxs[foundbox] ) !== -1 ) {
//                     setRows.add(random)
//                     boxs[foundbox][indexbox]= 0                     
//                     // console.log(setRows, aa, a, random, ochouno)                    
//                     if(setRows.size >= 9) {
//                         setBoxs= new Set()
//                         setRows= new Set()
//                         rows[aa]= [0,0,0,  0,0,0,  0,0,0]
//                         qubs= updateQubsBy("rows")
//                         for(let b=0;b<9;b++){
//                             updateBox((aa * 9) +b)
//                             updateCol((aa * 9) +b)
//                         }
//                         ochouno= aa* 9
//                         a= -1
//                         // ochouno= aa * 9
//                         continue
//                     }
//                     a=a-1
//                     // ochouno--
//                     continue
//                 }
//             // }
//             if(/*solution(cols[a ])=== -1 &&*/ solution(rows[aa])=== -1){
//                 rows[aa][a]= random
//                 // cols[a][aa]= random
//             }
//             ochouno++
//             setBoxs= new Set()
//             setRows= new Set()
//         }
//         theSet= new Set()
//     }
//     return {ok:"ok", molino}
// }

// // export {
//     create3,
//     updateQubsBy
// }