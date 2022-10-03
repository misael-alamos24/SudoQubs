import { useState } from 'react';
import '../styles/0-zero.css';
import { qubs, update, cols, boxs, restore, poss, detectdifficulty, megasolution, howmanyQubs, pointerMistakes, rows_cols_to_squares, getBoxFromQ } from '../functions/2-Estructures.js';
import { solution } from '../functions/0-Unrepeatable.js';

// const { qubs, update, cols, boxs, restore } = require('../functions/2-Estructures.js');
// const { solution } = require('../functions/0-Unrepeatable.js');
// const { create } = require('../functions/3-Creator.js')


export default function Four({unity, rows, loyalindex, carga, sendFill, sendRepsRows, sendRepsCols, sendRepsBoxs, sending}){

    let [filas, setFilas]= useState(rows)
    let [reps, setReps]= useState([])
    let [noreps, setNoreps]= useState([])
    
    function changeEach(e){
        console.log("unity, value", unity, loyalindex, e.target.value)
        var val= e.target.value
        if(val===''){
            unity= 0
        }
        if(val!==''){
            unity= parseInt(val)
        }
        qubs[loyalindex]= unity
        setFilas(update(loyalindex))
        sendFill(howmanyQubs(rows))
        // console.log("megasolution", megasolution()[rows])
        let repsRows=pointerMistakes('rows', megasolution(2), 2)
        let repsCols=pointerMistakes('cols', megasolution())
        let repsBoxs=pointerMistakes('boxs', megasolution())

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
            let color= noReps[ohmega] % 2===0? 'orange':'yellow'
            console.log(noReps[ohmega], color)
            document.getElementsByTagName('input')[noReps[ohmega]].style.color= color
        }
        setReps(squares)

        // setNoreps(...noreps)


        //LO ÚLTIMO POR HACER ES EL SET DEL STATE

        // let first, second1, second2, sq=[], sq1, sq2

        // // if(typeof repsRows==='object'){
        // if(repsRows.length){
        // //     // console.log(repsRows, reps, reps[0], reps[0][0], reps[0][0][0])
        // //     for(let d=0; d<reps.length;d++){
        // //         for(let f=0; f<reps[d].length; f++){
        // //             for(let g=0; g<reps[d][f].length; g++){
        // //                 let color= reps[d][f][g] % 2===0? 'orange':'yellow'
        // //                 document.getElementsByTagName('input')[reps[d][f][g]].style.color= color
        // //                 console.log(reps.length, reps[d][f][g], color)

        // //             }
        // //         }
        // //     }
        //     let par= 0
        //     // setReps([...reps=[]])
        //     // console.log(repsRows['subindice'].length)
        //     for(let aa=0; aa<repsRows.length; aa++){
        //         let index= repsRows[aa].indice
        //         for(let a=0; a<repsRows[aa]['subindice'].length; a++){
        //             let toSave= repsRows[aa]['subindice'][a].reps
        //             //toSave is an Array, so we must iterate in it to get the wanted square
        //             sq1= (rows_cols_to_squares(index, toSave[0], 'rows')) 
        //             sq[par]= []
        //             sq[par].push(sq1)
        //             sq2= (rows_cols_to_squares(index, toSave[1], 'rows')) 
        //             sq[par].push(sq2)
        //             document.getElementsByTagName('input')[sq1].style.color= 'red'
        //             document.getElementsByTagName('input')[sq2].style.color= 'red'
        //             par++
        //         }
        //     }
        //     setReps([...reps, sq])
        //     console.log([...reps, sq])
        //     console.log(repsRows)

        //     // first= repsRows['indice']
        //     // for(let a=0; a<repsRows['subindice'].length; a++){
        //     //     second1= repsRows['subindice'][a][0]
        //     //     second2= repsRows['subindice'][a][1]
        //     //     sq1= rows_cols_to_squares(first, second1, 'rows')  
        //     //     sq2= rows_cols_to_squares(first, second2, 'rows')                
        //     // }

        //     // first= repsRows['indice']
        //     // second1= repsRows['subindice']['reps'][0]
        //     // second2= repsRows['subindice']['reps'][1]
        //     // sq1= rows_cols_to_squares(first, second1, 'rows')
        //     // sq2= rows_cols_to_squares(first, second2, 'rows')
        //     // document.getElementsByTagName('input')[sq1].style.color= 'red'
        //     // document.getElementsByTagName('input')[sq2].style.color= 'red'

        //     // setReps([...reps, [sq1, sq2]])
        // }
        // if(!repsRows && reps.length){
        //     reps.map((r,e)=> {
        //         document.getElementsByTagName('input')[reps[e][0]].style.color= 'orange'
        //         document.getElementsByTagName('input')[reps[e][1]].style.color= 'orange'
        //     })
        // }

        // if(repsRows!== undefined){
            // sendRepsRows(repsRows)
        // }
        // if(repsCols!== undefined){
            // sendRepsCols(repsCols)
        // }
        // if(repsBoxs!== undefined){
            // sendRepsBoxs(repsBoxs)
        // }
        // console.log(filas, 'cols: ', cols, 'boxs: ', boxs)

        function politica1(){if(val===''){
            return document.getElementsByTagName("input")[loyalindex].value=''
        }}
        politica1()
        function politica2(){if(parseInt(val)!==parseInt(val) || val==='0' || val==='') { // si no es un número, se desconsidera
            return document.getElementsByTagName("input")[loyalindex].value=''
        }}
        politica2()
        function politica3(){if(e.target.value.length > 1) { // si la cadena es mayor a 1, se considera solo el [0]
            politica2()
            return document.getElementsByTagName("input")[loyalindex].value= val[0]
        }}      
        politica3()

    }

    // let [once, setOnce] = useState(false)
    // if (sending['t'] && !once){
    //     console.log(sending)
    //     setOnce(true)
    // }
    // document.getElementsByTagName('input')[0].style.color= 'red'


    if (carga) {
        if(unity!==0){
            document.getElementsByTagName("input")[loyalindex].value= unity
        }
        if(unity===0){
            document.getElementsByTagName("input")[loyalindex].value= ''
        }
    }

    let box_Array= getBoxFromQ(loyalindex)
    let back= box_Array[0]%2===0? 'black' : 'rgb(30,20,10)'

    return (
            <span >
                <input 
                // id={repeat ? 'rep':''} 
                className=
                // {(prop%9!== 0 && prop%3 === 0)?'border': (divis === 3 || divis === 6)? 'under':
                {loyalindex%2===0?'unity':'impar'}
                style={{backgroundColor: back}}
                // // value= {each}
                onChange= {e=>changeEach(e)}
                // // name= {each}
                />
            </span>
    )
}