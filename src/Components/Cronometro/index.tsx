import React, {useState, useEffect} from 'react'
import Botao from "../Botao/Index";
import Relogio from "./Relogio";
import style from "./Cronometro.module.scss";
import { tempoParaSegundos } from "../../Common/Utils/Time";
import { Itarefa } from "../../Types/tarefa";

interface Props{
    selecionado: Itarefa | undefined
}

export function Cronometro({selecionado} :Props ){

    const [tempo, setTempo] = useState<number>()

    useEffect(()=>{
        if(selecionado?.tempo){
            setTempo(tempoParaSegundos(selecionado.tempo))
        }
    }, [selecionado])

    return(
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
            <div className={style.relogioWrapper}>
                <Relogio tempo={tempo}/>
            </div>
            <Botao
                texto="Começar!"
            />
        </div>
    )
}