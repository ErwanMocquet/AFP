//import Rating from '@mui/material/Rating';
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import logo from '../img/logo.png';
import ReviewsSlider from "../components/ReviewsSlider";

export default function SomeSayPage () {
    return(
        <main className="main">
            <NavBar/>
            <div className="content content-somesay">
                <h1 className="title-pages title-somesay">REVIEWS</h1>
                <section className="reviews-section">
                    <ReviewsSlider className="sliderall" />
                </section>
                <section>
                    <h1 className='sub-title'>PRIZES & AWARDS</h1>
                    <p className='content-awards'>Throughout the years, HR og Fru Tattoo have won many prizes and awards during competitions, such as:</p>
                    <div className='container-list-compet'>
                        <p>Prison Ink<br></br>
                        Aarhus Tattoo Convention<br></br>
                        Nordic Ink</p>
                    </div>
                    <div className='prizes-container'>
                        <img src={logo} alt="Portfolio example" className="portfolio-img" />
                        <img src={logo} alt="Portfolio example" className="portfolio-img" />
                        <img src={logo} alt="Portfolio example" className="portfolio-img" />
                        <img src={logo} alt="Portfolio example" className="portfolio-img" />
                    </div>
                </section>
            </div>
            <Footer/>
        </main>
    )
}