import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import SecondForm from '../components/FormSecond';

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