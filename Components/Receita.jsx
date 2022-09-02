import styles from '../styles/components/Receita.module.scss';

function Receita({ img, titulo, descricao, id }) {
  return <div className={`rounded col ${styles.receita}`}>
    <a href={`/receita/${id}`} target="_self" className={`${styles.link}`}>
      <div className={`rounded-top ${styles.capaFundo}`}>
        <img src={`/receitas-thumb/${img}`} alt="Capa Fundo" />
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