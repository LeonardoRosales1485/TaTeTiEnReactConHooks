import React from "react";
import Celda from "./celda.jsx";

export default function Tablero({ celdas, onClick}){
  return(
    <div className='board'>
        {celdas.map((celda, i) => (
          <Celda key={i} valor={celda} onClick={() => onClick(i)} />
        ))}
    </div>
  )
}
