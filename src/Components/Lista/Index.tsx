import { Itarefa } from "../../Types/tarefa";
import Item from "./Item/Index";
import style from './style.module.scss'

interface Props {
    tarefas: Itarefa[],
    selecionaTarefa: (tarefaSelecionada: Itarefa) => void //Função que n retorna nada
}


export default function Lista ({tarefas, selecionaTarefa} : Props){

    return(
        <aside className={style.listaTarefas}>
            <h2 >Estudos do dia</h2>
            <ul>
                {tarefas.map(item =>{
                    return(
                        <Item
                            selecionaTarefa={selecionaTarefa}
                            key={item.id}
                            {...item}
                        />
                    )
                })}
            </ul>
        </aside>
    )
}