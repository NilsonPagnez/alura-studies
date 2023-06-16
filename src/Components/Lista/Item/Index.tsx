import { Itarefa } from '../../../Types/tarefa'
import style from './Item.module.scss'

interface Props extends Itarefa { // Pega tudo do Itarefa e acrescenta com o que eu digitei no objeto abaixo

    selecionaTarefa: (tarefaSelecionada: Itarefa) => void //Função que n retorna nada
}

export default function Item({tarefa, tempo, selecionado, completado, id, selecionaTarefa } : Props){

    return(
        <li className={`${style.item} ${selecionado ? style.itemSelecionado : ''}`} onClick={() => selecionaTarefa({
            tarefa,
            tempo,
            selecionado,
            completado,
            id
        })}>
            <h3>
                {tarefa}
            </h3>
            <span>
                {tempo}
            </span>
        </li>
    )
}