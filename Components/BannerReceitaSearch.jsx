import styles from '../styles/components/BannerReceitaSearch.module.scss';
import { showPrepareTimeProps } from '../pages/receita/[id].jsx'

function Receita({ image, titulo, tempo_preparo, porcoes, id }) {
  return (
    <a href={`/receita/${id}`} style={{textDecoration: "none"}}>
      <div className={styles.BannerReceitaSearch}>
        <img className={styles.image} src={`${image.replace("upload/", "upload/w_240/")}`} />
        <p className={styles.titulo}>{titulo}</p>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div style={{ display: "flex", flexDirection: "row", color: "rgb(255, 136, 0)", marginInline: "4em" }}>
            <i className='medium material-icons me-3'>access_alarm</i>
            <p>{showPrepareTimeProps(tempo_preparo)}</p>
          </div>
          <div style={{ display: "flex", flexDirection: "row", color: "rgb(255, 136, 0)" }}>
            <i className='medium material-icons me-3'>free_breakfast</i>
            <p>{porcoes} porções</p>
          </div>
        </div>
      </div>
    </a>
  );
}

export default Receita