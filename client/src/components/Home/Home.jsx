import './style.css';
import arrow from '../../assets/images/icon-arrow-down.svg';
import {Link} from 'react-scroll';

export default function Home(){
    return (
        <div id="home" className="home-container">
            <h1 className="moto">WE ARE CREATIVES</h1>
            <Link
            to="about"
            smooth={true}
            offset={-100}
            >
                <img src={arrow} alt="down-arrow" className='arrow'/>
            </Link>
            
        </div>
    )
}