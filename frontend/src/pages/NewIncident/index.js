import React , {useState}from 'react';
import {Link, useHistory} from 'react-router-dom';
import {Animated} from "react-animated-css";
import {FiArrowLeft} from 'react-icons/fi';

import api from '../../services/api';

import logoImg from '../../assets/logo.svg';

import './styles.css';

export default function NewIncident() {
  const ongId = localStorage.getItem('ongId');
  const history = useHistory();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');

 
  async function handleNewIncident(event) {
    event.preventDefault();

    const data = {
      title,
      description,
      value
    }
  
    try {
      await api.post('incidents',
        data, {
          headers: {
            Authorization: ongId
          }
        });

      history.push('/profile');
    } catch (error) {
      alert('Erro ao cadastrar caso, tente novamente.')
    }
  }

  return (
    <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
       <div className="new-incident-container">
          <div className="content">
            <section>
              <img src={logoImg} alt="Be The Hero"/>

              <h1>Cadastrar novo caso</h1>
              <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>

              <Link className="back-link" to="/profile">
                <FiArrowLeft size={16} color="#e02041" />
                Voltar para home
              </Link>
            </section>

            <form onSubmit={handleNewIncident}>
              <input
                placeholder="Título do caso"
                name="title"
                value={title}
                onChange={event => setTitle(event.target.value)}
              />
              <textarea 
                placeholder="Descrição"
                name="description"
                value={description}
                onChange={event => setDescription(event.target.value)}
              />
              <input 
                placeholder="Valor em reais"
                name="value"
                value={value}
                onChange={event => setValue(event.target.value)}
              />

              <button className="button" type="submit">
                Cadastrar
              </button>
            </form>
          </div>
       </div>
    </Animated>
  );
}