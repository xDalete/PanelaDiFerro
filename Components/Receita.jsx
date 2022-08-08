import styles from '../styles/components/Receita.module.scss';

function Receita({ capa, titulo, descricao, id }) {
  return <div className={`rounded ${styles.receita}`}>
    <a href={`/receita/${id}`} target="_self" className={`${styles.link}`}>
      <div className={`rounded-top ${styles.capaFundo}`}>
        <img src={capa} alt="Capa Fundo" />
      </div>
      <div className={styles.infos}>
        <h1 className={styles.titulo}>{titulo.toUpperCase()}</h1>
        <div className={`px-2 ${styles.descricao}`}>
          {descricao}
        </div>
        <div className={`py-1 rounded-bottom ${styles.LerMais}`}>
          Ler Mais
        </div>
      </div>
    </a>
  </div>
}

export default Receita