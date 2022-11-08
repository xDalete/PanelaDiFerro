import styles from '../styles/components/BannerReceitaSearch.module.scss';

function Receita({ image, titulo, tempo_preparo, porcoes, id }) {

    return (<a href={`/receita/${id}`}>
        <div className={styles.BannerReceitaSearch}>
          <img className={styles.image} src={`${image.replace("upload/","upload/w_240/")}`}/>
          <p className={styles.titulo}>{titulo}</p>
        </div>
    </a>
      );
}

export default Receita