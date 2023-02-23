import React from "react";
import Four from "./4-Four";

export default function Three({row, rows, module, carga, sendFill, cols, boxs, qubs, diff}) { //each row with 9 squares
    // console.log(module)

    return (
        <div> 
            {row.map((r, i) =><Four diff={diff} loyalindex={module[i]} unity={row[i]} carga={carga && carga} key={i} sendFill={sendFill} rows={rows} cols={cols} boxs={boxs} qubs={qubs}/>)}
        </div>
    )
} 