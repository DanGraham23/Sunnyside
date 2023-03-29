import './style.css';
import {AiFillFacebook, AiOutlineInstagram, AiOutlineTwitter} from 'react-icons/ai';
import {FaPinterest} from 'react-icons/fa';
import {Link} from 'react-scroll';

export default function Footer(){
    return (
        <div id="footer" className='footer-container'>
            <h1 className='footer-header'>sunnyside</h1>
            <ul className='footer-nav-items'>
                <Link to="home"
                smooth={true}
                offset={-100}
                ><li className='footer-nav-item'>About</li>
                </Link>
                <Link to="about"
                smooth={true}
                offset={-100}
                ><li className='footer-nav-item'>Services</li>
                </Link>
                <Link to="testimonials"
                smooth={true}
                offset={-100}
                ><li className='footer-nav-item'>Projects</li>
                </Link>
            </ul>
            <ul className='footer-socials'>
                <AiFillFacebook  className='footer-social'/>
                <AiOutlineInstagram  className='footer-social'/>
                <AiOutlineTwitter  className='footer-social'/>
                <FaPinterest  className='footer-social'/>
            </ul>
        </div>
    )
}