import { useState } from 'react';
import '../styles/0-zero.css';
import { qubs, update, cols, boxs, restore, poss, detectdifficulty, megasolution, howmanyQubs, pointerMistakes, rows_cols_to_squares, getBoxFromQ } from '../functions/2-Estructures.js';
import { solution } from '../functions/0-Unrepeatable.js';
import { type } from '@testing-library/user-event/dist/type';

// const { qubs, update, cols, boxs, restore } = require('../functions/2-Estructures.js');
// const { solution } = require('../functions/0-Unrepeatable.js');
// const { create } = require('../functions/3-Creator.js')


export default function Four({unity, rows, loyalindex, carga, sendFill, sendRepsRows, sendRepsCols, sendRepsBoxs, sending}){

    //ESTADOS LOCALES
    let [filas, setFilas]= useState(rows) 
    let [reps, setReps]= useState([])
    let [noreps, setNoreps]= useState([ ])
    let [input, setInput] = useState({ }) //Estado que maneja cada input del sudoku


    //FUNCIONES
    //Función que se ejecuta por cada ingreso de cualquier caracter en cualquier casilla:
    function changeEach(e){

        var val= e.target.value
        console.log("unity, typeof loyalindex, val, typeof val", unity, loyalindex, val, typeof val)
        console.log(isNaN(val))
        
        //_______________________________________________________
        //LÍNEA QUE NO ADMITE UNA CADENA DE LARGO MAYOR A 1
        if(val.length > 1) return setInput({...input, [loyalindex]: val[0]})
        //MÓDULO QUE SOLO DEJA ENTRAR NÚMEROS ENTRE EL 1 AL 9
        if(isNaN(val) || val === 0 || val === '0') return setInput({...input, [loyalindex]: ''})

        setInput({...input, [loyalindex]: val}) 
        // ______________________________________________________


        if(val===''){ //Si se borra un numero va a llegar un string vacío
            unity= 0
        }
        if(val!==''){
            unity= parseInt(val)
        }

        qubs[loyalindex]= unity
        setFilas(update(loyalindex)) //CON ESTE update(q) ACTUALIZO TODAS LAS ENTIDADES (COLUMNAS, FILAS y CAJAS)
        sendFill(howmanyQubs(rows)) //ESTE ES PARA CONTAR CUÁNTOS CASILLEROS ESTÁN LLENOS y CUÁNTOS VACÍOS
        
        let repsRows=pointerMistakes('rows', megasolution(2), 2) //DETECTOR DE REPETICIONES EN LAS FILAS
        let repsCols=pointerMistakes('cols', megasolution()) //PARA DETECTAR REPETICIONES EN LAS COLUMNAS
        let repsBoxs=pointerMistakes('boxs', megasolution()) //PARA DETECTAR REPETICIONES EN LAS CAJAS

        console.log(repsRows)

        let indexs= []
        for(let ab= 0; ab< repsRows.length; ab++){
            indexs[ab]= []
            indexs[ab].push(repsRows[ab]['indice'])
            for(let ac= 0; ac< repsRows[ab]['subindice'].length; ac++){
                // console.log(repsRows[ab]['subindice'][ac]) //ÍNDICES
                indexs[ab].push(repsRows[ab]['subindice'][ac]['reps'])
            }
        }
        console.log( indexs)
        let squares= []
        for (let i = 0; i < indexs.length; i++) {
            let first= indexs[i][0]
            console.log('first', first)
            for (let u=1;u<indexs[i].length;u++) {
                let second1= indexs[i][u][0]
                let second2= indexs[i][u][1]
                console.log('second', second1, second2)
                let sq1= rows_cols_to_squares(first, second1, 'rows')
                let sq2= rows_cols_to_squares(first, second2, 'rows')
                squares.push(sq1, sq2)
            }
        }
        console.log(squares)
        //HASTA ACÄ TODO 10 PUNTOS

        //ANTES HAY QUE HACER LA COMPARACIÓN ENTRE useState() Y pointerMistakes()
        //EN BASE A ESO, MANDAR A PINTAR Y MANDAR A DESPINTAR
        for(let gamma= 0; gamma<squares.length; gamma++){
            // console.log(squares[gamma][0])
            // console.log(squares[gamma][1])
            document.getElementsByTagName('input')[squares[gamma]].style.color= 'red'
            document.getElementsByTagName('input')[squares[gamma]].style.color= 'red'
        }
        //Y PUDIERA SER QUE HASTA ACÁ, PERFECTO TAMBIÉN

        //LO QUE VIENE AHORA SERÍA LO RECIÉN MENCIONADO SOBRE COMPARAR PARA DESPINTAR
        //TRAEME useState() que contiene lo de la anterior vuelta, (1)
        //SI ES DISTINTO DE VACÍO, LO ANALIZAMOS. (2)
        //Recordar que useState() siempre va a guardar todos los datos que le mandemos.
        //Si nada los borra, quedan ahí. Entonces:
        //SI useState() PRESENTA DATOS DE pointerMistakes(), IGNORAR ESTOS (3)
        //SI PRESENTA DATOS QUE pointerMistakes() NO REGISTRÓ, DESPINTARLOS (4)

        //Nota: al mencionar pointerMistakes(), hacemos referencia al post-producto: es decir los squares que están dentro del Array squares

        let noReps= []
        // if(reps.length){ //(1), (2)
            for(let delta=0;delta<reps.length;delta++){
                let test=[]
                let e= 0
                for(let eco=0;eco<squares.length;eco++){
                    // if(eco===delta)continue
                    // if(reps[delta][0]===squares[eco][0]){
                    //     console.log('continue en 0')
                    // }
                    // if(reps[delta][1]===squares[eco][1]){
                    //     console.log('continue en 1')
                    // }
                    if(reps[delta]===squares[eco]){
                        // console.log(reps[delta, squares[eco]], ' iguales')
                        test.push(1)
                    }
                    e= eco
                    // if(!test.length && e===squares.length-1){
                    //     noReps.push(reps[delta])
                    // }
                }
                if(!test.length){
                    noReps.push(reps[delta])
                }
            }
        // }
        console.log(reps, squares, noReps)
        for(let ohmega=0; ohmega< noReps.length; ohmega++){
            let color= noReps[ohmega] % 2===0? 'orange':'orangered'
            console.log(noReps[ohmega], color)
            document.getElementsByTagName('input')[noReps[ohmega]].style.color= color
        }
        setReps(squares)

    }

    //CONDICIONALES 
    //Cuando el botón Cargar se pulsa, carga es === true, y el sudoku se llena con los datos del algoritmo generador
    if (carga) {
        if(unity!==0){
            document.getElementsByTagName("input")[loyalindex].value= unity
        }
        if(typeof unity !== 'number' || isNaN(unity)){
            console.log(unity, typeof unity, loyalindex)
            document.getElementsByTagName("input")[loyalindex].value= 0
        }
        if(unity===0 ){
            document.getElementsByTagName("input")[loyalindex].value= ''
        }
    }

    //UN DETALLE ESTÉTICO PARA CAMBIAR EL COLOR DE FONDO DE LAS CAJAS (VER EN EL BROWSER)
    let box_Array= getBoxFromQ(loyalindex)
    let back= box_Array[0]%2===0? 'black' : 'rgb(30,20,10)'
    
    if(loyalindex===80){
    }

    return (
            <span >
                <input type='text' // No hace falta que sea type = 'number', con el Estado Local lo solucionamos
                value= {input[loyalindex]} // Esto es clave para que la última palabra la tenga el Estado Local con sus validaciones de si es un número entre 1 y 9
                className= {loyalindex%2===0?'unity':'impar'} // Define el color de los números (ver en el browser)
                style={{backgroundColor: back}} // Define el color de fondo de las cajas
                onChange= {e=>changeEach(e)}
                />
            </span>
    )
}