import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.scss'
import Layout from "../Components/Layout";
import Head from "next/head";
import { Analytics } from '@vercel/analytics/react'

function MyApp({ Component, pageProps }) {
  return <div>
    <Head>
      <title>PanelaDiFerro</title>
      <link rel="icon" href="/images/favicon.ico" />
    </Head>
    <Layout>
        <Component {...pageProps} />
        <Analytics />
    </Layout>
  </div>
}

export default MyApp