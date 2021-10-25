import React from 'react';
import './Card.css';
// import { Link } from 'react-router-dom';

const Card = (props) => {
  const tarefa = props.tarefa;
  return (
    // <Link to={`/view/${tarefa._id}`}>
    <div class="cardreact">
    
<div class="tarefas">
  <div class="card">
        <p class={`${tarefa.prioridade}`}>
          { tarefa.titulo }
        </p>
        <p>até { tarefa.prazo }</p>
        <p class="{ tarefa.status }">{ tarefa.status }</p>
        <h2>
          { tarefa.descricao }
        </h2>
        <p>Criado em {tarefa.datacriacao}</p>
        <button class="open" onclick="location.href='#m1-o'">Abrir</button>
        <button class="edit">Editar</button>
        <button class="delete">Excluir</button>
      </div>     
    </div> 

    </div>
    // </Link>
  )
}

export default Card