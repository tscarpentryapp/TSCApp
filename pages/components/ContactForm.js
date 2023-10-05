import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
export default function ContactForm() {
  const [state, handleSubmit] = useForm("xyyqnvyq");
  if (state.succeeded) {
      return (
        <>
        <div className='contact-container'>
            <div className='form-container'>
                <h2>Message sent!</h2>
                <p>Thank you for contacting us, we will contact you soon.</p>
            </div>
        </div>
        <style jsx>{`
            .contact-container
            {
                display: flex;
                flex-direction: column;
                width: 100%;
                height: auto;
                padding: 20px 20px 40px;
                align-self: center;
                justify-content: center;
                align-items: center;
                background: var(--tsc-color);
                gap: 20px;
                color: #fff;
            }
            .form-container
            {
                display: flex;
                flex-direction: column;
                width: 100%;
                max-width: 1100px;
                max-width: 765px;
                height: auto;
                gap: 10px;
                text-align: center;
            }
            h2
            {
                padding: 20px;
            }
        `}</style>
        </>
      ) 
  }

  return (
    <>
      <div>
        <div className='contact-container'>
          <div className='form-container'>
            <div className="section-title">
                <h2>Contact</h2>
                <p>We stay in constant communication with our customers until the job is done. To get a quote, or if you have questions or special requests, send us an email.</p>
            </div>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div className='inputBox'>
                    <label htmlFor="name">
                        Name
                    </label>
                    <input
                        id="name"
                        type="name" 
                        name="name"
                    />
                    <ValidationError 
                        prefix="Name" 
                        field="name"
                        errors={state.errors}
                    />
                </div>
                <div className='inputBox'>
                    <label htmlFor="email">
                        Email
                    </label>
                    <input
                        id="email"
                        type="email" 
                        name="email"
                    />
                    <ValidationError 
                        prefix="Email" 
                        field="email"
                        errors={state.errors}
                    />
                </div>
                <div className='inputBox'>
                    <label htmlFor="number">
                        Phone number
                    </label>
                    <input
                        id="number"
                        type="number" 
                        name="number"
                    />
                    <ValidationError 
                        prefix="Number" 
                        field="number"
                        errors={state.errors}
                    />
                </div>
                <div className='inputBox'>
                    <label htmlFor="email">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                    />
                    <ValidationError 
                        prefix="Message" 
                        field="message"
                        errors={state.errors}
                    />
                </div>
                <button id='button-form' type="submit" disabled={state.submitting}>
                    Submit
                </button>
                </form>
            </div>
        </div>
      </div>
      <style jsx>{`
            .contact-container,
            .contact-container2
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
            .form-container,
            .form-container2
            {
                display: flex;
                flex-direction: column;
                width: 100%;
                max-width: 1100px;
                max-width: 765px;
                height: auto;
                gap: 20px;
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
                gap: 10px;
            }
            .inputBox input
            {
                position: relative;
                z-index: 6;
                width: 100%;
                height: 60px;
                padding: 0 20px;
                /* border: 2px solid var(--white); */
                border: none;
                border-radius: 20px;
                outline: none;
                color: var(--tsc-color);
                background: #fff;
                font-size: 20px;
            }
            .inputBox textarea
            {
                position: relative;
                z-index: 6;
                width: 100%;
                height: 120px;
                padding: 20px;
                border: none;
                border-radius: 20px;
                outline: none;
                color: var(--tsc-color);
                background: #fff;
                font-family: 'Roboto', sans-serif;
                font-size: 20px;
                resize: none;
            }
            .buttons-form
            {
                display: flex;
                gap: 20px;
            }
            #button-form
            {
                display: flex;
                width: 100%;
                min-width: 64px;
                height: 60px;
                border: none;
                border-radius: 20px !important;
                background: white;
                font-family: 'Roboto', sans-serif;
                font-size: 20px;
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
            .SubmitContainer
            {
                display: flex;
                flex-direction: column;
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
}