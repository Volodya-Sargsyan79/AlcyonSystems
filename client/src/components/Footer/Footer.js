import React, {useState} from 'react'
import './Footer.scss'
import './MediaFooter.scss'
import Fade from 'react-reveal/Fade'


import FooterContact from './FooterContact/FooterContact'
import Particles from 'react-particles-js';


export default () => {
    const [contact, setContact] = useState(false)
    return(
        <div className="particles">
            <div className={`contact_footer ${contact ? 'contactFooter' : null}`}>
                <div id="mdiv2" onClick={() => setContact(false)}>
                    <div className="mdiv2">
                        <div className="md2"></div>
                    </div>
                </div>
                <div className="footer_container d-flex">

                    <div className="col-lg-6">
                        <FooterContact />
                    </div>
                    <div className="col-lg-6 two"  style={{backgroundImage:'url(https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1049&q=80)',backgroundSize:'cover',backgroundRepeat:'no-repeat'}}>


                    </div>
                </div>

            </div>
            <div className="footer" >
            
            <div className="containersik">
                <div className="row">
                    <Fade left timeout={2000}>
                        <div className="col-lg-6 footer_content" >
                            <h2>Contact</h2>
                            <div className="d-flex flex-column k">

                                <div className='address_contact'>
                                    <p>New business & partnership</p>
                                    <p>+374 99-13-20-32</p>
                                    <p className='footer_p_border'>info@alcyonsystems.am</p>
                                </div>
                                <div className='address_contact2'>
                                    <p>Visit our office</p>
                                    <p className='footer_p_border'>Armenia, Yerevan, Moskovyan 3/2</p>
                                </div>
                                <button className="contactOpener" onClick={() => setContact(true)}>Contact Us</button>
                            </div>
                        </div>
                    </Fade>
                    <Fade right timeout={2500}>
                        <div className="col-lg-6 map-responsive">
                            <iframe title='map'
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d762.0296029859107!2d44.52195796729593!3d40.1841781633163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abd59fe0b5b85%3A0xe5733ad4eea7bee6!2sAlcyon%20Systems!5e0!3m2!1sen!2s!4v1581942900605!5m2!1sen!2s"
                                    width="800" height="650" frameBorder="0"  allowFullScreen=""></iframe>
                        </div>
                    </Fade>

                </div>
            </div>

        </div>
        <div style={{background:'#0d0d0d',width:'100%',height:"90vh",overflow:'hidden'}} className={'heighti'}>
        <Particles 

        params={{
        "particles": {
        "number": {
        "value": 150,
        "density": {
        "enable": true,

    }
    },
        "color": {
        "value": "#ffffff"
    },

        "opacity": {
        "value": 0.4008530152163807,
        "random": false,
        "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
    }
    },
        "size": {
        "value": 5,
        "random": true,
        "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
    }
    },

        "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
    }
    }
    },
        "interactivity": {
        "detect_on": "window",
        "events": {
        "onhover": {
        "enable": true,
        "mode": "grab"
    },
        "onclick": {
        "enable": true,
        "mode": "bubble"
    },
        "resize": true
    },
        "modes": {
        "grab": {
        "distance": 400,
        "line_linked": {
        "opacity": 1
    }
    },
        "bubble": {
        "distance": 400,
        "size": 7,
        "duration": 2,
        "opacity": 8,
        "speed": 3
    },
        "repulse": {
        "distance": 100,
        "duration": 0.4
    },
        "push": {
        "particles_nb": 4
    },
        "remove": {
        "particles_nb": 2
    }
    }
    },
        "retina_detect": true
    }} className={'prtcls'} />
    
        </div>
            
        </div>
        
    )
}