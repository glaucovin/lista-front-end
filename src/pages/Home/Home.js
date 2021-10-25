import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div class="card-home">
   
    <div class="btns-1">
        <a href="/adicionar" className="btn-criar">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Adicionar Tarefa 
        </a>
        <a href="/lista" className="btn-ver">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Ver Tarefas
        </a>
    </div>
    <div class="btns-2">
        <a href="https://www.instagram.com/glaucovin/" className="btn-redes">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Meu Instagram
        </a>
        <a href="https://glaucovin.herokuapp.com/" className="btn-portifolio">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Meu Portfolio
        </a>
    </div>
</div>
  )
}

export default Home