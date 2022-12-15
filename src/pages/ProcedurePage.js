// made by Erwan

import NavBar from "../components/NavBar";
import Accordion from "../components/Accordion";
import {accordionData} from "../utils/AccordionData";
import Footer from "../components/Footer";

// on this page the accordion component is rendered

export default function ProcedurePage () {
    return(
        <main className="main">
            <NavBar/>
            <div className="content">
                <div className="container-main-care">
                    <h1 className="title-pages">PROCEDURES & CARE</h1>
                    <section className="accordion-container">
                        {accordionData.map(({ title, content, id }) => (
                            <Accordion title={title} content={content} key={id} />))}
                    </section>
                </div>
            </div>
            <Footer/>
        </main>
    )
}