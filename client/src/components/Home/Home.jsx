import './style.css';
import arrow from '../../assets/images/icon-arrow-down.svg'
export default function Home(){
    return (
        <div className="home-container">
            <h1 className="moto">WE ARE CREATIVES</h1>
            <img src={arrow} alt="down-arrow" />
        </div>
    )
}