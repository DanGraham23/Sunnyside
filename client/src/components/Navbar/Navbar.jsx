import './style.css';
import {useState} from 'react';


export default function Navbar(){
    const [curSelected, setCurSelected] = useState("");

    function handleClick(e){
        setCurSelected(e.target.id);
    }
    return (
        <div className='navbar-container'>
            <h1 className='nav-header'>sunnyside</h1>
            <ul className='nav-items'>
                <li className={`nav-item  ${curSelected === "navAbout" ? "nav-selected" : ""}`} 
                id="navAbout" 
                onClick={handleClick}>About</li>
                <li className={`nav-item  ${curSelected === "navServices" ? "nav-selected" : ""}`}
                  id="navServices"
                  onClick={handleClick}>Services</li>
                <li className={`nav-item  ${curSelected === "navProjects" ? "nav-selected" : ""}`}
                  id="navProjects"
                  onClick={handleClick}>Projects</li>
                <li className={`nav-item  ${curSelected === "navContact" ? "nav-selected" : ""}`}
                  id="navContact"
                  onClick={handleClick}>Contact</li>
            </ul>
        </div>
    )
}