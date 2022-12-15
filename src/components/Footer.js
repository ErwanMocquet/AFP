//made by Igor and Kate

import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

export default function Footer () {
    return (
        <div className="footer-main">
            <div className="footer-top">
                <div className="footer-hours">
                    <h2 className="footer-hours-head">Opening hours:</h2>
                    <p className="footer-single-hour">Monday - closed</p>
                    <p className="footer-single-hour">Tuesday - 12:00 - 19:00</p>
                    <p className="footer-single-hour">Wednesday - 10:00 - 16:00</p>
                    <p className="footer-single-hour">Thursday - 12:00 - 19:00</p>
                    <p className="footer-single-hour">Friday - 10:00 - 16:00</p>
                    <p className="footer-single-hour">Saturday - 10:00 - 15:00</p>
                    <p className="footer-single-hour">Sunday - closed</p>
                </div>
                <div className="footer-middle">
                    <div className="footer-location-cont">
                        <h2 className="footerloc-heading">Location:</h2>
                        <p className="footerloc-text">Viby Ringvej 4 - 10</p>
                        <p className="footerloc-text">8260 Viby J</p>
                        <p className="footerloc-text">Upstairs, above the main entrance</p>
                    </div>
                    <div className="footer-contact-cont">
                        <h2 className="footercontact-heading">Contact:</h2>
                        <div className="footer-contact">
                            <div className="footer-contact-single">
                                <PhoneIcon className="mobile-footer" />
                                <PhoneIcon className="desktop-footer" sx={{ fontSize: "3rem" }} />
                                <a href="tel:+4550391611" className="footercontact-text">50 39 16 11</a>
                            </div>
                            <div className="footer-contact-single">
                                <MailIcon className="mobile-footer" />
                                <MailIcon className="desktop-footer" sx={{ fontSize: "3rem" }} />
                                <a href="mailto:ronnifroberg@hotmail.com" className="footercontact-text">ronnifroberg@hotmail.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <h2 className="footersome-heading">Social media:</h2>
                <div className="footer-some">
                    <a href='https://www.instagram.com/hrogfru_tattoo/'><InstagramIcon sx={{ fontSize: "4rem" }} className="someleft some" /></a>
                    <a href='https://www.facebook.com/ronnifroberg/'><FacebookIcon sx={{ fontSize: "4rem" }} className="someright some" /></a>
                </div>
            </div>
        </div>
    )
}