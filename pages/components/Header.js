import Link from "next/link";
import { useContext, useRef } from "react";
import { useRouter } from "next/router";

export default function HeaderGeneral() {
  const router = useRouter();

  const menuButtonRef = useRef(null);
  const menuContentRef = useRef(null);
  const headerRef = useRef(null);
  const logoRef = useRef(null);

  function handleBurgerClick() {
    menuButtonRef.current.classList.toggle("Open");
    menuContentRef.current.classList.toggle("Open");
    headerRef.current.classList.toggle("Open");
    logoRef.current.classList.toggle("Open");
  }

  const isHomePage = router.pathname === "/";

  return (
    <>
      <nav className="NavContainer">
        <div ref={headerRef} className="NavFull">
          {isHomePage ? (
            <a href="#home">
              <i ref={logoRef} id="HeaderLogo"></i>
            </a>
          ) : (
            <Link href="/">
              <i ref={logoRef} id="HeaderLogo"></i>
            </Link>
          )}

          <div className="NavNavigation">
            <div className="NavSwitch">
              <div className="NavLinksContainer">
                <ul className="NavLinks">
                    <li>
                        {isHomePage ? (
                        <a href="#home">Home</a>
                        ) : (
                        <Link href="/">Home</Link>
                        )}
                    </li>
                    <li>
                        {/* <a href="">Templates</a> */}
                        <Link href="/our-story">Our Story</Link>
                    </li>
                    <li>
                        {/* <a href="#contacto">Contacto</a> */}
                        <Link href="/projects">Projects</Link>
                    </li>
                    <li>
                        {/* <a href="#contacto">Contacto</a> */}
                        <Link href="/services">Services</Link>
                    </li>
                    <li>
                        {/* <a href="#contacto">Contacto</a> */}
                        <Link href="/meet-the-team">Meet The Team</Link>
                    </li>
                    <li>
                        <a href="/#contact">Contact</a>
                    </li>
                </ul>
              </div>
              <div className="ButtonsTeam">
                <button
                onClick={handleBurgerClick}
                ref={menuButtonRef}
                className="MenuButton"
                >
                <div className="MenuButtonBurger"></div>
                </button>
                {/* <Link href="/entrar">
                    <div className="ContentButton">Team</div>
                </Link> */}
              </div>
            </div>
          </div>
        </div>
        <div className="MenuMobileContainer">
          <div ref={menuContentRef} className="MenuMobileBackground">
            <div className="MenuMobileLinksContainer">
              <ul className="MenuMobileLinks">
                <li>
                  {isHomePage ? (
                    <a onClick={handleBurgerClick} href="#home">
                      Home
                    </a>
                  ) : (
                    <Link onClick={handleBurgerClick} href="/">
                      Home
                    </Link>
                  )}
                </li>
                <li>
                    <Link onClick={handleBurgerClick} href="/our-story">
                      Our Story
                    </Link>
                </li>
                <li>
                    <Link onClick={handleBurgerClick} href="/projects">
                      Projects
                    </Link>
                </li>
                <li>
                    <Link onClick={handleBurgerClick} href="/services">
                      Services
                    </Link>
                </li>
                <li>
                    <Link onClick={handleBurgerClick} href="/meet-the-team">
                      Meet The Team
                    </Link>
                </li>
                <li>
                    <a onClick={handleBurgerClick} href="/#contact">
                      Contact
                    </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <style jsx>{`
      
      
        /* Header code */
      
        .NavContainer {
          position: fixed;
          z-index: 999999;
          display: flex;
          flex-direction: column;
          width: 100%;
          height: auto;
          justify-content: center;
          align-items: center;
          {/* padding: 20px; */}
        }
        .NavAvisos {
          position: relative;
          z-index: 9999;
          display: flex;
          width: 100%;
          height: 40px;
          justify-content: center;
          align-items: center;
          gap: 10px;
          font-size: 12px;
          background-color: var(--foreground-rgb);
        }
        .NavAvisos a {
          text-decoration: underline;
          color: var(--foreground-rgb);
        }
        .NavFull {
          position: relative;
          z-index: 9999;
          display: flex;
          width: 100%;
          height: 80px;
          justify-content: space-between;
          align-items: center;
          padding: 0 30px;
          background: #004ba6;
          backdrop-filter: blur(100px);
          transition: all 0.2s ease-in-out;
          overflow: hidden;
          {/* border-radius: 20px; */}
          {/* max-width: 1100px; */}
        }
        .NavFull.Open
        {
          height: 100svh;
        }
        .NavFull img {
          width: auto;
          height: 30px;
        }
        #HeaderLogo,
        #HeaderLogoFooter
        {
          width: 66px;
          height: 50px;
          opacity: 1;
          background-position: center;
          background-size: cover;
          background-repeat: no-repeat;
          {/* background-image: var(--dynamic-logo); */}
        }
        #HeaderLogoDentist
        {
          background-image: var(--dynamic-dentist-logo);
          width: 24.8px;
          height: 27.8px;
          opacity: 1;
          background-position: center;
          background-size: cover;
          background-repeat: no-repeat;
        }
        #HeaderLogoTemplate
        {
          font-size: 34px;
        }
        #HeaderLogo.Open,
        #HeaderLogoTemplate.Open,
        #HeaderLogoDentist.Open
        {
          opacity: 0;
        }
      
        .LogoOpacity {
          opacity: 0;
        }
        .NavNavigation {
          display: flex;
          width: fit-content;
          height: auto;
          gap: 20px;
          justify-content: center;
          align-items: center;
        }
        .NavLinksContainer {
          display: block;
        }
        .NavLinks {
          display: flex;
          width: fit-content;
          height: auto;
          list-style: none;
          gap: 20px;
          font-family: "Roboto", sans-serif;
          /* font-family: 'Noto Serif Display', serif; */
          color: #fff;
        }
        .NavLinks li {
          display: flex;
          align-items: center;
          font-size: 20px;
        }
        .MenuButton {
          position: relative;
          display: none;
          width: 30px;
          height: 30px;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          transition: all 0.5s ease-in-out;
          border: none;
          background: transparent;
        }
        .MenuButtonBurger {
          width: 30px;
          height: 3px;
          background: transparent;
          border-radius: 5px;
          transform: translateX(-15px);
          transition: all 0.2s ease-in-out;
        }
        .MenuButtonBurger::before,
        .MenuButtonBurger::after {
          content: " ";
          position: absolute;
          width: 30px;
          height: 3px;
          border-radius: 5px;
          transition: all 0.2s ease-in-out;
          background: #fff;
          {/* background: var(--foreground-rgb); */}
        }
        .MenuButtonBurger::before {
          transform: translateY(5px);
        }
        .MenuButtonBurger::after {
          transform: translateY(-5px);
        }
        .MenuButton.Open .MenuButtonBurger::before {
          transform: rotate(45deg);
        }
        .MenuButton.Open .MenuButtonBurger::after {
          transform: rotate(-45deg);
        }
        .MenuMobileContainer {
          display: none;
          width: 100%;
        }
        .MenuMobileBackground {
          position: absolute;
          z-index: 1;
          top: 20px;
          display: none;
          width: 50%;
          padding-right: 40px;
          height: fit-content;
          opacity: 0;
          transition: all 0.2s ease-in-out;
          /* transform: translateY(-230px); */
          background-color: transparent;
        }
        .MenuMobileBackground.Open {
          z-index: 99999;
          opacity: 1;
          display: flex;
        }
        .MenuMobileLinksContainer {
          display: flex;
          width: 100%;
          height: auto;
          padding: 40px;
        }
        .MenuMobileLinks {
          display: flex;
          width: 100%;
          height: auto;
          flex-direction: column;
          align-items: flex-start;
          list-style: none;
          gap: 40px;
          font-size: 20px;
          color: #fff;
        }
        .NavTeam
        {
          position: absolute;
          top: 80px;
          display: flex;
          width: 100%;
          padding: 20px;
        }
        .NavSwitch
        {
          display: flex;
          align-items: center;
          gap: 30px;
        }
        .ButtonsTeam
        {
          display: flex;
          gap: 30px;
          align-items: center;
          justify-content: center;
        }
        @media only screen and (max-width: 800px)
        {
          .NavNavigation {
          flex-direction: row-reverse;
          }
          .NavLinksContainer {
            display: none;
          }
          .MenuButton {
            display: flex;
          }
          .MenuMobileContainer
          {
            display: flex;
          }
        }
      `}</style>
    </>
  );
}