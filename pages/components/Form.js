import React, { useState } from 'react';

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    try {
      const response = await fetch('https://formspree.io/f/mlekgork', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setIsSubmitted(true);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const closeSubmitContent = () => {
    setIsSubmitted(false);
  };

  return (
    <>
        <div className="contact-container">
        <div className="section-title">
            <h2>Contact</h2>
        </div>
        <div className="form-container">
            {isSubmitted ? (
            <div id="submit-dma-confirm">
                <div className="submit-dma-confirm-container">
                <div id="close-notification" onClick={closeSubmitContent}>
                    <span></span>
                    <span></span>
                </div>
                <h2>Message sent!</h2>
                <p>Thank you for contacting us, we will contact you soon.</p>
                </div>
            </div>
            ) : (
            <form
                id="contact-form"
                onSubmit={handleSubmit}
                action="https://formspree.io/f/mlekgork"
                method="POST"
            >
                <div className="inputBox">
                <input name="Nombre" type="text" required />
                <span>Name</span>
                <i></i>
                </div>
                <div className="inputBox">
                <input name="Empresa" type="text" required />
                <span>Subject</span>
                <i></i>
                </div>
                <div className="inputBox">
                <input name="Correo" type="email" required />
                <span>Email</span>
                <i></i>
                </div>
                <div className="inputBox">
                <textarea name="Mensaje" required></textarea>
                <span>Message</span>
                <i></i>
                </div>
                <div className="g-recaptcha" data-theme="dark" data-sitekey="6Le-ZUIkAAAAADVtPZJIn-UH1PIyTqCXUtERPpHv"></div>
                <div className="buttons-form">
                <input id="button-form" type="submit" value="Send" />
                <input id="button-form2" type="reset" value="Clear form" />
                </div>
            </form>
            )}
        </div>
        </div>
        <style jsx>{`
            .contact-container
            {
                display: flex;
                flex-direction: column;
                width: 100%;
                height: auto;
                padding: 0 20px;
                align-self: center;
                justify-content: center;
                align-items: center;
                background: var(--tsc-color);
                padding: 40px 20px;
                gap: 20px;
                color: #fff;
            }
            .form-container
            {
                display: flex;
                width: 100%;
                max-width: 1100px;
                max-width: 765px;
                height: auto;
            }
            #contact-form
            {
                display: flex;
                flex-direction: column;
                width: 100%;
                height: auto;
                gap: 30px;
            }
            #contact-form h2
            {
                text-align: center;
                padding: 20px;
            }
            .inputBox
            {
                position: relative;
                display: flex;
                flex-direction: column;
            }
            .inputBox input
            {
                position: relative;
                z-index: 6;
                width: 100%;
                height: 60px;
                padding: 0 20px;
                background: transparent;
                /* border: 2px solid var(--white); */
                border: none;
                border-radius: 20px;
                outline: none;
                color: var(--tsc-color);
                font-size: 20px;
            }
            .inputBox textarea
            {
                position: relative;
                z-index: 6;
                width: 100%;
                height: 120px;
                padding: 20px;
                background: transparent;
                border: none;
                border-radius: 20px;
                outline: none;
                color: var(--tsc-color);
                font-family: 'Roboto', sans-serif;
                font-size: 20px;
                resize: none;
            }
            .inputBox span
            {
                position: absolute;
                left: 0;
                margin-left: 8px;
                margin-top: 2px;
                padding: 10px 14px 10px 6px;
                font-size: 20px;
                font-weight: 700;
                font-family: 'Roboto', sans-serif;
                color: var(--grey1);
                pointer-events: none;
                transition: 0.4s;
                z-index: 4;
            }
            .inputBox input:valid ~ span,
            .inputBox input:focus ~ span,
            .inputBox textarea:valid ~ span,
            .inputBox textarea:focus ~ span
            {
                color: #fff;
                font-size: 12px;
                padding: 10px 6px 10px 6px;
                transform: translateY(-30px);
            }
            .inputBox i
            {
                position: absolute;
                left: 0;
                bottom: 0;
                width: 100%;
                height: 2px;
                background-color: #fff;
                border-radius: 10px;
                transition: 0.4s;
                pointer-events: none;
                z-index: 5;
            }
            .inputBox input:valid ~ i,
            .inputBox input:focus ~ i,
            .inputBox textarea:valid ~ i,
            .inputBox textarea:focus ~ i
            {
                height: 100%;
            }
            .buttons-form
            {
                display: flex;
                gap: 20px;
            }
            .buttons-form input[type="submit"]
            {
                display: flex;
                width: 100%;
                min-width: 64px;
                height: 60px;
                border: none;
                border-radius: 10px !important;
                background: white;
                font-family: 'Roboto', sans-serif;
                font-size: 14px;
                color: black;
                font-weight: 700;
                text-decoration: none;
                text-align: center;
                align-items: center;
                justify-content: center;
            }
            #button-form2
            {
                width: 30%;
                height:  60px;
                font-family: 'Roboto', sans-serif;
                font-size: 14px;
                font-weight: 600;
                cursor: pointer;
                background: transparent;
                color: var(--white);
                border: 2px solid var(--white);
                border-radius: 8px;
            }

            #submit-dma-confirm
            {
                position: fixed;
                z-index: 8;
                top: 0;
                left: 0;
                display: flex;
                width: 100vw;
                height: 100vh;
                background-image: linear-gradient(to top, rgba(255,0,0,0), rgb(0, 0, 0));
                backdrop-filter: blur(10px);
                justify-content: center;
                align-items: center;
            }
            .submit-dma-confirm-container
            {
                position: relative;
                display: flex;
                flex-direction: column;
                width: 80%;
                max-width: 700px;
                height: auto;
                padding: 60px 20px;
                text-align: center;
                justify-content: center;
                align-items: center;
                background: var(--tsc-color);
                {/* background: linear-gradient(to right, #000000, #333333); */}
                background-size: 500% 500%;
                animation: animate-background 1s infinite ease-in-out;
                border-radius: 8px;
                gap: 20px;
            }
            #close-notification
            {
                position: absolute;
                z-index: 9;
                top: 10px;
                right: 10px;
                display: flex;
                width: 30px;
                height: 30px;
                background: transparent;
                cursor: pointer;
            }
            #close-notification span
            {
                position: absolute;
                z-index: 6;
                top: 14px;
                right: 2px;
                width: 24px;
                height: 2px;
                background-color: white;
            }

            #close-notification span:nth-child(1)
            {
                transform: rotate(45deg);
            }
            #close-notification span:nth-child(2)
            {
                transform: rotate(-45deg);
            }
            .g-recaptcha {
                transform:scale(0.77);
                -webkit-transform:scale(0.77);
                transform-origin:0 0;
                -webkit-transform-origin:0 0;
                margin-bottom: -18px;
            }
        `}</style>
    </>
  );
};

export default Form;
