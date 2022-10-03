// import React, { useState } from 'react';
// import '../styles/0-zero.css';
// const { solution } = require('../functions/0-Unrepeatable');

// export default function Zero({unity, rows}){

//     var repeat= false
//     // console.log(unity)
//     var prop
//     for (let a in unity) {
//         prop= a
//         // console.log(prop)
//     }

//     let[each, setEach]= useState()
//     let [qub, setQub]= useState()

//     function changeEach(e){
//         console.log("unity, value", unity, e.target.value)
//         var val= e.target.value
//         for (let a in unity) {
//             prop= a
//             // console.log(unity[a])
//         }
//         if(parseInt(val)!==parseInt(val) || val==='0') { // si no es un número, se desconsidera
//             // console.log(unity[a], a)
//             return document.getElementsByTagName("input")[prop-1].value=''
//             // return document.getElementsByTagName("input")[0].value=''
//         }
//         if(e.target.value.length > 1) { // si la cadena es mayor a 1, se considera solo el [0]
//             return document.getElementsByTagName("input")[prop-1].value= val[0]
//         }
//         console.log(rows)
//         for(let n= 0; n< 9; n++) {
//             console.log(solution(rows[n]))
//             if(solution(rows[n]) !== -1) {
//                 console.log(-1)
//                 repeat= true
//             }
//         }
//         unity[prop]= parseInt(val)
//         return setEach(val)
//     }

//     var divis= Math.ceil(prop / 9)

//     return (
//         <span >
//             <input id={repeat ? 'rep':''} className={(prop%9!== 0 && prop%3 === 0)?'border': (divis === 3 || divis === 6)? 'under':'unity'}
//             // value= {each}
//             onChange= {e=>changeEach(e)}
//             // name= {each}
//             />
//         </span>
//     )
// }