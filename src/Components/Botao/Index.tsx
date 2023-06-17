import React from "react";
import style from './style.module.scss'

interface Props {
    texto: string, 
    type?:"button" | "submit" | "reset" | undefined,
    onClick?: () => void
}

export default function Botao({onClick, type, texto} : Props){
    return(
        <button type={type} onClick={onClick} className={style.botao}>
            {texto}
        </button>
    )
}

