import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSudoku, setSettings } from "../redux/actions";
import '../styles/setup2.css';
import { Difficulty, Gramma, Sizes } from "./functions";

export default function Setup2(){

    //Redux
    let dispatch = useDispatch()
    let setts = useSelector(state => state.settings)
    // console.log('setts: ...', setts)
    
    //React Hooks
    let [conf, setConf] = useState({...setts})

    let possibleSizes = Sizes(25)
    let possibleDifficulty = Difficulty()

    function config(e, place){
        setts[place] = parseFloat(e.target.value)
        dispatch(setSettings(setts))
        // console.log('setts: ...', setts)

    }

    function localChange(place){
        setConf({
            ...conf,
            [place]: setts[place]
        })
    }

    function confirm(){
        dispatch(setSettings({...setts,ready:true}))
    }

    return (
        <div className="setup2">
<<<<<<< HEAD
            <h3>Configuraciones</h3>
            <form>
                <fieldset className="field">
                    <div className="question">
                        <label>Tamaño</label>
                        <select onChange={(e)=>config(e, 'size')}>
                            {possibleSizes.map((p,i)=><option key={i}>{p}</option>)}
                        </select>
                        <button className="buttonapply" onClick={()=>localChange('size')}>
                            Aplicar
                        </button>
                    </div>
                    {/* <div className="prod">
                        {cnf.size}
                    </div> */}
                </fieldset>
                <fieldset className="field">
                    <div className="question">
                        <label>Dificultad</label>
                        <select  onChange={(e)=>config(e, 'difficulty')} defaultValue={cnf['difficulty']} >
                            {possibleDifficulty.map((m,i)=><option  key={i}>{m}</option>)}
                        </select>  
                        <button className="buttonapply" onClick={()=>localChange('difficulty')}>
                            Aplicar
                        </button>
=======
            Configuraciones
            <div className="table">
                <div className="left">
                    <div className="size">
                        <div className="text">
                            Tamaño
                        </div>
                        <div className="select">
                            <select onChange={(e)=>config(e, 'size')}>
                                {possibleSizes.map((p,i)=><option key={i}>{p}</option>)}
                            </select>
                        </div>
                        <div className="apply">
                            <button className="buttonapply" onClick={()=>localChange('size')}>
                                Aplicar
                            </button>
                            <div className="prod">
                                {conf.size}
                            </div>
                        </div>
                    </div>
                    <div className="diff">
                        <div className="text">
                            Dificultad
                        </div>
                        <div className="select">
                            <select  onChange={(e)=>config(e, 'difficulty')} defaultValue={conf['difficulty']} >
                                {possibleDifficulty.map((m,i)=><option  key={i}>{m}</option>)}
                            </select>
                        </div>
                        <div className="apply">
                            <button className="buttonapply" onClick={()=>localChange('difficulty')}>
                                Aplicar
                            </button>
                            <div className="prod">
                                {conf.difficulty}
                            </div>
                        </div>
>>>>>>> a9afb41f56681bfd4f00758fb951a259ea37abe8
                    </div>
                    {/* <div>
                        {cnf.difficulty}
                    </div> */}
                </fieldset>
                <div className="legend">
                    Será creado un sudoku de {cnf.size} * {cnf.size} ({cnf.size*cnf.size} casilleros), de dificultad {cnf.difficulty} ({Gramma(cnf.difficulty)}) 
                </div>
<<<<<<< HEAD
                <button className="ok" onClick={confirm}>
                    Confirmo
                </button>
            </form>
=======
                <div className="right">
                    <div className="legend">
                        Será creado un sudoku de {conf.size} * {conf.size} ({conf.size*conf.size} casilleros), de dificultad {conf.difficulty} ({Gramma(conf.difficulty)}) 
                    </div>
                    <button className="ok" onClick={confirm}>
                        Confirmo
                    </button>
                </div>
            </div>
>>>>>>> a9afb41f56681bfd4f00758fb951a259ea37abe8
        </div>
    )
}