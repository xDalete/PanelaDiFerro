import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.scss'
import Layout from "../Components/Layout";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return <div>
    <Head>
        <title>PanelaDiFerro</title>
        <link rel="icon" href="/images/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />
    </Head>
    <Layout>
        <Component {...pageProps} />
    </Layout>
  </div>
}

export default MyApp