import './style.css';
import emily from '../../assets/images/image-emily.jpg'
import thomas from '../../assets/images/image-thomas.jpg'
import jennie from '../../assets/images/image-jennie.jpg'

export default function Testimonials(){
    return (
        <div id="testimonials" className='testimonials-container'>
            <h3 className='testimonial-header'>CLIENT TESTIMONIALS</h3>
            <div className='testimonials-row'>
                <div className='testimonial'>
                    <img src={emily} alt="emily" className='testimonial-img'/>
                    <p className='testimonial-descr'>
                        We put our trust in Sunnyside and they delivered, making sure our
                        needs were met and deadlines were always hit.
                    </p>
                    <h2 className='testimonial-name'>Emily R.</h2>
                    <h4 className='testimonial-title'>Marketing Director</h4>
                </div>
                <div className='testimonial'>
                    <img src={thomas} alt=" thomas" className='testimonial-img'/>
                    <p className='testimonial-descr'>
                        Sunnyside's enthusiasm coupled with their keen interest in our brand's
                        success made it a satisfying and enjoyable experience.
                    </p>
                    <h2 className='testimonial-name'>Thomas S.</h2>
                    <h4 className='testimonial-title'> Chief Operating Officer</h4>
                </div>
                <div className='testimonial'>
                    <img src={jennie} alt="jennie" className='testimonial-img'/>
                    <p className='testimonial-descr'>
                        Incredible end result! Our sales increased over 400% when we worked
                        with Sunnyside. Highly recommended!
                    </p>
                    <h2 className='testimonial-name'>Jennie F.</h2>
                    <h4 className='testimonial-title'>Business Owner</h4>
                </div>
            </div>
        </div>
    )
}