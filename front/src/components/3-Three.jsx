import React from "react";
import Four from "./4-Four";

export default function Three({row, rows, module, carga, sendFill, cols, boxs, qubs}) { //each row with 9 squares

    return (
        <div> 
            {row.map((r, i) =><Four loyalindex={module[i]} unity={row[i]} carga={carga && carga} key={i} sendFill={sendFill} rows={rows} cols={cols} boxs={boxs} qubs={qubs}/>)}
        </div>
    )
} 