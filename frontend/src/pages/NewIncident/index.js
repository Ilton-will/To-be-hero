import React,{ useState} from 'react';

import { Link, useHistory } from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';

import api from '../../services/api'

import './styles.css';


import logoImg from '../../assets/logo.svg'

export default function NewIncident(){
    const [title, getTitle] = useState('');
    const [description, getDescription] = useState('');
    const [value, getValue] = useState('');

    const ongId = localStorage.getItem('ongId');
    
    const history = useHistory();


    async function handleCreate(e){
        e.preventDefault();

        const data = {
            title,
            description,
            value,
        };
        try{    
             await api.post('incidents', data, {
                headers: {
                    Authorization: ongId,
                }
             }); 
             history.push('/profile');
             } catch (err) {
                 alert('Error na criação, tente novamente.');
             }
         };


    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero"/>

                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar o herói para resolver isso.</p>
                    <Link className="black-link" to="/profile">
                        <FiArrowLeft size={16} color="#E02041" />
                        Voltar para Home
                    </Link>
                </section>

                <form onSubmit={handleCreate} >
                    <input 
                    placeholder="Título do caso"
                    value={title}
                    onChange={e => getTitle(e.target.value)}
                    required/>

                    <textarea 
                    placeholder="Descrição"
                    value={description}
                    onChange={e => getDescription(e.target.value)}
                    required/>

                    <input 
                    placeholder="Valor em reais"
                    value={value}
                    onChange={e => getValue(e.target.value)}
                    required/>

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}
