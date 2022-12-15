// made by Igor

import { Link, NavLink } from "react-router-dom"
import logo from '../img/logo.png'

export default function NavBar() {
    return (
        <main>
            <nav className="navbar mobile">
                <div className="navbar-container container">
                    <input type="checkbox" name="" id="" />
                    <div className="hamburger-lines">
                        <span className="line line1"></span>
                        <span className="line line2"></span>
                        <span className="line line3"></span>
                    </div>
                    <ul className="menu-items">
                        <li><Link to='/portfolio'>Portfolio</Link></li>
                        <li><Link to='/procedure'>Procedures & Care</Link></li>
                        <li><Link to='/somesay'>Some say about us</Link></li>
                        <li><Link to='/contact'>Contact</Link></li>
                    </ul>
                <Link to='/'><img className="logo" src={logo} alt='HrogFruTattoo' /></Link>
                </div>
            </nav>
            <nav className="navbar-desktop">
                <NavLink to='/portfolio' className="link-desktop">Portfolio</NavLink>
                <NavLink to='/procedure' className='link-desktop'>Procedures & Care</NavLink>
                <Link to='/' className="desk-logo-center"><img src={logo} alt='HrOgFruTattoo' className="logo-desktop"></img></Link>
                <div className="hider"></div>
                <NavLink to='/somesay' className='link-desktop'>Some say about us</NavLink>
                <NavLink to='/contact' className='link-desktop'>Contact</NavLink>
            </nav>
        </main>
    )
}