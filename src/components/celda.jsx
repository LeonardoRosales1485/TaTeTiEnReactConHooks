import React from "react";

export default function Celda({ valor, onClick }){
  const style = valor ? `celdas ${valor}` : `celdas`;

  return (
    <button className={style} onClick={onClick}>
      {valor}
    </button>
  );
}
