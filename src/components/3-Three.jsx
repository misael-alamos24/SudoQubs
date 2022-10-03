import React from "react";
import Four from "./4-Four";

export default function Three({row, rows, module, carga, sendFill, sendRepsBoxs, sendRepsCols, sendRepsRows, sending}) { //each row with 9 squares

    // console.log(module)
    let b

    return (
        <div> 
            {/* {row.map((r, i)=> b= module[i] )} */}
            {row.map((r, i) =><Four loyalindex={module[i]} unity={row[i]} carga={carga && carga} key={i} sendFill={sendFill} rows={rows} sendRepsBoxs={sendRepsBoxs} sendRepsCols={sendRepsCols} sendRepsRows={sendRepsRows} sending={sending}/>)
            }
        </div>
    )
} 