import React, {useState} from 'react';
import {FiLogIn} from 'react-icons/fi';
import {Link, useHistory} from 'react-router-dom';

import api from '../../services/api';
import './styles.css';

import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';

export default function Logon() {
  const [email, setEmail] = useState('');
  const history = useHistory();

  async function handleLogin(event) {
    event.preventDefault();

    try {
      const {data} = await api.post('sessions', {email});
      
      localStorage.setItem('ongId', data.id);
      localStorage.setItem('ongEmail', email);
      localStorage.setItem('ongName', data.name);

      history.push('/profile');
    } catch (error) {
      alert('Falha no login, tente novamente.');
    }
  }
  
  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoImg} alt="Be The Hero"/>

        <form onSubmit={handleLogin}>
          <h1>Faça seu logon</h1>

          <input
            placeholder="Seu email"
            type="text"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <button className="button">Entrar</button>

          <Link className="back-link" to="/register">
            <FiLogIn size={16} color="#e02041" />
            Não tenho cadastro
          </Link>
        </form>
      </section>

      <img src={heroesImg} alt="Heroes"/>
    </div>
  );
}