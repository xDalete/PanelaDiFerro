import { useRouter } from 'next/router'
import { getReceita } from "../../lib/database";
import Head from "next/head";

function Home(props) {
  return <>
    <Head>
      <title>Receita: {props.titulo}</title>
    </Head>
    <section className="container">
      <h1>{props.titulo}</h1>
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
