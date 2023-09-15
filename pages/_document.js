import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link 
          rel="preconnect" 
          href="https://fonts.gstatic.com" 
          crossorigin>
        </link>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;400;600;700&family=Poppins:wght@300;500;600;700&display=swap" rel="stylesheet"></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
