import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSettings } from '../redux/actions';
import '../styles/setup.css';
import { Difficulty, Gramma, Sizes } from './functions';
// import '../styles/form.css';

export default function Setup(){

    //Redux
    let dispatch = useDispatch()
    let setts = useSelector(state => state.settings)
    // console.log('setts: ...', setts)
    
    //React Hooks
    let [cnf, setConf] = useState({...setts})

    let possibleSizes = Sizes(25)
    let possibleDifficulty = Difficulty()

    function config(e, place){
        setts[place] = parseFloat(e.target.value)
        dispatch(setSettings(setts))
        // console.log('setts: ...', setts)

    }

    function localChange(place){
        setConf({
            ...cnf,
            [place]: setts[place]
        })
    }

    function confirm(){
        dispatch(setSettings({...setts,ready:true}))
    }

    return (
        <div className="contenedor formulario">
            {/* <form action="GET" className="contenedor formulario"> */}
                <div className="fieldset">
                    <label className="label">Tamaño</label>
                    <select onChange={(e)=>config(e, 'size')}>
                        {possibleSizes.map((p,i)=><option key={i}>{p}</option>)}
                    </select>
                    <button className="buttonapply" onClick={()=>localChange('size')}>
                        Aplicar
                    </button>
                    <div className="prod number">
                        {cnf.size}
                    </div>
                </div>

                <div className="fieldset">
                    <label className="label">Dificultad</label>
                    <select  onChange={(e)=>config(e, 'difficulty')} defaultValue={cnf['difficulty']} >
                        {possibleDifficulty.map((m,i)=><option  key={i}>{m}</option>)}
                    </select>
                    <button className="buttonapply" onClick={()=>localChange('difficulty')}>
                        Aplicar
                    </button>
                    <div className="prod number">
                        {cnf.difficulty}
                    </div>
                </div>

                <div className="alert">
                    <p> Será creado un sudoku de {cnf.size} * {cnf.size} ({cnf.size*cnf.size} casilleros), de dificultad {cnf.difficulty} ({Gramma(cnf.difficulty)}) 
                    </p>
                </div>
                <div className="alert">
                    <p>Confirma su Elección?</p>                        
                    <button className="ok btn-submit" onClick={confirm}>
                        Confirmo
                    </button>
                </div>
            {/* </form> */}
        </div>
    )
}