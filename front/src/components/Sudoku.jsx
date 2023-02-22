import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateEvery } from "../functions/14-Global";
import { Seniority } from "../functions/7-Seniority";
import { getSudoku, setSettings } from "../redux/actions";
import Two from "./2-Two";
import { Inverter } from "./functions";

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
    }, [setts.ready]);

    // React Hooks

    let [ready, setReady] = useState(undefined)

    useEffect(()=>{
        if(sudoku.rows) {
            let diff = Seniority(Inverter(setts.difficulty), Math.pow(sudoku.rows.length, 2))
            let diffSudoku = supQubs(sudoku, diff)
            setReady(updateEvery(Math.pow(setts.size,2), sudoku.rows, sudoku.cols, sudoku.boxs, sudoku.qubs))
        }
    }, [sudoku]);

    function supQubs(sud, dif){ // (suprimirQubs) | params -> sud: completo; dif: array con qubs a colocar
        for(let a= 0; a< dif.length; a++){ // recorrer sus qubs
            sud.qubs[dif[a]] = 0
        }
        return sud
    }

    return (
        <div>
            {ready && ready.rows && 
                <Two rows={ready.rows} sizing={setts.size} cols={ready.cols} qubs={sudoku.qubs} boxs={ready.boxs}/>
            }
        </div>
    )
}