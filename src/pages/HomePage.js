import NavBar from "../components/NavBar";
import React from 'react';
import { Link } from "react-router-dom";
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import Ronnipicture from '../img/ronni-home.jpg';
import Studiopic from '../img/front-studio.png';
import Footer from "../components/Footer";
import PricesSlider from "../components/PricesSlider";

export default function HomePage() {

    return (
        <main className="main">
            <NavBar />
            <div className="content">
                <section className="imagesection">
                    <div className="opacity">
                        <div></div>
                        <div className="home-heading">
                            <h1 className="title-home">HR OG FRU TATTOO</h1>
                            <h2 className="title-home second-title">YOUR DREAM STUDIO</h2>
                        </div>
                        <div className="arrows-cont shake-vertical">
                            <KeyboardDoubleArrowDownIcon onClick={() => { window.scrollTo({top: 650, left: 0, behavior: 'smooth'});}} className="arrowsdown" sx={{ fontSize: "4rem" }}/>
                        </div>
                    </div>
                </section>
                <section>
                    <h1 className="sub-title-mobile">THE ARTIST</h1>
                    <h1 className="title-home-desktop">THE ARTIST & THE STUDIO</h1>
                    <div className="container-home-content">
                        <figure>
                            <img src={Ronnipicture} alt='ronni tattoo artist' className="ronni-home"></img>
                        </figure>
                        <article className="article-home">
                            <p className="home-text-p">Hey! My name is <span className="bold-text">Ronni Froberg</span>. I have over 20 years of experience as a tattoo artist from both in Denmark and abroad.</p>
                            <p className="home-text-p">The tattoo studio consist <span className="bold-text">only</span> of me.</p>
                            <p className="home-text-p">Through the many years as a tattoo artist, I have won several awards, including <span className="bold-text">1st place</span> at Denmark's largest tattoo fair <span className="bold-text">3 years in a row</span>.</p>
                            <p className="home-text-p">Regardless of what you wish for, I will do my best to give you an optimal service and quality tattoo - which only needs to be done once. Nothing is too big or too small!</p>
                        </article>
                    </div>
                </section>
                <section>
                    <h1 className="sub-title-mobile">THE STUDIO</h1>
                    <div className="container-home-content">
                        <figure>
                            <img src={Studiopic} alt='studio front' className="ronni-home"></img>
                        </figure>
                        <article className="article-home">
                            <p className="home-text-p">I do <span className="bold-text">all types and styles</span> of tattoos, in all size and shape but I emphasize that you are satisfied with your tattoo and the artist.</p>
                            <p className="home-text-p">For 12 years, I have had my shop in the <span className="bold-text">Viby Centre</span> mall, just outside Aarhus city.</p>
                            <p className="home-text-p">If you want to find me, just take the <span className="bold-text">stairs</span> by the door when you are entering the building, I am waiting for you on the <span className="bold-text">1st floor</span>!</p>
                        </article>
                    </div>
                </section>
                <section className="buttons-container">
                    <Link to='/portfolio' className="button-home" id="home-btn-left">My portfolio</Link>
                    <Link to='/consultation' className="button-home">Book a meeting!</Link>
                </section>
                <section className="price-section">
                    <h1 className="sub-title">PRICE</h1>
                    <div className="price-container">
                        <PricesSlider />
                    </div>
                </section>
            </div>
            <Footer />
        </main>
    )
}
    