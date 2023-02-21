import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateEvery } from "../functions/14-Global";
import { Seniority } from "../functions/7-Seniority";
import { getSudoku, setSettings } from "../redux/actions";
import Two from "./2-Two";

export default function Sudoku(){

    let dispatch = useDispatch()
    let setts = useSelector(state=> state.settings)
    let s = useSelector(state=> state.rows)
    let sudoku= s.sudoku ? s.sudoku : s

    useEffect(()=>{
        if(setts.ready) {
            dispatch(getSudoku(setts.size))
            dispatch(setSettings({
                ...setts,
                ready: false,
            }))
        }
    }, [setts.ready])

    // console.log('sudoku: ...', sudoku)
    
    //Módulo de la dificultad: extrae casilleros ya definidos 
    let[diff, setDiff] = useState([])
    let[sudo, setSudo] = useState({})

    sudoku.rows && !diff.length && setDiff(Seniority(setts.difficulty, Math.pow(sudoku.rows.length, 2)))
    // diff.length && console.log(diff, sudoku.rows)
    diff.length && !Object.keys(sudo).length && supQubs(sudoku, diff)

    function supQubs(sud, dif){ // sud: completo; dif: array con qubs a colocar
        for(let a= 0; a< dif.length; a++){ // recorrer sus qubs
            sud.qubs[dif[a]] = 0
        }
        setSudo(sud)
    }

    // console.log(sudo)

    let some
    if(sudoku.rows) {
        some = updateEvery(Math.pow(setts.size,2), sudoku.rows, sudoku.cols, sudoku.boxs, sudoku.qubs)
        console.log(some)
    }

    return (
        <div>
            {sudoku.rows && 
                <Two rows={sudoku.rows} sizing={setts.size} cols={sudoku.cols} qubs={sudoku.qubs} boxs={sudoku.boxs}/>
                }
        </div>
    )
}