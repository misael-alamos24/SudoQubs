import { detectPrime } from "../functions/9-PrimeNumber"

export function Sizes (max){
    let able = []

    for(let a=0; a<= max; a++){
        if(detectPrime(a)) continue
        if(!detectPrime(a)) able.push(a)
    }
    return able
}

export function Difficulty(){

    let possibleDifficulty = new Array(10)
    let one = 1
    possibleDifficulty.fill(one)
    possibleDifficulty.map((d,i)=> possibleDifficulty[i] = one++ )

    return possibleDifficulty
}

export function Gramma(number){
    if(number > 0 && number <=3 ) return 'difícil'
    else if(number > 3 && number <=6 ) return 'intermedia'
    else if(number > 6 && number <=10 ) return 'fácil' 
}