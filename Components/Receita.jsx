import React from 'react';
import styles from '../styles/components/Receita.module.scss';

function Receita({ image, titulo, tempo_preparo, porcoes, id }) {
    return (
        <div className={`rounded col ${styles.receita}`}>
            <a href={`/receita/${id}`} target="_self" className={`${styles.link}`}>
                <div className={`rounded-top ${styles.capaFundo}`}>
                    <img src={`${image.replace("upload/","upload/w_350,ar_6:4/")}`} alt="Capa Fundo" />
                </div>
                <div className={styles.infos}>
                    <h1 className={styles.titulo}>{titulo.toUpperCase()}</h1>
                    <div className='px-2'>
                        <div className={`row ${styles.descricao}`}>
                            <div className={`col-md-6 d-flex flex-row justify-content-around ${styles.cardInfo}`}>
                                <i className='medium material-icons'>access_alarm</i>
                                <p className='pt-1 text-dark'>{tempo_preparo > 60 ? (tempo_preparo / 60).toFixed(2) + ' horas' : tempo_preparo + ' minutos'}</p>
                            </div>
                            <div className='col-md-6 d-flex flex-row justify-content-around'>
                                <i className='medium material-icons'>free_breakfast</i>
                                <p className='pt-1 text-dark'>{porcoes} Porções</p>
                            </div>
                        </div>
                    </div>
                    <div className={`py-1 rounded-bottom ${styles.LerMais}`}>Ver Receita</div>
                </div>
            </a>
        </div>
    );
}

export default Receita