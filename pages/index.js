import Head from 'next/head'
import Header from './components/Header'
import Footer from './components/Footer'
import Cover from './components/Cover'
import BackHeader from './components/BackHeader'
import Form from './components/Form'
// import Map from './components/Map'
import GoogleMap from './components/GoogleMap'

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
            <link rel="preconnect" href="https://fonts.googleapis.com"></link>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
            <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;700;900&display=swap" rel="stylesheet"></link>
        </Head>
        <Header />
        <BackHeader />
        <Cover />
        <div className='CustomerFeedback'>
          <h1 className='ColorWhite'>Customer Feedback</h1>
        </div>
        {/* <Map /> */}
        <GoogleMap />
        <div id='contact'></div>
        <Form />
        <Footer />
        <style jsx>{`
          .CustomerFeedback
          {
            display: flex;
            width: 100%;
            height: fit-content;
            padding: 20px;
            justify-content: center;
            align-items: center;
          }
          .CustomerFeedback h1
          {
            text-align: center;
          }
        `}</style>
    </>
  )
}