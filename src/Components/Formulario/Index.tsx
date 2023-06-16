import React from "react";
import { Itarefa } from "../../Types/tarefa";
import Botao from "../Botao/Index";
import style from './style.module.scss';
import { v4 as uuidv4 } from 'uuid';

export default class Formulario extends React.Component<{
    setTarefas: React.Dispatch<React.SetStateAction<Itarefa[]>>
}> {
        
    state = {
        tarefa:"",
        tempo:"00:00",
    }

    adicionarTarefa(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault()
        this.props.setTarefas(prevTarefas =>
            [...prevTarefas,
                {
                    ...this.state,
                    selecionado: false,
                    completado:true,
                    id: uuidv4()
                }
            ])
        this.setState({
            tarefa: "",
            tempo:"",

        })
    }

    render(){
        return(
            <form className={style.novaTarefa} onSubmit={this.adicionarTarefa.bind(this)}>
                <div className={style.inputContainer}>
                    <label htmlFor="tarefa">Adicione um novo estudo</label>
                    <input 
                        type="text"
                        name="tarefa"
                        value={this.state.tarefa}
                        onChange={e=> this.setState({ ...this.state, tarefa: e.target.value })}
                        id="tarefa"
                        placeholder="O que você deseja estudar"
                        required
                    />
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor="tempo">Tempo</label>
                        <input 
                            type="time"
                            step="1"
                            name="tempo"
                            value={this.state.tempo}
                            onChange={e=> this.setState({ ...this.state,tempo: e.target.value })}
                            id="tempo"
                            min="00:00:00"
                            max="01:30:00"
                            required
                        />
                </div>
                <Botao
                    texto="Adicionar"
                    type="submit"
                />
            </form>
        )
    }
}