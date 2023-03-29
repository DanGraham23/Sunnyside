import './style.css';


export default function About(){
    return (
        <div className='about-container'>
            <div className='about-text-container'>
                <div className='about-descr-container'>
                    <h1 className='about-descr-heading'>Transform your brand</h1>
                    <p className='about-descr'>We are a full-service creative agency specializing in helping brands grow fast. 
                        Engage your clients through compelling visuals that do most of the marketing for you.</p>
                    <a href="" className='about-descr-a1'>LEARN MORE</a>
                </div>
            </div>
            <div className="yellow-egg-img img-container"></div>
            <div className='pink-cup-img img-container'></div>
            <div className='about-text-container'>
                <div className='about-descr-container'>
                    <h1 className='about-descr-heading'>Stand out to the right audience</h1>
                    <p className='about-descr'>Using a collaborative formula of designers, researchers, photographers, videographers,
                        and copywriters, we'll build and extend your brand in digital places.</p>
                    <a href="" className='about-descr-a2'>LEARN MORE</a>
                </div>
            </div>
            
            <div className='cherry-img img-container'>
                <div className='image-and-descr-container'>
                    <h1 className='graphic-design-header'>Graphic Design</h1>
                    <p className='graphic-design-descr'> Great design makes you memorable. We deliver artwork that underscores
                        your brand-message and captures potential clients' attention.
                    </p>
                </div>
            </div>
            <div className='orange-img img-container'>
                <div className='image-and-descr-container'>
                    <h1 className='photography-header'>Photography</h1>
                    <p className='photography-descr'> Increase your credibility by getting the most stunning, high-quality photos
                        that improve your business image.
                    </p>
                </div>
                
            </div>
        </div>
    )
}