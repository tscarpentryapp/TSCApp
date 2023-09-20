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
      <div id='home' className='CoverContainer'>
        <div className="CoverBackground">
          <div id="VideoBackground">
            <video autoPlay loop muted playsInline preload="auto">
              <source src="/assets/video/tsc-cover.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
        {/* <img id='CoverRollerCoasterImage' src='/assets/roller-coaster-canva.png' /> */}
        <div className='TitleCoverContainer'>
          {/* <span id='DesktopItemFull'></span> */}
          <div className='MotionDiv Desktop'>
            {/* <span></span> */}
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
                  fontWeight: '900',
                  color: '#fff', 
                  marginTop: '-2vw', 
                  textShadow: '5px 5px 100px rgba(0, 0, 0, .4)',
                  textAlign: 'center',
                }}
              > 
              {words[index]}
              </motion.div>
            </div>
            <p id='ColorWhite'>We craft top quality wooden roller coasters with 25+ years of expertise and a commitment to sustainability.</p>
          </div>
          <div className='MotionDiv Mobile'>
            {/* <span></span> */}
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
                  fontWeight: '900',
                  color: '#fff', 
                  marginTop: '-2vw', 
                  textShadow: '5px 5px 100px rgba(0, 0, 0, .4)',
                  textAlign: 'center',
                }}
              > 
              {words[index]}
              </motion.div>
            </div>
            <p id='ColorWhite'>We craft top quality wooden roller coasters with 25+ years of expertise and a commitment to sustainability.</p>
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
          height: 500px;
          justify-content: end;
          align-items: center;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          background-image: linear-gradient(to top, var(--tsc-color), rgba(0, 0, 0, 0));
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
          justify-content: center;
          align-items: center;
        }
        .MotionDiv.Mobile
        {
          display: none;
        }
        .MotionDiv p
        {
          color: var(--cover-color);
          text-align: center;
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
        .CoverBackground {
          position: absolute;
          display: flex;
          width: 100%;
          height: 500px;
        }
        #VideoBackground {
          top: 0px;
          width: 100%;
          height: 500px;
          overflow: hidden;
        }
        #VideoBackground video {
          width: 100%;
          height: 500px;
          object-fit: cover;
          overflow: hidden;
          {/* filter: grayscale(1); */}
          transform: scale(1.2) translateX(3%) translateY(3%);
          opacity: .5;
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
