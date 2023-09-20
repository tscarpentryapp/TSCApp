import { useState } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BackHeader from '../components/BackHeader';

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
              <div className='ArticleContentTop'>
                <img id='imagen' src='/assets/images/image19.jpeg' />
                <p>
                  When it comes to wooden rollercoaster repair and maintenance, Texas Skilled Carpentry stands as the unrivaled choice for park owners and enthusiasts seeking excellence, precision, and reliability. Our range of specialized services ensures that your wooden coaster not only operates at peak performance but also remains an enduring source of thrills and excitement for years to come. 
                </p>
              </div>
            </article>
            <ServiceItem
              id="repair"
              image="image0.jpeg"
              title='Repair & Restoration'
              content='Reviving the Classics: Our expert craftsmen have a profound understanding of the heritage and history of wooden roller coasters. Whether its restoring a classic coaster to its former glory or giving it a modern twist, we have the experience and skill to breathe new life into these iconic rides.'
            />
            <ServiceItem
              id="maintenance"
              image="image3.jpeg"
              title='Preventative Maintenance'
              content='Proactive Care: We believe that the best way to prevent costly and unexpected repairs is through diligent and regular maintenance. Our proactive approach ensures that your coaster remains safe and in top condition, reducing downtime and maximizing rider enjoyment.'
            />
            <ServiceItem
              id="integrity"
              image="image18.jpeg"
              title='Structural Integrity'
              content='Sturdy Foundations: With a keen eye for structural integrity, our team thoroughly inspects every inch of your wooden coaster. From the foundation to the highest peak, we identify and address any issues, ensuring that safety remains our top priority.'
            />
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
          .ArticleContainer,
          .ArticleContainerAnimation
          {
            display: flex;
            flex-direction: column;
            width: 100%;
            height: auto;
            gap: 20px;
          }
          .ArticleContainerAnimation
          {
            background: red;
            justify-content: center;
            align-items: center;
            padding: 20px;
            border-radius: 40px;
          }
          .ArticleContent,
          .ArticleContentTop
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
            aspect-ratio: 16/9;
          }
          {/* .ArticleContent p
          {
            display: flex;
            width: 100%;
            height: auto;
          } */}
          .ArticleContent {
          display: none;
        }

        .ArticleContent {
          display: none;
        }

        .ArticleContainerAnimation h2 {
          cursor: pointer;
        }

        .ArticleContainerAnimation.showContent .ArticleContent {
          display: block;
        }
        .ServicesContainer {
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

        .ServicesContent {
          display: flex;
          flex-direction: column;
          width: 100%;
          max-width: 1000px;
          height: auto;
          gap: 20px;
          justify-content: center;
          align-items: center;
        }
          @media only screen and (max-width: 800px)
          {
            .ArticleContent,
            .ArticleContentTop
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
              aspect-ratio: 16/9;
            }
          }
        `}</style>
    </>
  )
}

function ServiceItem({ title, content, id, image }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleContent = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <article id={id} onClick={toggleContent} className='ArticleContainerAnimation'>
        <div className='ArticleContentContainer'>
          <div className='TitleContainer'>
            <h2>{title}</h2>
            {!isOpen && (
            <p>+</p>
            )}
            {isOpen && (
            <p>-</p>
            )}
          </div>
          {isOpen && (
            <div className='ArticleContent'>
              <img src={`/assets/images/${image}`} />
              <p>{content}</p>
            </div>
          )}
        </div>
      </article>
      <style jsx>{`
        .ArticleContainerAnimation
        {
          display: flex;
          flex-direction: column;
          width: 100%;
          height: auto;
          min-height: 120px;
          gap: 20px;
          justify-content: center;
          align-items: center;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          border-radius: 40px;
          cursor: pointer;
          {/* background: var(--tsc-color); */}
          {/* background-image: url('/assets/images/image1.jpeg'); */}
        }
        .ArticleContentContainer
        {
          display: flex;
          width: 100%;
          height: auto;
          flex-direction: column;
          padding: 46px;
          border-radius: 40px;
          gap: 20px;
          background: var(--background-start-rgb-op);
        }
        .ArticleContent
        {
          display: flex;
          gap: 20px;
        }
        .ArticleContent p
        {
          width: 100%;
          font-size: 20px;
        }
        .ArticleContent img
        {
          width: 20%;
          min-width: 100px;
          height: 14vw;
          min-height: 100px;
          object-fit: cover;
          border-radius: 20px;
        }
        .TitleContainer
        {
          display: flex;
          width: 100%;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
        }
        .TitleContainer p
        {
          font-size: 20px;
        }
        #integrity
        {
          background-image: url("/assets/images/image18.jpeg");
        }
        #maintenance
        {
          background-image: url("/assets/images/image3.jpeg");
        }
        #repair
        {
          background-image: url("/assets/images/image0.jpeg");
        }
        @media only screen and (max-width: 800px)
        {
          .ArticleContent img
          {
            width: 100%;
            height: 200px;
          }
          .ArticleContent
          {
            flex-direction: column;
          }
        }
      `}</style>
    </>
  );
}