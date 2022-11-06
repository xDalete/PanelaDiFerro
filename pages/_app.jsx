import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.scss'
import Layout from "../Components/Layout";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return <div>
    <Head>
      <title>PanelaDiFerro</title>
      <link rel="icon" href="/images/favicon.ico" />
    </Head>
    <Layout>
        <Component {...pageProps} />
    </Layout>
  </div>
}

export default MyApp