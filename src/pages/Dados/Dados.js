import React from 'react';
import List from '../../components/structure/List/List';
import './Dados.css';

const Dados = () => {
  return (
    <div className="lista">
      <div class="legenda">
    <h2>
      * O título da tarefa muda de cor de acordo com a prioridade:
    </h2>
    <p class="red">
      Vermelho: Alta
    </p>
    <p class="lightred">
      Vermelho Claro: Média
    </p>
    <p class="white">
      Branco: Baixa
    </p>
  </div>
      <List/>
    </div>
  )
}

export default Dados