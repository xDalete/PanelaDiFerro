import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins&display=optional" />
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}