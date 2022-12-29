
function Wrongs(entityString, concat, quantity){
    
    let response= []
    let e= concat[entityString]
    for(let a=0; a<e.length; a++){
        if(e[a]!==-1){
            response.push({
                indice: a,
                subindice: e[a]
            })
        }
    }
    if(quantity> 1){
        return response
    }
    if(!quantity || quantity===1){
        return [response[0]]
    }
}

export {
    Wrongs,
}