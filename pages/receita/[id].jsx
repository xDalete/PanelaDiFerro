import { getReceita } from "../../lib/database";
import styles from "../../styles/pages/Receita.module.scss";
import Head from "next/head";
import Script from 'next/script';

function Home(props) {
    if (props.id == null) return <Script dangerouslySetInnerHTML={{
        __html: "window.location.replace(`https://paneladiferro.xdalete.repl.co/404`)",
    }} />
    else return <>
        <Head>
            <title>{`Receita: ${props.titulo}`}</title>
        </Head>
        <section className={`container`}>
            <div className={"d-flex flex-column align-items-center"}>
                <h1 className={`${styles.title}`}>{props.titulo}</h1>
                <img src={`/receitas-thumb/${props.img}`} alt="thumb receita" className={`${styles.title}`} style={{ width: "30rem" }} />
            </div>
            <div className={`card ${styles.spacing}`}>
                <div className={"card-body"}>
                    <div className={"row"}>
                        <div className={"col-sm-6 col-md-6 col-lg-6 border-end border-dark"}>
                            <h2>Ingredientes</h2>
                            <ul>
                                {
                                    props.ingredientes.map(ingrediente => {
                                        return <li>{ingrediente}</li>
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
                                <p>{props.porcoes} Porções</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2>Modo de Preparo</h2>
                        <p>{props.modo_preparo}</p>
                    </div>
                </div>
            </div>
        </section>
    </>
}

export async function getServerSideProps({ res, query }) {
    return { props: getReceita(query.id) }
}

export default Home
