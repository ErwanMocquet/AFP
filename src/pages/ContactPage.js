import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import Video from '../img/screenshot-contact.png'
import Footer from "../components/Footer";

export default function ContactPage () {
    return(
        <main className="main">
            <NavBar/>
            <div className="content btn-contact-cont">
                <div className="buttons-container btn-contact">
                <Link to='/consultation' className="button-home btn-contact">Book a meeting!</Link>
                </div>
                <h1 className="title-pages title-contact mobile">CONTACT</h1>
                <div className="contact-container">
                        <div className="contact-page">
                            <div className="contact-left">
                                <div className="contact-left-insidecont">
                                    <div className="contact-single">
                                        <h1 className="title-pages title-contact desktop">CONTACT</h1>
                                    </div>
                                    <div className="contact-single">
                                        <PhoneIcon className="mobile-footer mobile-contact" sx={{fontSize: '3rem'}}/>
                                        <PhoneIcon className="desktop-footer desktop-contact" sx={{ fontSize: "4rem" }} />
                                        <a href="tel:+4550391611" className="contact-text">50 39 16 11</a>
                                    </div>
                                    <div className="contact-single">
                                        <MailIcon className="mobile-footer mobile-contact" sx={{ fontSize: "3rem" }}/>
                                        <MailIcon className="desktop-footer desktop-contact" sx={{ fontSize: "4rem" }} />
                                        <a href="mailto:ronnifroberg@hotmail.com" className="contact-text">ronnifroberg@hotmail.com</a>
                                    </div>
                                </div>
                            </div>
                            <div className="contact-middle">
                                <div className="middleline"></div>
                            </div>
                            <div className="contact-right">
                                <div className="vid-address-cont">
                                    <div className="container-video">
                                        <img className="video-contact" src={Video} alt=""></img>
                                    </div>
                                    <p className="contact-address">Viby Ringvej 4 - 10<br></br>8260 Viby J</p>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
            <Footer/>
        </main>
    )
}