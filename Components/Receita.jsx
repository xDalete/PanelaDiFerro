import React, { useRef, useEffect } from 'react';
import styles from '../styles/components/Receita.module.scss';
import { showPrepareTimeProps } from '../pages/receita/[id].jsx';

function Receita({ image, titulo, tempo_preparo, porcoes, id }) {
    let paragraphContent = useRef("");
    const onCardHover = () => {
        useEffect(() => {
            // paragraphContent.textContent = `${tempo_preparo} min`;
            console.log("sim");
        });
    }

    return (
        <div onMouseOver={onCardHover()} className={`rounded col ${styles.receita}`}>
            <a href={`/receita/${id}`} target="_self" className={`${styles.link}`}>
                <div className={`rounded-top ${styles.capaFundo}`}>
                    <img src={`${image.replace("upload/","upload/w_350,ar_6:4/")}`} alt="Capa Fundo" />
                </div>
                <div className={styles.infos}>
                    <h1 className={styles.titulo}>{titulo.toUpperCase()}</h1>
                    <div className='px-2'>
                        <div className={`row ${styles.descricao}`}>
                            <div className={`col-md-6 d-flex flex-row justify-content-start ${styles.cardInfo}`}>
                                <i className={`medium material-icons ${styles.icon}`}>access_alarm</i>
                                <p className='pt-1 text-dark' ref={paragraphContent}>{showPrepareTimeProps(tempo_preparo)}</p>
                            </div>
                            <div className='col-md-6 d-flex flex-row justify-content-start'>
                                <i className={`medium material-icons ${styles.icon}`}>free_breakfast</i>
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