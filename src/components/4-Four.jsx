import { useState } from 'react';
import '../styles/0-zero.css';
import { qubs, update, cols, boxs, restore, poss, detectdifficulty, megasolution, howmanyQubs, pointerMistakes, rows_cols_to_squares, getBoxFromQ, boxs_to_squares } from '../functions/2-Estructures.js';
import { solution } from '../functions/0-Unrepeatable.js';
import { type } from '@testing-library/user-event/dist/type';
import RepeatedIndexes from '../functions/RepeatedIndexes';
import Squares from '../functions/Squares';
import ChangeColor from '../functions/ChangeColor';
import ChangeState from '../functions/ChangeState';

// const { qubs, update, cols, boxs, restore } = require('../functions/2-Estructures.js');
// const { solution } = require('../functions/0-Unrepeatable.js');
// const { create } = require('../functions/3-Creator.js')

export default function Four({unity, rows, loyalindex, carga, sendFill}){

    //ESTADOS LOCALES
    let [filas, setFilas]= useState(rows) 
    let [reps, setReps]= useState([])
    let [repsC, setRepsC]= useState([])
    let [repsB, setRepsB]= useState([])
    let [input, setInput] = useState({ }) //Estado que maneja cada input del sudoku

    // let [alter, setAlter] = useState([])


    //FUNCIONES
    //Función que se ejecuta por cada ingreso de cualquier caracter en cualquier casilla:
    function changeEach(e){

        var val= e.target.value
        // console.log("unity, typeof loyalindex, val, typeof val", unity, loyalindex, val, typeof val)
        // console.log(isNaN(val))
        
        //_______________________________________________________
        //LÍNEA QUE NO ADMITE UNA CADENA DE LARGO MAYOR A 1
        if(val.length > 1) return setInput({...input, [loyalindex]: val[0]})

        // if(!alter[loyalindex]) return setInput({...input, [loyalindex]: unity})

        //MÓDULO QUE SOLO DEJA ENTRAR NÚMEROS ENTRE EL 1 AL 9
        if(isNaN(val) || val === 0 || val === '0') return setInput({...input, [loyalindex]: ''})

        setInput({...input, [loyalindex]: val}) 
        // ______________________________________________________

        if(val==='') unity= 0 //Si se borra un numero va a llegar un string vacío
        if(val!=='') unity= parseInt(val)

        qubs[loyalindex]= unity
        setFilas(update(loyalindex)) //CON ESTE update(q) ACTUALIZO TODAS LAS ENTIDADES (COLUMNAS, FILAS y CAJAS)
        sendFill(howmanyQubs(rows)) //ESTE ES PARA CONTAR CUÁNTOS CASILLEROS ESTÁN LLENOS y CUÁNTOS VACÍOS
        
        let repsRows=pointerMistakes('rows', megasolution(2), 2) //DETECTOR DE REPETICIONES EN LAS FILAS
        let repsCols=pointerMistakes('cols', megasolution(2), 2) //PARA DETECTAR REPETICIONES EN LAS COLUMNAS
        let repsBoxs=pointerMistakes('boxs', megasolution(2), 2) //PARA DETECTAR REPETICIONES EN LAS CAJAS

        // PARTE 'A' 
        let indexs= RepeatedIndexes( repsRows)   
        let indexsC= RepeatedIndexes( repsCols)
        let indexsB= RepeatedIndexes( repsBoxs)

        // PARTE 'B' 
        let squares= Squares(indexs, 'rows', rows_cols_to_squares)
        let squaresC= Squares(indexsC, 'cols', rows_cols_to_squares)
        let squaresB= Squares(indexsB, 'boxs', boxs_to_squares)

        // PARTE 'C' 
        ChangeColor(squares)
        ChangeColor(squaresC)
        ChangeColor(squaresB)

        // PARTE 'D' 
        ChangeState(reps, squares, setReps)
        ChangeState(repsC, squaresC, setRepsC)
        ChangeState(repsB, squaresB, setRepsB)

    }

    //CONDICIONALES 
    //Cuando el botón Cargar se pulsa, carga es === true, y el sudoku se llena con los datos del algoritmo generador
    if (carga) {
        if(unity!==0){
            document.getElementsByTagName("input")[loyalindex].value= unity
        }
        if(typeof unity !== 'number' || isNaN(unity)){
            // console.log(unity, typeof unity, loyalindex)
            document.getElementsByTagName("input")[loyalindex].value= 0
        }
        if(unity===0 ){
            document.getElementsByTagName("input")[loyalindex].value= ''
        }
    }

    //UN DETALLE ESTÉTICO PARA CAMBIAR EL COLOR DE FONDO DE LAS CAJAS (VER EN EL BROWSER)
    let box_Array= getBoxFromQ(loyalindex)
    let back= box_Array[0]%2===0? 'black' : 'rgb(30,20,10)'
    
    // console.log(alter)

    return (
            <span >
                <input type='text' // No hace falta que sea type = 'number', con el Estado Local lo solucionamos
                value= {input[loyalindex]} // Esto es clave para que la última palabra la tenga el Estado Local con sus validaciones de si es un número entre 1 y 9
                className= {loyalindex%2===0?'unity':'impar'} // Define el color de los números (ver en el browser)
                style={{backgroundColor: back}} // Define el color de fondo de las cajas
                onChange= {e=>changeEach(e)}
                // disabled={alter[loyalindex] ? false: true}
                />
            </span>
    )
}