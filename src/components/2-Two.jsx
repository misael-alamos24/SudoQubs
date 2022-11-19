import React from "react";
import { useState } from "react";
import howmanyQubs from "../functions/18-HowmanyQubs";
// import { boxs, cols, create3, detectdifficulty, megasolution, poss, possRandC, qubs, restore, rows, sudoku, update, howmanyQubs, rows_cols_to_squares } from "../functions/2-Estructures";

import Three from "./3-Three";

export default function Two({rows, cols, qubs, boxs, sizing}) { //9 rows con 9 squares cada una  

    let [fill, sendFill] = useState()
    let [carga, setCarga] = useState(false)

    let numbers= new Array()
    let modules= new Array()
    
    for(let nn= 0; nn< sizing * sizing; nn++){
        numbers.push(nn)
    }
    for (let mm= 0; mm< sizing; mm++){
        modules.push(numbers.slice( mm * sizing , (mm + 1) * sizing ))
    }

    function cargar(){
        setCarga(true)
    }

    let initFilled= howmanyQubs(rows)

    return (
        <div>
            <h6 style={{color:'white'}}>
                {(!fill && initFilled) || (fill && fill)}/{sizing*sizing} casilleros completos
            </h6>
            {/* {rows && rows.length > 0 && rows.map((r, i)=> {a= modules[i]; console.log(a)} )} */}
            {rows.map((r, i)=> <Three key={i} rows={rows} row={r} module={modules[i]} carga={carga && carga} sendFill={sendFill} cols={cols} boxs={boxs} qubs={qubs}/>)}
            <button onClick={cargar} >
                Cargar
            </button>
            {/* <input type='text' placeholder='not only text' name='sudoku' value={input} onChange={(e)=>change(e)} /> */}

            {/* después puede haber un ranking del mismo jugador para cada nivel que 
            compita, tipo jugó en 3 niveles, su ranking tiene 3 particiones, algo así
            como un club que tiene divisiones inferiores, las cuales son independientes
            en tanto a posición en la tabla se refiere */}
        </div>
    )
} 