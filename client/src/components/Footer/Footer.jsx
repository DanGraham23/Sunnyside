import './style.css';
import {AiFillFacebook, AiOutlineInstagram, AiOutlineTwitter} from 'react-icons/ai';
import {FaPinterest} from 'react-icons/fa';

export default function Footer(){
    return (
        <div className='footer-container'>
            <h1 className='footer-header'>sunnyside</h1>
            <ul className='footer-nav-items'>
                <li className='footer-nav-item'>About</li>
                <li className='footer-nav-item'>Services</li>
                <li className='footer-nav-item'>Projects</li>
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