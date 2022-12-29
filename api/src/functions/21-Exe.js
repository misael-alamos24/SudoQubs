function Loop(loop,q){ //loop: cuántos elementos tendrá, b: qué valor tendrá cada elemento
    if (!q){
        let rows, cols, boxs
        rows= []
        cols= []
        boxs= []
        for(let a=0;a<loop;a++) {rows.push([]); cols.push([]); boxs.push([])}
        return {rows,cols,boxs}
    }
    if(q){
        let qubs= []
        for(let a=0;a<loop;a++){qubs.push(0)}
        return {qubs}
    }
}

function Vertex(loop){ 

    if(typeof loop !== 'number') loop=9 
    if(detectPrime(loop)) loop=9
    size=loop

    let {rows, cols, boxs} = Loop(loop)

    let {qubs}= Loop(Math.pow(loop,2), true)

    return {
        rows,
        cols,
        boxs,
        qubs
    }

}
//__

function detectPrime(num){ //si es primo {true}; else {false}
    for(let a=2; a< num; a++){
        if(num % a===0) return false
    }
    return true
}
//__

function sqrt(num){

    if(Math.sqrt(num)%1===0){
        return true
    }
    if(Math.sqrt(num)%1!==0){
        return false
    }

}

function ret(n) {  
    for(let o=n-1;o>=2; o--)  { 
        if(n%o===0) return { width: n/o ,heigth: n/(n/o)}  
    }  
}

function boxSize(num){

    if(sqrt(num)) return {
        width: Math.sqrt(num), 
        heigth: Math.sqrt(num)
    }

    return ret(num)
}
//__

function solution(a, quantity){
    let response= []
    for(let b= 1; b< a.length; b++){
        for(let c= b; c>= 0; c--){
            if(a[b]===a[c] &&b!=c) {
                if(a[b] !== 0 && a[b]!== undefined) {
                    var catt= [a[b], a[c]]//Object.assign(a[c], a[b])
                    // return catt
                    response.push({
                        reps: [b,c],
                        vals: catt
                    })
                }
            }
        }
    }
    if(quantity > 1 && response.length){
        return response
    }
    if((!quantity || quantity===1) && response.length){
        return response[0]
    }
    return -1
}


function Row (qube, width) { //Retorna en qué fila va el qube (0 ~ 81) ingresado
    return Math.floor(qube / width) 
}

function Col (qube, heigth) { //Retorna en qué columna va el qube (0 ~ 81) ingresado 
    return qube % heigth
}


function updateCol(inx, nine, cols, qubs) {
    var floor= Math.floor(inx / nine)
    var mod= inx % nine
    cols[mod][floor]= qubs[inx]
    // return qubs[inx]
}

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


function updateSquare (q, nueve, rows, cols, boxs, qubs) { //Actualiza un qube puntual => q

    updateBox(q, nueve, boxs, qubs)
    updateCol(q, nueve, cols, qubs)
    updateRow(q, nueve, rows, qubs)

    return{
        rows,
        cols,
        boxs
    }
}

function resetSquare(q, nueve, rows, cols, boxs, qubs) { //Resetea un qube puntual => q

    qubs[q]= 0
    updateBox(q, nueve, boxs, qubs)
    updateCol(q, nueve, cols, qubs)
    updateRow(q, nueve, rows, qubs)

    return {
        rows,
        cols,
        boxs
    }
}


function restore(mainloop, rows, cols, boxs){

    let nine= Math.sqrt(mainloop)

    for (let a= 0; a < mainloop; a++) {
        resetSquare(a, nine, rows, cols, boxs)
    }
    return {
        rows,
        cols,
        boxs
    }
}

function updateEvery(mainloop, rows, cols, boxs, qubs){

    let nine= Math.sqrt(mainloop)

    for (let a= 0; a < mainloop; a++) {
        updateSquare(a, nine, rows, cols, boxs, qubs)
    }
    return {
        rows,
        cols,
        boxs
    }
}


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
            molino++
            let random= Math.ceil( Math.random() * loop ) //nine
            rows[aa][a]= random
            // console.log('17', aa, a, setRows, random)
            if ( solution( rows[aa] ) !== -1 ) {
                setRows.add(random)        
                // console.log('20', aa, a, random)     
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
                        // console.log('35', aa, a, random)
                    }
                    ochouno= aa* loop //nine
                    a= -1
                    // console.log('39', aa, a, random)
                    continue
                }
                a= a-1
                // console.log('43', aa, a, random)
                continue
            }

            cols[a][aa]= random
            if (aa > 0){
                // console.log('49', aa, a, random)
                if ( solution( cols[a] ) !== -1 ) {
                    setRows.add(random)             
                    // console.log('52', aa, a, random)
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
                            // console.log('66', aa, a, random)
                        }
                        ochouno= aa* loop
                        a= -1
                        // console.log('70', aa, a, random)
                        continue
                    }    
                    a= a-1
                    // console.log('74', aa, a, random)
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
                // console.log('96', aa, a, random)            
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
                        // console.log('109', aa, a, random)
                    }
                    ochouno= aa* loop
                    a= -1
                    // console.log('113', aa, a, random)
                    continue
                }
                a=a-1
                // console.log('117')
                continue
            }
            
            if(solution(rows[aa])=== -1){
                rows[aa][a]= random
                // console.log('123', aa, a, random)
            }
            ochouno++
            setBoxs= new Set()
            setRows= new Set()
            // console.log('128', aa, a, random)
        }
        theSet= new Set()
        // console.log('131')
    }
    // console.log('133')
    return {ok:"ok", molino, rows, cols, boxs, qubs}
}

/*
17
49
52
74
17
49
123
128
*/

function generate(vertex){
    var s1= Vertex(vertex)
    var u1= updateEvery(vertex * vertex, s1.rows, s1.cols, s1.boxs, s1.qubs)
    var c1_s= create3(vertex, s1.rows,s1.cols,s1.boxs,s1.qubs)
    c1_s.qubs= updateQubsBy('rows',s1.rows)
    return c1_s
}

function con(vertex){
    console.log(generate(vertex))
}
// con(4)
// con(6)
// con(25)


function Seniority(level, loop){ // level= entre 1 y 100
    //      0    ~   50
    if(level < 0 || level > 10) return undefined
    let l = Math.floor(level / 2 * 0.1 * loop + loop * 0.25)
    let r = []

    for (let a=0; a< l; a++){
        let random = Math.ceil(Math.random()* loop)
        let cont = false
        for(let b=0; b< r.length;b++){
            if(random===r[b]){
                a--
                cont = true
            }
        }
        if(cont) continue
        r.push(random)
    }
    return r
}
