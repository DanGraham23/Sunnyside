import './style.css';
import {useState} from 'react';
import logo from '../../assets/images/logo.svg';
import {Link} from 'react-scroll';
import hamburger from '../../assets/images/icon-hamburger.svg'

export default function Navbar(){
    const [curSelected, setCurSelected] = useState("");
    const [toggleMobileMenu, setToggleMobileMenu] = useState(false);

    function handleClick(e){
        setCurSelected(e.target.id);
    }

    return (
        <div className='navbar-container'>
            <img src={logo} alt="sunnyside" className='nav-header'/>
            <img src={hamburger} alt="hamburger" className='hamburger' 
            onClick={() => setToggleMobileMenu(!toggleMobileMenu)}/>
            { toggleMobileMenu && <div class="triangle"></div>}
            
            <ul className={`nav-items-desktop ${toggleMobileMenu ? "nav-items-mobile" : ""}`} >
                <Link to="home"
                smooth={true}
                offset={-100}
                ><li className={`nav-item  ${curSelected === "navAbout" ? "nav-selected" : ""}`} 
                id="navAbout" 
                onClick={handleClick}>About</li>
                </Link>
                <Link to="about"
                smooth={true}
                offset={-100}
                ><li className={`nav-item  ${curSelected === "navServices" ? "nav-selected" : ""}`}
                  id="navServices"
                  onClick={handleClick}>Services</li>
                </Link>
                <Link to="testimonials"
                smooth={true}
                offset={-100}
                ><li className={`nav-item  ${curSelected === "navProjects" ? "nav-selected" : ""}`}
                  id="navProjects"
                  onClick={handleClick}>Projects</li>
                </Link>
                <Link to="footer"
                smooth={true}
                offset={-100}
                ><li className={`nav-item  ${curSelected === "navContact" ? "nav-selected" : ""}`}
                  id="navContact"
                  onClick={handleClick}>Contact</li>
                </Link>
            </ul>
        </div>
    )
}