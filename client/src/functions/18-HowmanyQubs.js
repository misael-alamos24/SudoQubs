
export default function howmanyQubs(rows){
    let cont= []
    for(let a=0; a<rows.length; a++){
        for(let b=0; b<rows[a].length;b++){
            if(rows[a][b]!==0){
                cont.push(rows[a][b])
            }
        }
    }
    return cont.length
}

// export {
//     howmanyQubs,
// }