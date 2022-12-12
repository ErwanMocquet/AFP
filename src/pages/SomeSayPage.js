import Rating from '@mui/material/Rating';
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import logo from '../img/logo.png'

export default function SomeSayPage () {
    return(
        <main className="main">
            <NavBar/>
            <div className="content">
                <h1 className="title-pages title-somesay">REVIEWS</h1>
                <section className="review-container">
                    <div className="review-bloc">
                        <h1 className="review-name">Morten Brink Pedersen</h1>
                        <Rating sx={{"& .MuiRating-iconFilled":{color:"#8E1B33"}}} name="read-only" value={5} readOnly size='large'/>
                        <p className="review-content">"Fantastically skilled tattoo artist where there is always a focus on good quality!
                        Definitely my favorite tattoo artist and I would recommend Ronni to anyone considering a new tattoo. Whether it's the first or the 100th, I'm sure you'll always get the best guidance you could need!"</p>
                    </div>
                    <div className="review-bloc">
                        <h1 className="review-name">Bjarke Fuglsang</h1>
                        <Rating sx={{"& .MuiRating-iconFilled":{color:"#8E1B33"}}} name="read-only" value={5} readOnly size='large'/>
                        <p className="review-content">"A nice place to be!! -
                        From the start when you come through the door to Mr and Mrs Tattoo
                        You are greeted by "good feeling" and you quickly feel that you are in "safe" hands, with expert help from Ronni.
                        The work that Ronni does is 100% world class - It doesn't get done much better."</p>
                    </div>
                    <div className="review-bloc">
                        <h1 className="review-name">Christina Rosendahl</h1>
                        <Rating sx={{"& .MuiRating-iconFilled":{color:"#8E1B33"}}} name="read-only" value={5} readOnly size='large'/>
                        <p className="review-content">"Fantastic place, good service and hygiene, great guidance and advice, and not least fantastic work! This will definitely be my favorite tattoo artist in the future! "</p>
                    </div>
                    <div className="review-bloc">
                        <h1 className="review-name">Nicolai Schou</h1>
                        <Rating sx={{"& .MuiRating-iconFilled":{color:"#8E1B33"}}} name="read-only" value={5} readOnly size='large'/>
                        <p className="review-content">"I am super happy with the tattoos Ronni has done on me. Fantastic service, where there was time to talk about my ideas and find the coolest motifs. I will not go anywhere else in the future!"</p>
                    </div>
                </section>
                <section>
                    <h1 className='sub-title'>PRIZES & AWARDS</h1>
                    <p className='content-awards'>Throughout the year, HR og Fru Tattoo have win many prizes and awards during competitions, such as:</p>
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