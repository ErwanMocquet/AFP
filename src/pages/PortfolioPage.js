import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import PortfolioColored from "../components/PortfolioColored";
import PortfolioBW from "../components/PortfolioBW";
import PortfolioCovers from "../components/PortfolioCovers";
import { useState } from "react";

export default function PortfolioPage () {

    let [portfolio, setPortfolios] = useState(<PortfolioBW />);

    function showBW() {
        document.querySelector("#button2").classList.remove("underline");
        document.querySelector("#button3").classList.remove("underline");
        document.querySelector("#button1").classList.add("underline");
        setPortfolios(<PortfolioBW />)
    }

    function showColor() {
        document.querySelector("#button3").classList.remove("underline");
        document.querySelector("#button1").classList.remove("underline");
        document.querySelector("#button2").classList.add("underline");
        setPortfolios(<PortfolioColored />)
    }

    function showCoverup() {
        document.querySelector("#button1").classList.remove("underline");
        document.querySelector("#button2").classList.remove("underline");
        document.querySelector("#button3").classList.add("underline");
        setPortfolios(<PortfolioCovers />)
    }

    return (
        <main className="main">
            <NavBar />
            <div className="content portfolio-content">
                <h1 className="title-pages">PORTFOLIO</h1>
                <div className="portfolio-container">
                    <div className="buttons-container-portfolio">
                        <button className="portfolio-btn underline" id="button1" onClick={showBW}>B & W</button>
                        <button className="portfolio-btn" id="button2" onClick={showColor}>Color</button>
                        <button className="portfolio-btn" id="button3" onClick={showCoverup}>Cover-up</button>
                    </div>
                    {portfolio}
                </div>
            </div>
            <Footer />
        </main>
    )


}