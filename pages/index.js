import Head from 'next/head'
import Header from './components/Header'
import Footer from './components/Footer'
import Cover from './components/Cover'
import BackHeader from './components/BackHeader'
import Form from './components/Form'
import Map from './components/Map'

export default function Home() {

  return (
    <>
        <Head>
            <title>Texas Skilled Carpentry</title>
            <meta
            name="description"
            content="We craft top quality wooden roller coasters with 25+ years of expertise and a commitment to sustainability."
            />
            <meta property="og:title" content="Texas Skilled Carpentry" />
            <meta property="og:description" content=""/>
            <meta property="og:url" content="https://wearevelier.com/" />
            <meta property="og:image" content="/assets/iconApp.jpg" />
            <link rel="apple-touch-icon" href="/assets/iconApp.jpg"></link>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/assets/favicon.png" />
        </Head>
        <Header />
        <BackHeader />
        <Cover />
        <Map />
        <Form />
        <Footer />
        <style jsx>{`

        `}</style>
    </>
  )
}