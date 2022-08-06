import { useRouter } from 'next/router'
import { getReceita } from "../../lib/database";
import Head from "next/head";
import Script from 'next/script';

function Home(props) {
  if (props.id == null) return <Script dangerouslySetInnerHTML={{
    __html: "window.location.replace(`https://paneladiferro.xdalete.repl.co/404`)",
  }}/>
  else return <>
    <Head>
      <title>{`Receita: ${props.titulo}`}</title>
    </Head>
    <section className="container">
      <h1>{props.titulo}</h1>
      <img src="/receitas-thumb/1.jpg" alt="thumb receita" />

    </section>
  </>
}

export async function getServerSideProps({ res, query }) {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=1800'
  )
  return { props: getReceita(query.id) }
}

export default Home
