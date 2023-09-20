import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import BackHeader from '../components/BackHeader'

export default function OurStory() {

  return (
    <>
        <Head>
            <title>Our Story | Texas Skilled Carpentry</title>
            <meta
            name="description"
            content="We craft top quality wooden roller coasters with 25+ years of expertise and a commitment to sustainability."
            />
            <meta property="og:title" content="Our Story | Texas Skilled Carpentry" />
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
          <h1>Our Story</h1>
          <div className='AboutUsContent'>
            <img id='ceo-image' src='/assets/ceo.jpg' />
            <p>
              <strong id='tsc-color'>Jose Luis Acevedo,</strong> the driving force behind Texas Skilled Carpentry, is a seasoned roller coaster carpenter whose passion for crafting thrilling wooden rides has been a lifelong journey. From his early days immersed in construction, he has honed his craft and transformed his childhood fascination into a successful career. With 17 years of dedicated service at CCI, he nurtured his skills and embraced his Hispanic heritage, finding a profound connection with woodwork.
            </p>
            <p>
              The transition to an independent contractor fulfilled not only his dreams but also those of his family, particularly his sons, Johny and Diego Acevedo, who share his enthusiasm for the roller coaster industry. Jose Luis' journey was made possible with the unwavering support of his dear friend Denise and her dedicated team, entrusting him with the leadership of a 21-member crew. Through faith in God and perseverance, he gained the invaluable experience necessary to steer a thriving business.
            </p>
            <p>
              While building wooden roller coasters has always been at the core of its mission, Jose Luis also assisted on groundbreaking projects with other coaster companies, introducing the first-ever 360° wooden roller coasters in both Wisconsin and Florida. Jose Luis Acevedo's story is one of passion, determination, and expertise, making him the go-to choice for park owners seeking a professional and established partner to bring their coaster dreams to life.
            </p>
            <div className='FlexRow'>
              <img id='SecondImage' src='/assets/images/image14.jpeg' />
              <p id='ColorWhite'>
                At Texas Skilled Carpentry, crafting wooden roller coasters is not just our business; it's our family's legacy. Led by Jose Luis Acevedo and his sons, Johny and Diego Acevedo, our company is built on the foundation of family values and a shared passion for creating thrilling experiences. When you work with us, you're not just hiring professionals; you're joining a family dedicated to making coaster dreams come true. 
              </p>
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