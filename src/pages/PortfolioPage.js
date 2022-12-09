import NavBar from "../components/NavBar";
import logo from "../img/logo.png";
import Footer from "../components/Footer";

export default function PortfolioPage () {

    // here will be fetching all portfolio images

    function showBW() {
        document.querySelector("#button2").classList.remove("underline");
        document.querySelector("#button3").classList.remove("underline");
        document.querySelector("#button4").classList.remove("underline");
        document.querySelector("#button1").classList.add("underline");
        let test = document.querySelector(".portfolio-img-container");
        test.innerHTML = "";
        test.insertAdjacentHTML("beforeend", `<img src=${logo} alt="Portfolio example" class="portfolio-img" />`); // (?) instead of this, map through all fetched data and display/return in div/img element which is now used
    }

    function showColor() {
        document.querySelector("#button3").classList.remove("underline");
        document.querySelector("#button4").classList.remove("underline");
        document.querySelector("#button1").classList.remove("underline");
        document.querySelector("#button2").classList.add("underline");
        let test = document.querySelector(".portfolio-img-container");
        test.innerHTML = "";
        test.insertAdjacentHTML("beforeend", `<img src=${logo} alt="Portfolio example" class="portfolio-img" /> <img src=${logo} alt="Portfolio example" class="portfolio-img" />`);
    }

    function showCoverup() {
        document.querySelector("#button4").classList.remove("underline");
        document.querySelector("#button1").classList.remove("underline");
        document.querySelector("#button2").classList.remove("underline");
        document.querySelector("#button3").classList.add("underline");
        let test = document.querySelector(".portfolio-img-container");
        test.innerHTML = "";
        test.insertAdjacentHTML("beforeend", `<img src=${logo} alt="Portfolio example" class="portfolio-img" /> <img src=${logo} alt="Portfolio example" class="portfolio-img" /> <img src=${logo} alt="Portfolio example" class="portfolio-img" />`);
    }

    function showAwards() {
        document.querySelector("#button1").classList.remove("underline");
        document.querySelector("#button2").classList.remove("underline");
        document.querySelector("#button3").classList.remove("underline");
        document.querySelector("#button4").classList.add("underline");
        let test = document.querySelector(".portfolio-img-container");
        test.innerHTML = "";
        test.insertAdjacentHTML("beforeend", `<img src=${logo} alt="Portfolio example" class="portfolio-img" /> <img src=${logo} alt="Portfolio example" class="portfolio-img" /> <img src=${logo} alt="Portfolio example" class="portfolio-img" /> <img src=${logo} alt="Portfolio example" class="portfolio-img" />`);
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
                        <button className="portfolio-btn" id="button3" onClick={showCoverup}>Coverup</button>
                        <button className="portfolio-btn" id="button4" onClick={showAwards}>My awards</button>
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