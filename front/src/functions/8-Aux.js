function sqrt(num){

    if(Math.sqrt(num)%1===0){
        return true
    }
    if(Math.sqrt(num)%1!==0){
        return false
    }

}

function ret(n) { // function que rige la filosofía de sudoqubs
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

export {
    sqrt,
    boxSize,
    ret
}