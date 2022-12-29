import { useState } from "react"

export default function ChangeState(reps, squares, setState){

        let noReps= []
        
        for(let delta=0;delta<reps.length;delta++){
            let test=[]
            let e= 0
            for(let eco=0;eco<squares.length;eco++){
                
                if(reps[delta]===squares[eco]){
                    test.push(1)
                }
                e= eco
            }
            if(!test.length){
                noReps.push(reps[delta])
            }
        }

        for(let ohmega=0; ohmega< noReps.length; ohmega++){
            let color= noReps[ohmega] % 2===0? 'orange':'orangered'
            // console.log(noReps[ohmega], color)
            document.getElementsByTagName('input')[noReps[ohmega]].style.color= color
        }

        setState(squares)

}