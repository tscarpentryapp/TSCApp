import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const words = [ 'CRAFTING THRILLS', 'BUILDING DREAMS', 'EARNED TRUST'];

export default function Cover() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div id='inicio' className='CoverContainer'>
        <img id='CoverRollerCoasterImage' src='/assets/roller-coaster-canva.png' />
        <div className='TitleCoverContainer'>
          {/* <span id='DesktopItemFull'></span> */}
          <div className='MotionDiv Desktop'>
            <span></span>
            <div className='MotionContainer'>
              <motion.div
                key={index}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
                transition={{ duration: 0.5 }}
                style={{ 
                  fontSize: '6vw', 
                  fontFamily: 'Roboto', 
                  fontWeight: '700',
                  color: '#fff', 
                  marginTop: '-2vw', 
                  textShadow: '5px 5px 100px rgba(0, 0, 0, .4)',
                  textAlign: 'center',
                }}
              > 
              {words[index]}
              </motion.div>
            </div>
            <h2>We craft top quality wooden roller coasters with 25+ years of expertise and a commitment to sustainability.</h2>
          </div>
          <div className='MotionDiv Mobile'>
            <span></span>
            <div className='MotionContainer'>
              <motion.div
                key={index}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
                transition={{ duration: 0.5 }}
                style={{ 
                  fontSize: '12vw', 
                  fontFamily: 'Roboto', 
                  fontWeight: '700',
                  color: '#fff', 
                  marginTop: '-2vw', 
                  textShadow: '5px 5px 100px rgba(0, 0, 0, .4)',
                  textAlign: 'center',
                }}
              > 
              {words[index]}
              </motion.div>
            </div>
            <h2>We craft top quality wooden roller coasters with 25+ years of expertise and a commitment to sustainability.</h2>
          </div>
        </div>
      </div>
      <style jsx>{`
        .CoverContainer
        {
          position: relative;
          display: flex;
          flex-direction: column;
          width: 100%;
          height: 60vh;
          min-height: 500px;
          justify-content: end;
          align-items: center;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          background: #004ba6;
          background-image: linear-gradient(to top, var(--background-start-rgb), rgba(0, 0, 0, 0));
          {/* background-image: linear-gradient(var(--background-start-rgb), rgba(0, 0, 0, 0)), url(https://images.unsplash.com/photo-1677080946126-99bbc7b19747?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3840&q=80); */}
          {/* background-image: url(https://images.unsplash.com/photo-1664575602554-2087b04935a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80); */}
          {/* background-image: url(https://images.unsplash.com/photo-1664575599736-c5197c684128?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80); */}
        }
        .TitleCoverContainer
        {
          position: relative;
          bottom: 0;
          display: flex;
          width: 100%;
          height: 100%;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 20px;
        }
        .TitleCoverContainer h1
        {
          font-size: 2vw;
          font-weight: 300;
        }
        .MotionDiv
        {
          display: flex;
          flex-direction: column;
          width: 100%;
          height: 100%;
          justify-content: space-between;
          align-items: center;
        }
        .MotionDiv.Mobile
        {
          display: none;
        }
        .MotionDiv h2
        {
          text-align: center;
          color: var(--tsc-color);
        }
        .MotionContainer
        {
          width: 100%;
          padding: 40px;
        }
        #CoverRollerCoasterImage
        {
          position: absolute;
          width: 300%;
          max-width: 1600px;
          opacity: .4;
        }
        @media only screen and (max-width: 800px)
        {
          .CoverContainer
          {
            {/* min-height: 200px; */}
            {/* height: 100svh; */}
          }
          .TitleCoverContainer
          {
            {/* top: 18vh; */}
          }
          .TitleCoverContainer h1
          {
            font-size: 4vw;
          }
          .MotionDiv.Desktop
          {
            display: none;
          }
          .MotionDiv.Mobile
          {
            display: flex;
          }
        }
        @media only screen and (max-width: 350px)
        {
          .TitleCoverContainer
          {
            justify-content: center;
          }
          .CoverContainer
          {
            justify-content: center;
          }
          p,
          {
            font-size: 12px;
          }
        }
      `}</style>
    </>
  );
};