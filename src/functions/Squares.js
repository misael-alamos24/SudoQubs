// import { rows_cols_to_squares } from "./2-Estructures"

export default function Squares(indexs, entity, callback){

    let squares= []

    for (let i = 0; i < indexs.length; i++) {

        let first= indexs[i][0]
        console.log('first', first)

        for (let u=1;u<indexs[i].length;u++) {

            let second1= indexs[i][u][0]
            let second2= indexs[i][u][1]
            console.log('second', second1, second2)
            let sq1= callback(first, second1, entity)
            let sq2= callback(first, second2, entity)
            squares.push(sq1, sq2)

        }

    }

    return squares

}