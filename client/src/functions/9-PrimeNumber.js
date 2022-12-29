function detectPrime(num){ //si es primo {true}; else {false}
    for(let a=2; a< num; a++){
        if(num % a===0) return false
    }
    return true
}

export {
    detectPrime,
}