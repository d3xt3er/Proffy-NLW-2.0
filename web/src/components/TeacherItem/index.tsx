import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem(){
    return (
        <article className="teacher-item">
                    <header>
                        <img src="https://avatars2.githubusercontent.com/u/48564999?s=460&u=fddd39a54df01d4e78ac46d9ed52fabc8bb248fc&v=4" alt="Paulo"/>
                        <div>
                            <strong>Paulo José</strong>
                            <span>Física</span>
                        </div>
                    </header>

                    <p>
                        Um dos melhores desenvolvedores de back-end com node.js
                        <br></br>
                        Nas horas vagas professor de uma disciplina que explica como o mundo funciona e suas reaçoes mais loucas
                    </p>

                    <footer>
                        <p>
                            Preço/Hora
                            <strong>R$ 80,00</strong>
                        </p>

                        <button type="button">
                            <img src={whatsappIcon} alt="WhatsApp"/>
                            Entrar em contato
                        </button>
                    </footer>
               </article>
    );
}

export default TeacherItem;