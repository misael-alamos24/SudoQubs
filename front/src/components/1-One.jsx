// import { useState } from "react"
// import { createSelect } from "../functions/7-Seniority"
// import { detectPrime } from "../functions/9-PrimeNumber"
// import Auxiliar from "./1-Oneandhalf"
// // import Two from "./2-Two"
// import Setup from "./Setup"
import Setup2 from "./Setup2"
import Sudoku from "./Sudoku"

export default function One(){

    // let [sizing, setSizing] = useState()
    // let [applysize, setApplysize] = useState(4)
    // let [level, setLevel] = useState(1)

    // function changeLevel(e){
    //     let val= e.target.value
    //     // console.log(val, typeof val)
    //     // if(val==='') return setLevel() //si está vacío, return
    //     // if(typeof parseInt(val)!== 'number')  return setLevel() //si al parsearlo es distinto de number, return
    //     // let num= parseInt(val)
    //     // if(num<1 || num>10)  return setLevel() //si excedemos los límites, return
    //     return setLevel(val)
    // }

    // let sizing

    // function Possibilities (max){
    //     let able = []
    
    //     for(let a=0; a<= max; a++){
    //         if(detectPrime(a)) continue
    //         if(!detectPrime(a)) able.push(a)
    //     }
    //     return able
    // }

    // function handSelect(e){
    //     sizing= (e.target.value)
    // }

    // function apply(){
    //     setApplysize((sizing)) 
    // }

    // let ar= createSelect(10)

    return (
        <div>
            {/* <Setup/> */}
            <Setup2/>
            <Sudoku/>
            {/* <h3>Configuración del sudoku</h3> */}
            {/* <label>Sudoku de <b>{applysize}</b> x <b>{applysize}</b></label>
            <br/>
            <label htmlFor="">Tamaño</label>
            <select onClick={(e)=>handSelect(e)}> 
                {able.map((a,i)=><option  key={i}>{a}</option> )}
            </select>
            <button onClick={()=>apply()}>
                Aplicar
            </button>
            <br/>
            <label>Nivel de dificultad</label>
            <select onChange={(e)=>changeLevel(e)}>
                {ar.map((a,i)=><option key={i}>{a}</option>)}
            </select> */}
            { 
            // <Auxiliar sizing={applysize} level={level? level: 5} />
            }
        </div>
    )
}