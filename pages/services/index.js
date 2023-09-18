import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import BackHeader from '../components/BackHeader'

export default function Services() {

  return (
    <>
        <Head>
            <title>Services | Texas Skilled Carpentry</title>
            <meta
            name="description"
            content="We craft top quality wooden roller coasters with 25+ years of expertise and a commitment to sustainability."
            />
            <meta property="og:title" content="Services | Texas Skilled Carpentry" />
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
        <div className='ServicesContainer'>
          <h1>Our Services</h1>
          <div className='ServicesContent'>
            <article className='ArticleContainer'>
              <div className='ArticleContent'>
                <img id='imagen' src='/assets/images/image19.jpeg' />
                <p>
                  When it comes to wooden rollercoaster repair and maintenance, Texas Skilled Carpentry stands as the unrivaled choice for park owners and enthusiasts seeking excellence, precision, and reliability. Our range of specialized services ensures that your wooden coaster not only operates at peak performance but also remains an enduring source of thrills and excitement for years to come. 
                </p>
              </div>
            </article>
            <article className='ArticleContainer'>
              <h2>Repair & Restoration</h2>
              <div className='ArticleContent'>
                <p>
                  Reviving the Classics: Our expert craftsmen have a profound understanding of the heritage and history of wooden roller coasters. Whether it's restoring a classic coaster to its former glory or giving it a modern twist, we have the experience and skill to breathe new life into these iconic rides.
                </p>
              </div>
            </article>
            <article className='ArticleContainer'>
              <h2>Preventative Maintenance</h2>
              <div className='ArticleContent'>
                <p>
                  Proactive Care: We believe that the best way to prevent costly and unexpected repairs is through diligent and regular maintenance. Our proactive approach ensures that your coaster remains safe and in top condition, reducing downtime and maximizing rider enjoyment. 
                </p>
              </div>
            </article>
            <article className='ArticleContainer'>
              <h2>Structural Integrity</h2>
              <div className='ArticleContent'>
                <p>
                  Sturdy Foundations: With a keen eye for structural integrity, our team thoroughly inspects every inch of your wooden coaster. From the foundation to the highest peak, we identify and address any issues, ensuring that safety remains our top priority. 
                </p>
              </div>
            </article>
          </div>
        </div>
        <Footer />
        <style jsx>{`
          .ServicesContainer
          {
            display: flex;
            flex-direction: column;
            width: 100%;
            height: auto;
            padding: 20px;
            gap: 20px;
            background: var(--background-start-rgb);
            justify-content: center;
            align-items: center;
          }
          .ServicesContent
          {
            display: flex;
            flex-direction: column;
            width: 100%;
            max-width: 1000px;
            height: auto;
            gap: 20px;
            justify-content: center;
            align-items: center;
          }
          .ArticleContainer
          {
            display: flex;
            flex-direction: column;
            width: 100%;
            height: auto;
            gap: 20px;
          }
          .ArticleContent
          {
            display: flex;
            flex-direction: row;
            width: 100%;
            height: auto;
            gap: 20px;
            justify-content: center;
            align-items: center;
          }
          #imagen
          {
            width: 100%;
            height: 300px;
            object-fit: cover;
            object-position: center;
            border-radius: 40px;
          }
          .ArticleContent p
          {
            display: flex;
            width: 100%;
            height: auto;
          }
          @media only screen and (max-width: 800px)
          {
            .ArticleContent
            {
              flex-direction: column;
              width: 100%;
              height: auto;
            }
            #imagen
            {
              width: 100%;
              height: auto;
              object-fit: cover;
              object-position: center;
              border-radius: 40px;
              aspect-ratio: 1/1;
            }
          }
        `}</style>
    </>
  )
}