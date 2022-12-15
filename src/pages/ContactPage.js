// made by Kate, Maggie, Erwan

import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
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
                                <div className="map-address-cont">
                                    <div className="container-map">
                                        <div className="mapouter">
                                            <div className="gmap_canvas">
                                                <iframe className="gmap_canvas" src="https://maps.google.com/maps?q=ringvej%204-10&t=&z=15&ie=UTF8&iwloc=&output=embed"  title="map"></iframe>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="contact-address">Viby Ringvej 4 - 10<br></br>8260 Viby J</p>
                                </div>
                            </div>
                        </div>
                </div>
                <div className="video-contact-cont">
                    <iframe className="video-contact" width="350" height="240" src="https://www.youtube.com/embed/Z9XMpq48Xjg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            </div>
            <Footer/>
        </main>
    )
}