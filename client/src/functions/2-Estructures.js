// import { solution } from "./0-Unrepeatable.js";
// // const {solution} = require('../functions/0-Unrepeatable.js');// import { solution } from "./0-Unrepeatable"
// // import { boxs, cols, poss, qubs, resetSquare, rows, update, updateBox, updateCol, updateRow } from "./2-Estructures";
// // poss()

// let cols, boxs, rows, qubs

//     rows= []
//     cols= []
//     boxs= []
//     for (let r= 0; r< 9; r++){
//         cols[r]= []
//         boxs[r]= []
//         rows[r]= []
//     }

//     qubs= []
//     for (let q= 1; q<= 81; q++){
//         qubs.push(0)
//     }
    
// // _________________________________________
// /* Funciones auxiliares usadas para updatear */
// function floor (a,b) { 
//     return Math.floor(a/b)
// }
// function modul (a,b) {
//     return a % b
// }
// // _________________________________________

// function updateCol(inx, nueve) {
//     cols[modul(inx, nueve)][floor(inx,nueve)]= qubs[inx]
//     return qubs[inx]
// }

// function updateRow(inx,nueve) {
//     rows[floor(inx,nueve)][modul(inx,nueve)]= qubs[inx]
//     return qubs[inx]
// }

// function updateBox(q,nueve,x,y) {
//     //para 6x6 => 2,3,2,3,3 => variante 11 
        
//     var gross= Math.floor(q / nueve) //indica el numero de fila
// //calculamos el index vertical
//     var index= Math.floor(gross / x) //este da 0, 1 ó 2
// //lo usamos para calcular el box exacto al cual pertenecerá
//     var module= (q % nueve) 

//     var foundbox= Math.floor(module / y) + index * x //índice del box -> 0 al 8
//     let indexbox = (Math.floor(q/nueve)*y + q%y) %nueve //índice puntual -> 0 al 8
    
//     boxs[foundbox][indexbox] = qubs[q]

//     return `boxs[${foundbox}][${indexbox}], actualizado: ${boxs[foundbox][indexbox]}`

// }
// //Exportables solo las siguientes functions
// const update = (q, nueve, x, y, cols, rows) => { //Actualiza un qube puntual => q
//     updateBox(q, nueve, x, y)
//     updateCol(q, nueve, cols)
//     updateRow(q, nueve, rows)
// }

// function resetSquare(q, nueve, x, y) { //Resetea un qube puntual => q
//     qubs[q]= 0
//     updateBox(q, nueve, x, y)
//     updateCol(q, nueve)
//     updateRow(q, nueve)
// }


// // (
// function possCols (nueve){//possCols

//     let loop= nueve -1
//     //    pseudo 
//     //    tengo que agarrar qubs que va del 1 al 81
//     //    hacer iteraciones de 0 a 8
//     //    a todos los 0, mandarlos al indice cols[0]
//     //    a todos los 8, mandarlos al indice cols[8]
//     var ochouno= 0

//     for(let alfa= 0; alfa <= loop; alfa++) {
//         for(let beta= 0; beta <= loop; beta++) {
//             cols[beta][alfa]= qubs[ochouno] //intercambiando los índices beta y alfa entre sí conseguimos columna o fila según se requiera
//             ochouno++
//         }
//     }

//     return cols
// }

// function possRows(nueve){

//     let loop= nueve -1
//     var ochouno= 0

//     for(let alfa= 0; alfa <= loop; alfa++) {
//         for(let beta= 0; beta <= loop; beta++) {
//             rows[alfa][beta]= qubs[ochouno] 
//             ochouno++
//         }
//     }

//     return rows
// }

// function possBoxs(){
//     for (let a= 0; a < 81; a++) {
//         updateBox(a)
//     }
//     return boxs
// }

// function poss(){
//     for (let a= 0; a < 81; a++) {
//         update(a)
//     }
// }

// function possRandC(boxs){
//     possCols()
//     possRows()
//     boxs= possCols()
//     console.log(boxs)
// }

// function restore(){
//     for (let a= 0; a < 81; a++) {
//         resetSquare(a)
//     }
// }

// function updateEvery(){
//     for (let a= 0; a < 81; a++) {
//         update(a)
//     }
// }

// function megasolution(quantity){
//     let b= []
//     let c=[]
//     let r=[]
//     for (let a= 0; a < 9; a++) {
//         r.push(solution(rows[a], quantity)) 
//         c.push(solution(cols[a], quantity)) 
//         b.push(solution(boxs[a], quantity)) 
//     }
//     let concat= {rows: r, boxs: b, cols: c}
//     return concat
// }

// function megasolutionBy(entity, quantity){
//     let b= []
//     let c=[]
//     let r=[]
//     let concat
//     for (let a= 0; a < 9; a++) {
//         if(entity==='rows') {r.push(solution(rows[a], quantity)) ; concat= r}
//         if(entity==='cols') {c.push(solution(cols[a], quantity)) ; concat= c}
//         if(entity==='boxs') {b.push(solution(boxs[a], quantity)) ; concat= b}
//     }
//     return concat
// }


