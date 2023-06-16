import React, {useState} from 'react';
import { Cronometro } from '../Components/Cronometro';
import Formulario from '../Components/Formulario/Index';
import Lista from '../Components/Lista/Index';
import { Itarefa } from '../Types/tarefa';
import style from './style.module.scss'

function App() {
  const [tarefas, setTarefas] = useState<Itarefa[] |[]>([]) 
  const [selecionado, setSelecionado] = useState<Itarefa>()

  function selecionaTarefa(tarefaSelecionada: Itarefa){
      setSelecionado(tarefaSelecionada)
      setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa =>({
        ...tarefa,
        selecionado: tarefa.id === tarefaSelecionada.id ? true : false

      }) ))
  }

  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas}/>       
      <Lista 
        selecionaTarefa={selecionaTarefa}
        tarefas={tarefas}
      />
      <Cronometro selecionado={selecionado}/>
    </div>
  );
}

export default App;
