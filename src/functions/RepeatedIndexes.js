export default function RepeatedIndexes(repsRows){

    let indexs= []

    for(let ab= 0; ab< repsRows.length; ab++){

        indexs[ab]= []
        indexs[ab].push(repsRows[ab]['indice'])

        for(let ac= 0; ac< repsRows[ab]['subindice'].length; ac++){

            // console.log(repsRows[ab]['subindice'][ac]) //ÍNDICES
            indexs[ab].push(repsRows[ab]['subindice'][ac]['reps'])

        }

    }

    return indexs

}