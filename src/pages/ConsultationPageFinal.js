// made by Maggie and Igor
// this page is the onboarding after submitting the form

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { Link } from "react-router-dom";

export default function ConsultationPageFinal () {
    return (
        <div className="main">
            <NavBar />
            <div className="content finalcontent consultarea">
                <div className="consultation-final-cont">
                    <div className="final-img-cont">
                        <CheckCircleOutlineIcon sx={{ fontSize: "7rem" }} className="final-img"/>
                    </div>
                    <div className="final-text-cont">
                        <h1 className="finaltext">Thank you for reaching out! You will receive an email from me as soon as possible.</h1>
                    </div>
                    <div className="final-button-cont">
                        <Link to="/"><button className="button-home button-final">Return home</button></Link>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}