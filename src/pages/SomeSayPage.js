// made by Erwan, Igor and Kate

import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import ReviewsSlider from "../components/ReviewsSlider";
import Award1 from '../img/awards/aw1.png'
import Award2 from '../img/awards/aw2.png'
import Award3 from '../img/awards/aw3.png'
import Award4 from '../img/awards/aw4.png'
import Award5 from '../img/awards/aw5.png'
import Award6 from '../img/awards/aw6.png'
import Award7 from '../img/awards/aw7.png'
import Award8 from '../img/awards/aw8.png'
import Award9 from '../img/awards/aw9.png'
import Award10 from '../img/awards/aw10.png'
import Award11 from '../img/awards/aw11.png'
import Award12 from '../img/awards/aw12.png'

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
                    <div className='award-img-container'>
                        <img src={Award1} alt="Portfolio example" className="award-img" />
                        <img src={Award2} alt="Portfolio example" className="award-img" />
                        <img src={Award3} alt="Portfolio example" className="award-img" />
                        <img src={Award4} alt="Portfolio example" className="award-img" />
                        <img src={Award5} alt="Portfolio example" className="award-img" />
                        <img src={Award6} alt="Portfolio example" className="award-img" />
                        <img src={Award7} alt="Portfolio example" className="award-img" />
                        <img src={Award8} alt="Portfolio example" className="award-img" />
                        <img src={Award9} alt="Portfolio example" className="award-img" />
                        <img src={Award10} alt="Portfolio example" className="award-img" />
                        <img src={Award11} alt="Portfolio example" className="award-img" />
                        <img src={Award12} alt="Portfolio example" className="award-img" />
                    </div>
                </section>
            </div>
            <Footer/>
        </main>
    )
}