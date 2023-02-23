import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateEvery } from "../functions/14-Global";
import { Seniority } from "../functions/7-Seniority";
import { cleanSudoku, getSudoku, setSettings } from "../redux/actions";
import Two from "./2-Two";
import { Inverter } from "./functions";

export default function Sudoku(){

    let dispatch = useDispatch()
    let setts = useSelector(state=> state.settings)
    let s = useSelector(state=> state.rows)
    let sudoku= s.sudoku ? s.sudoku : s
    
    let [localsize, setLocalsize] = useState(4)

    useEffect(()=>{
        if(setts.ready) {
            setReady(undefined)
            setDiff([])
            setLocalsize(setts.size)
            dispatch(cleanSudoku())
        }
    }, [setts.ready]);

    useEffect(()=> {
        if(!Object.keys(sudoku).length && setts.ready){
            dispatch(getSudoku(setts.size))
            dispatch(setSettings({
                ...setts,
                ready: false,
            }))
        }
    }, [sudoku])

    // React Hooks

    let [ready, setReady] = useState(undefined)
    let [diff, setDiff] = useState([])

    useEffect(()=>{
        if(sudoku.rows) setDiff(Seniority(Inverter(setts.difficulty), Math.pow(sudoku.rows.length, 2)))
    }, [sudoku]);

    useEffect(()=>{
        if(diff.length){
            supQubs(sudoku, diff)
            setReady(updateEvery(Math.pow(setts.size,2), sudoku.rows, sudoku.cols, sudoku.boxs, sudoku.qubs))
        }
    }, [diff]); 

    function supQubs(sud, dif){ // (suprimirQubs) | params -> sud: completo; dif: array con qubs a colocar
        for(let a= 0; a< dif.length; a++){ // recorrer sus qubs
            sud.qubs[dif[a]] = 0
        }
        return sud
    }

    return (
        <div>
            {ready && ready.rows && 
                <Two rows={ready.rows} sizing={localsize} cols={ready.cols} qubs={sudoku.qubs} boxs={ready.boxs} diff={diff}/>
            }
        </div>
    )
}