import { useState } from "react"
import { detectPrime } from "../functions/9-PrimeNumber"
import Auxiliar from "./1-Oneandhalf"
import Two from "./2-Two"

export default function One(){

    // let [sizing, setSizing] = useState()
    let [applysize, setApplysize] = useState()
    let sizing

    let able = []

    for(let a=0; a< 26; a++){
        if(detectPrime(a)) continue
        if(!detectPrime(a)) able.push(a)
    }

    function handSelect(e){
        sizing= (e.target.value)
    }

    function apply(){
        setApplysize((sizing)) 
    }

    return (
        <div>
            {/* <h3>Dimensiones del sudoku</h3> */}
            <label><b>{applysize}</b> x <b>{applysize}</b></label>
            <br/>
            <select onChange={(e)=>handSelect(e)}> 
                {able.map((a,i)=><option  key={i}>{a}</option> )}
            </select>
            <button onClick={()=>apply()}>
                Aplicar
            </button>{ applysize &&
            <Auxiliar sizing={applysize} />}
        </div>
    )
}