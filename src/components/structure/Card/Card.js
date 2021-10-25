import React from 'react';
import './Card.css';

const Card = () => {
  return (
    <div class="cardreact">
    
<div class="tarefas">
  <div class="card">
        <p class="alta">
          Ir à padaria
        </p>
        <p>até 22/10/2021T23:00</p>
        <p class="farei">Farei</p>
        <h2>
          Comprar 2 reais de pão
        </h2>
        <p>Criado em 22/10/2021T20:00</p>
        <button class="open" onclick="location.href='#m1-o'">Abrir</button>
        <button class="edit">Editar</button>
        <button class="delete">Excluir</button>
      </div>     
    </div> 

    </div>
  )
}

export default Card