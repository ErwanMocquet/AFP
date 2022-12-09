import NavBar from "../components/NavBar";
import logo from "../img/logo.png";
import Footer from "../components/Footer";

export default function PortfolioPage () {
    return (
        <main className="main">
            <NavBar />
            <div className="content portfolio-content">
                <h1 className="title-pages">PORTFOLIO</h1>
                <div className="portfolio-container">
                    <div className="buttons-container-portfolio">
                        <button className="portfolio-btn" id="button1">B & W</button>
                        <button className="portfolio-btn" id="button2">Color</button>
                        <button className="portfolio-btn" id="button3">Coverup</button>
                        <button className="portfolio-btn" id="button4">My awards</button>
                    </div>
                    <div className="portfolio-img-container">
                        <img src={logo} alt="Portfolio example" className="portfolio-img" />
                        <img src={logo} alt="Portfolio example" className="portfolio-img" />
                        <img src={logo} alt="Portfolio example" className="portfolio-img" />
                        <img src={logo} alt="Portfolio example" className="portfolio-img" />
                        <img src={logo} alt="Portfolio example" className="portfolio-img" />
                        <img src={logo} alt="Portfolio example" className="portfolio-img" />
                        <img src={logo} alt="Portfolio example" className="portfolio-img" />
                        <img src={logo} alt="Portfolio example" className="portfolio-img" />
                        <img src={logo} alt="Portfolio example" className="portfolio-img" />
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    )
}