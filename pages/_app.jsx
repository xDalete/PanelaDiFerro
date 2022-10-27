import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.scss'
import Layout from "../Components/Layout";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return <div>
    <Head>
      <title>PanelaDiFerro</title>
      <link rel="icon" href="/images/favicon.ico" />
      <script id="_wauv2w">var _wau = _wau || []; _wau.push(["small", "vs832liyqh", "v2w"]);</script><script async src="//waust.at/s.js"></script>
    </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </div>
}

export default MyApp