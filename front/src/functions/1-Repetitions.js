import { solution } from "./0-Unrepeatable"

function findReps(quantity, rows, cols, boxs){
    let b= []
    let c=[]
    let r=[]
    for (let a= 0; a < rows.length; a++) {
        r.push(solution(rows[a], quantity)) 
        c.push(solution(cols[a], quantity)) 
        b.push(solution(boxs[a], quantity)) 
    }
    let concat= {rows: r, boxs: b, cols: c}
    return concat
}

function findRepsIn(entity, quantity, rows, cols, boxs){
    let b= []
    let c=[]
    let r=[]
    let concat
    for (let a= 0; a < rows.length; a++) {
        if(entity==='rows') {r.push(solution(rows[a], quantity)) ; concat= r}
        if(entity==='cols') {c.push(solution(cols[a], quantity)) ; concat= c}
        if(entity==='boxs') {b.push(solution(boxs[a], quantity)) ; concat= b}
    }
    return concat
}

export {
    findReps,
    findRepsIn,
}