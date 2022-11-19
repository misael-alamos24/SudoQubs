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

export {
    Seniority,
}