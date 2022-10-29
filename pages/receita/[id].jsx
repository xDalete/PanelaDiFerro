import { getReceita } from "../../lib/database";
import styles from "../../styles/pages/Receita.module.scss";
import Head from "next/head";
import Script from 'next/script';

function Home(props) {
  if (!props.id) return <Script id="redirect" dangerouslySetInnerHTML={{
    __html: "window.location.replace(`https://paneladiferro.xdalete.repl.co/404`)",
  }} />
  else return <>
    <Head>
      <title>{`Receita: ${props.titulo}`}</title>
    </Head>
    <section className={`container`}>
      <div className={"d-flex flex-column align-items-center"}>
        <h1 className={`${styles.title}`}>{props.titulo}</h1>
        <picture>
          <source srcSet={`${props.image}`} />
          <img src={`${props.image}`} alt="thumb receita" className={`border border-4 border-light ${styles.image}`} />
        </picture>
      </div>
      <div className={`card shadow bg-body ${styles.spacing}`}>
        <div className={"card-body"}>
          <div className={"row"}>
            <div className={"col-sm-6 col-md-6 col-lg-6 border-end border-dark"}>
              <h2 className={`${styles.title2}`}>Ingredientes</h2>
              <ul>
                {
                  props.ingredientes.map(ingrediente => {
                    return <li key={ingrediente} >{ingrediente}</li>
                  })
                }
              </ul>
            </div>
            <div className={`col-sm-6 col-md-6 col-lg-6 ${styles.info}`}>
              <div className={"d-flex flex-row"}>
                <i className={`large material-icons me-2 ${styles.icon}`}>access_alarm</i>
                <p>Tempo de Preparo: {props.tempo_preparo}</p>
              </div>
              <div className={"d-flex flex-row"}>
                <i className={`large material-icons me-2 ${styles.icon}`}>free_breakfast</i>
                <p>Rendimento: {props.porcoes} Porções</p>
              </div>
            </div>
          </div>
          <div>
            <h2 className={`${styles.title2}`}>Modo de Preparo</h2>
            <p className={`mx-4 ${styles.justify}`}>{props.modo_preparo}</p>
          </div>
          {props.observacoes.trim() != "" ?
            <div className={"row"}>
              <div className={"col-md-12"}>
                <h2 className={`${styles.title2}`}>Observações</h2>
                <p className={`mx-4 ${styles.justify}`}>{props.observacoes}</p>
              </div>
            </div> : <></>
          }
        </div>
      </div>
    </section>
  </>
}

export async function getServerSideProps({ res, query }) {
  res.setHeader('Cache-Control', 's-maxage=60', 'stale-while-revalidate')
  let receita = await getReceita(query.id)
  return { props: receita ? receita:{}}
}

export default Home