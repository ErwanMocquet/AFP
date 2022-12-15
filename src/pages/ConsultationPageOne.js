import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import FormFirst from "../components/FormFirst";

export default function ConsultationPageOne () {
    return (
        <div className="main">
            <NavBar />
                <div className="content consultarea">
                    <h1 className="title-pages">TELL ME WHAT YOU WANT </h1>
                    <FormFirst />
                </div>
            <Footer />
        </div>
    )
}