import React from 'react'
import './Cadastro.css';

const Cadastro = () => {

    return (
        <div class="card-form">
        <h2>Adicione uma tarefa</h2>
        <div class="row">
        <div class="col">
            <div class="form-group">
            <label>Titulo</label>
            <input type="text" required/>
            </div>
        </div>
    
        <div class="col">
            <div class="form-group">
            <label>Descrição</label>
            <textarea required></textarea>
            </div>
        </div>

        <div class="col">
            <div class="form-group">
            <label>Prazo:</label>
            <input type="date"
            min="2021-10-20"/>
            </div>
        </div>

        <div class="col">
            <div class="form-group">
            <label>Prioridade:</label>
            <select class="input_form" type="text" value="" required>
                <option value="alta">Alta</option>
                <option value="baixa">Média</option>
                <option value="media">Baixa</option>
                </select>
            </div>
        </div>

        <div class="col">
            <div class="form-group">
            <label>Status:</label>
            <select class="input_form" type="text" value="" required>
                <option value="feito">Feito</option>
                <option value="fazendo">Fazendo</option>
                <option value="farei">A Fazer</option>
                </select>
            </div>
        </div>
    
        <div class="col">
            <input type="submit" value="Submit"/>
        </div>
        </div>
    </div>
    )
}

export default Cadastro