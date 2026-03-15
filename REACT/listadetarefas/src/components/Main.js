import React, {Component} from "react";

// Form

import {FaPlus} from 'react-icons/fa';

import {FaEdit} from 'react-icons/fa';

import {FaTrash} from 'react-icons/fa';

import './Main.css';

export default class Main extends Component {
  state = {
    novaTarefa: '',
    tarefas: [

    ]
  }

  handleChange = (e) => {
    this.setState({
      novaTarefa: e.target.value
    })
  }

  componentDidMount() {
    const tarefas = localStorage.getItem('tarefas');
    if(tarefas) {
      this.setState({
        tarefas: JSON.parse(tarefas)
      })
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const {tarefas} = this.state;

    if(tarefas === prevState.tarefas) return;

    localStorage.setItem('tarefas', JSON.stringify(tarefas));
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const {tarefas, novaTarefa} = this.state;

    if(tarefas.includes(novaTarefa)) return;

    this.setState({
      tarefas: [...this.state.tarefas, this.state.novaTarefa],
      novaTarefa: ''
    })
  }

  handleEdit = (tarefa) => {
      const {tarefas} = this.state;
      const novasTarefas = [...tarefas];
      const tarefaEditada = prompt('Digite a nova tarefa');

      if(tarefas.includes(tarefaEditada)) return;

      const index = novasTarefas.indexOf(tarefa);
      novasTarefas[index] = tarefaEditada;

      if(!tarefaEditada) return;

      this.setState({
        tarefas: [...novasTarefas]
      })
  }



  handleDelete = (tarefa) => {
    const {tarefas} = this.state;
    const novasTarefas = [...tarefas];

    const index = novasTarefas.indexOf(tarefa);
    novasTarefas.splice(index, 1);

    this.setState({
      tarefas: [...novasTarefas]
    })
  }


    render() {
      const {novaTarefa} = this.state;

      return (
        <div className="main">
          <h1>Lista de tarefas</h1>


          <form onSubmit={this.handleSubmit} action="#" className="form">
            <input onChange={this.handleChange}
             type="text"
             placeholder="Digite uma nova tarefa"
             value={novaTarefa}
             />

            <button type="submit"><FaPlus /></button>
          </form>

          <ul className="tarefas">
            {this.state.tarefas.map(tarefa => (
              <li key={tarefa}>{tarefa}
              <div className="actions">
                <button>
                  <FaEdit onClick={() => this.handleEdit(tarefa)} className="edit"/>
                </button>
                <button>
                  <FaTrash onClick={() => this.handleDelete(tarefa)} className="trash"/>
                </button>
              </div>

              </li>
            ))}
          </ul>

        </div>
      )
    }
}
