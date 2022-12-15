// made by Maggie and Erwan

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import SecondForm from '../components/FormSecond';

// this is the second page of the consultation - it renders the second component of the form

export default function ConsultationPageTwo() {
    return (
        <div className="main">
            <NavBar/>
                <div className="content consultarea">
                    <h1 className="title-pages">TELL ME WHO YOU ARE</h1>
                    <SecondForm />
                </div>
            <Footer/>
        </div>
    )
}