import Link from "next/link";

export default function Footer() {

  return (
    <>
        <div id="contacto" className="FooterContainer">
                <a className="FlexColumn" href="#inicio">
                    <i id="HeaderLogoFooter"></i>
                    <p>We craft top quality wooden roller coasters with 25+ years of expertise and a commitment to sustainability.</p>
                    <h3>Contact</h3>
                    <p>admin@tscarpentry.co</p>
                </a>
                <article>
                    <h3>Navigation</h3>
                    <ul>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/our-story">Our Story</Link></li>
                        <li><Link href="/projects">Projects</Link></li>
                        <li><Link href="/services">Services</Link></li>
                        <li><Link href="/meet-the-team">Meet The Team</Link></li>
                        <li><Link href="/#contact">Contact</Link></li>
                    </ul>
                </article>
                {/* <article>
                    <h3>Social</h3>
                    <ul>
                        <li><a 
                            target="_blank"
                            rel="noreferrer"
                            href="https://www.instagram.com/wearevelier/">Instagram
                        </a></li>
                        <li><a 
                            target="_blank"
                            rel="noreferrer"
                            href="https://www.facebook.com/WeAreVelier/">Facebook
                        </a></li>
                        <li><a 
                            target="_blank"
                            rel="noreferrer"
                            href="https://www.tiktok.com/@wearevelier">TikTok
                        </a></li>
                    </ul>
                </article> */}
        </div>
        <style jsx>{`
            .FooterContainer
            {
                display: flex;
                width: 100%;
                height: 400px;
                padding: 40px 100px;
                justify-content: space-between;
                gap: 40px;
                background: var(--background-start-rgb);
            }
            article
            {
                display: flex;
                flex-direction: column;
                gap: 40px;
            }
            ul
            {
                display: flex;
                flex-direction: column;
                list-style: none;
                gap: 10px;
            }
            @media only screen and (max-width: 800px)
            {
                .FooterContainer
                {
                    flex-direction: column;
                    height: fit-content;
                    padding: 40px;
                }
            }
        `}</style>
    </>
  );
}