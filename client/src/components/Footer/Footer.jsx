import './style.css';
import facebook from '../../assets/images/icon-facebook.svg';
import instagram from '../../assets/images/icon-instagram.svg';
import twitter from '../../assets/images/icon-twitter.svg';
import pinterest from '../../assets/images/icon-pinterest.svg';

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
                <li className='footer-social'><img src={facebook} alt="facebook" /></li>
                <li className='footer-social'><img src={instagram} alt="instagram" /></li>
                <li className='footer-social'><img src={twitter} alt="twitter" /></li>
                <li className='footer-social'><img src={pinterest} alt="pinterest" /></li>
            </ul>
        </div>
    )
}