// function pointerMistakes(entityString, concat, quantity){
    
//     let response= []
//     let e= concat[entityString]
//     for(let a=0; a<e.length; a++){
//         if(e[a]!==-1){
//             response.push({
//                 indice: a,
//                 subindice: e[a]
//             })
//         }
//     }
//     if(quantity> 1){
//         return response
//     }
//     if(!quantity || quantity===1){
//         return [response[0]]
//     }
// }

// function detectdifficulty(qubs){
//     let cont=[]
//     for(let a=0;a<81;a++){
//         if(qubs[a]!==0){
//             cont.push(a)
//         }
//     }
//     return cont
// }
// function updateEveryCols(){ //Hace un bucle de 81 iteraciones para actualizar las cols respecto a los qubs
//     for(let b=0;b<81;b++) updateCol(b) 
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

// function difficult(level) {
//     var coef= level *0.4 +5

//     var diff= Math.random() * 15 
//     var float= parseFloat(diff.toString().slice(0,3))

//     if(float > coef) {
//         return true //se busca un numero
//     }
//     return false //no se busca nada
// }

// function sudoqubs (level, entity){ //SIEMPRE DEBE TOMAR UN INPUT Y SACAR UN OUTPUT
//     var suerte
//     var array = []
//     for (let index = 0; index < 9; index++) { 
//         for (let ii = 0; ii < 9; ii++) {
//             suerte= difficult (level)
//             if (!suerte) {
//             entity[index][ii]= 0 
//             array.push(index)
//             }
//         }
//     }
//     return array.length
// } //Rehacer esta function: Seniority()

// function howmanyQubs(rows){
//     let cont= []
//     for(let a=0; a<rows.length; a++){
//         for(let b=0; b<rows[a].length;b++){
//             if(rows[a][b]!==0){
//                 cont.push(rows[a][b])
//             }
//         }
//     }
//     return cont.length
// }

// function rows_cols_to_squares(first, second, rowsORcols){
//     function dependsWhom(dominante, calibrador){
//         return dominante*9 +calibrador
//     }
//     if(rowsORcols==='rows'){
//         return dependsWhom(first,second)
//     }
//     if(rowsORcols==='cols'){
//         return dependsWhom(second,first)
//     }
// }

// function boxs_to_squares(box, index){
//     return Math.floor(index/3)*9 + index % 3 + (box % 3) * 3 + Math.floor(box/3) *3*9
// }

// function getBoxFromQ(q) {
        
//     var gross= Math.floor(q / 9) //indica el numero de fila
// //calculamos el index vertical
//     var index= Math.floor(gross / 3) //este da 0, 1 ó 2
// //lo usamos para calcular el box exacto al cual pertenecerá
//     var module= (q % 9) 

//     var foundbox= Math.floor(module / 3) + index * 3 //índice del box -> 0 al 8
//     let indexbox = (Math.floor(q/9)*3 + q%3) %9 //índice puntual -> 0 al 8
    
//     // boxs[foundbox][indexbox] = qubs[q]

//     return [foundbox,indexbox]

// }

// poss() // Relaciona las filas, columnas y cajas entre sí

// restore() // Reinicia el sudoku: borrando los datos de las filas, columnas y cajas

// let sudoku =create3() // En la variable sudoku se guarda un objeto: {ok: 'ok', molino: number}

// // create3() genera el sudoku, guardando el rows, cols, y boxs los datos
// // Solo con el Array rows ya podemos desplegar el sudoku en el browser

// sudoqubs(5, rows) // Esta función es la que borra ciertos números, según cuántos se borran, se define la dificulad

// qubs= updateQubsBy("rows") // Qubs es un Array de 81 casilleros, con esta función le pasamos los datos de rows a qubs

// updateEvery() // Relaciona las filas, columnas y cajas entre sí, cada vez que se agregue un número cuando se esté jugando al sudoku, es necesario ejecutar una variante de esta función. 

// export {
//     //Para testing
//     rows, cols, boxs, qubs,
//     updateRow,
//     updateCol,
//     updateBox,
//     //Para update
//     update,
//     //Para reset
//     resetSquare,
//     //Para crear estructura sudoku
//     possCols,
//     possRows,
//     possBoxs,
//     poss,
//     possRandC,
//     restore,
//     detectdifficulty,
//     megasolution,
//     megasolutionBy,
//     create3,
//     updateQubsBy,
//     difficult,
//     //Para crear sudoku lógico:
//     sudoku,
//     //Registro de sudoku:
//     howmanyQubs,
//     //Registro errores:
//     pointerMistakes,
//     //Conversores inversos:
//     boxs_to_squares,
//     rows_cols_to_squares,
//     //conversor regular
//     getBoxFromQ
// }

