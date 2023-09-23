import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import BackHeader from '../components/BackHeader'

export default function MeetTheTeam() {

  return (
    <>
        <Head>
            <title>Meet The Team | Texas Skilled Carpentry</title>
            <meta
            name="description"
            content="We craft top quality wooden roller coasters with 25+ years of expertise and a commitment to sustainability."
            />
            <meta property="og:title" content="Meet The Team | Texas Skilled Carpentry" />
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
        <div className='AboutUsContainer'>
          <h1>Meet The Team</h1>
          <div className='AboutUsContent'>
            <div className='TeamMemberCard'>
              <img id='ceo-image' src='/assets/ceo_2.jpg' />
              <h2>Jose Luis Acevedo</h2>
              <p>CEO</p>
            </div>
            <div className='TeamMemberContainer'>
              <div className='TeamMemberCard'>
                <img id='ceo-image' src='/assets/johnny.jpg' />
                <h2>Johny Acevedo</h2>
                <p>Project Manager</p>
              </div>
              <div className='TeamMemberCard'>
                <img id='ceo-image' src='/assets/diego.jpg' />
                <h2>Diego Acevedo</h2>
                <p>Assistant Manager</p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
        <style jsx>{`
          .AboutUsContainer
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
          .AboutUsContent
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
          #ceo-image
          {
            width: 100%;
            height: auto;
            max-width: 200px;
            border-radius: 50%;
            aspect-ratio: 1/1;
            object-fit: cover;
          }
          #tsc-color
          {
            color: var(--tsc-color);
          }
          .FlexRow
          {
            display: flex;
            flex-direction: row;
            width: 100%;
            height: auto;
            padding: 20px;
            gap: 20px;
            justify-content: center;
            align-items: center;
            background: var(--tsc-color);
            border-radius: 40px;
          }
          #SecondImage
          {
            width: 100%;
            max-width: 300px;
            object-fit: cover;
            aspect-ratio: 1/1;
            border-radius: 20px;
          }
          .TeamMemberContainer
          {
            display: flex;
            width: 100%;
            justify-content: center;
            gap: 40px;
          }
          .TeamMemberCard
          {
            display: flex;
            flex-direction: column;
            gap: 10px;
            justify-content: center;
            align-items: center;
            text-align: center;
          }
          @media only screen and (max-width: 800px)
          {
            #SecondImage
            {
              max-width: 1000px;
              aspect-ratio: 16/9;
            } 
            .FlexRow
            {
              flex-direction: column;
            }
          }
        `}</style>
    </>
  )
}