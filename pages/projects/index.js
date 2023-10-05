import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import BackHeader from '../components/BackHeader'

export default function Projects() {

  return (
    <>
        <Head>
            <title>Projects | Texas Skilled Carpentry</title>
            <meta
            name="description"
            content="We craft top quality wooden roller coasters with 25+ years of expertise and a commitment to sustainability."
            />
            <meta property="og:title" content="Projects | Texas Skilled Carpentry" />
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
        <div className='ProjectsContainer'>
          <h1>Projects</h1>
          <div className='ProjectsContent'>
            <article className='ArticleContainer'>
              <h2>Our Expertise</h2>
              <div className='ArticleContent'>
                <img src='/assets/images/image4.jpeg' />
                <p>
                  At Texas Skilled Carpentry, our expertise revolves around the world of wooden roller coasters. With over 25 years of dedicated experience, we have become industry leaders in the construction, repair, and maintenance of these iconic rides. Our team, led by the seasoned roller coaster carpenter Jose Luis Acevedo, is well-versed in every intricacy of wooden coaster craftsmanship. From understanding the unique properties of wood to mastering the art of precision engineering, we bring a wealth of knowledge to every project. Park owners and enthusiasts alike trust our expertise to ensure that their wooden roller coasters not only stand the test of time but continue to deliver unforgettable thrills year after year.
                </p>
              </div>
            </article>
            <article id='TextAlignRight' className='ArticleContainer'>
              <h2>Our Process</h2>
              <div id='RowReverse' className='ArticleContent'>
                <img src='/assets/images/image17.jpeg' />
                <p>
                  When it comes to repairing and maintaining wooden roller coasters, our process is second to none. From the initial consultation to the final inspection, we follow a rigorous step-by-step approach that ensures excellence at every stage. We begin by conducting a comprehensive assessment, identifying any structural issues, wear and tear, or safety concerns. Our team then crafts a customized repair and maintenance plan tailored to the unique needs of each coaster. We execute these plans with precision, using the finest materials and craftsmanship. Finally, our thorough inspections guarantee that every coaster we touch meets the highest safety and performance standards. With Texas Skilled Carpentry, your wooden roller coaster is in expert hands from start to finish. 
                </p>
              </div>
            </article>
          </div>
        </div>
        <Footer />
        <style jsx>{`
          .ProjectsContainer
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
          .ProjectsContent
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
          .ArticleContent img
          {
            width: 300px;
            height: 300px;
            object-fit: cover;
            object-position: top;
            border-radius: 40px;
            aspect-ratio: 1/1;
          }
          .ArticleContent p
          {
            display: flex;
            width: 100%;
            height: auto;
          }
          {/* #image
          {
            width: 100%;
            height: auto;
            max-width: 200px;
            border-radius: 40px;
          } */}
          #RowReverse
          {
            flex-direction: row-reverse;
          }
          #TextAlignRight
          {
            text-align: right;
          }
          @media only screen and (max-width: 800px)
          {
            .ArticleContent
            {
              flex-direction: column;
              width: 100%;
              height: auto;
            }
            .ArticleContent img
            {
              width: 100%;
              height: 260px;
              object-fit: cover;
              object-position: top;
              border-radius: 40px;
            }
            #RowReverse
            {
              flex-direction: column;
            }
            #TextAlignRight
            {
              text-align: left;
            }
          }
        `}</style>
    </>
  )
}