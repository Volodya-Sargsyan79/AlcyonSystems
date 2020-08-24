import React from "react";
import './Portfolio.scss';
import './MediaPortfolio.scss'

export default ()=>{

    const services = [
        {
            id: 0,
            icon: 'fa fa-magic',
            title: 'Gnumner',
            img:'https://res.cloudinary.com/alcyonsystems/image/upload/v1584699036/AlcyonSystems/portfolio/gnumnerAm_xmpyhh.png',
            link:'http://gnumner.am/'
        },
        {
            id: 1,
            icon: 'fa fa-shopping-cart',
            title: 'Lexigo',
            img:'https://res.cloudinary.com/alcyonsystems/image/upload/v1584699037/AlcyonSystems/portfolio/Lexigo_w79aao.png',
            link:'http://lexigoversion2.kinsta.cloud/'
        }, {
            id: 2,
            icon: 'fa fa-check-circle',
            title: 'EcofruitArmenia',
            img:'https://res.cloudinary.com/alcyonsystems/image/upload/v1584699039/AlcyonSystems/portfolio/Exofruit_q8joqb.png',
            link:'http://ecofruitarmenia.am/'
        }, {
            id: 3,
            icon: 'fa fa-desktop',
            title: 'Web Maintenance',
            img:'https://res.cloudinary.com/alcyonsystems/image/upload/v1583139909/AlcyonSystems/3_kppens.jpg'
        }, {
            id: 4,
            icon: 'fa fa-desktop',
            title: 'Responsive Design',
            img:'https://res.cloudinary.com/alcyonsystems/image/upload/v1583139917/AlcyonSystems/5_dynsip.jpg'
        }, {
            id: 5,
            icon: 'fa fa-thumbs-up',
            title: 'Social Media',
            img:'https://res.cloudinary.com/alcyonsystems/image/upload/v1583139918/AlcyonSystems/4_i891hl.jpg'
        },
       
    ]



    return(
        <div className={'d-flex flex-wrap portfolio'}>
            {services.map((e,i)=>{
                return(
                    <div key={e.id} className={'portfolio_elems col-lg-3'}>
                        <div className={'portfolio_title'}>
                            <h2>{e.title}</h2>

                        </div>
                        <div className={`portfolio_context cont${i}`}>
                            <div className='portfolio_img'>
                                <img src={e.img} alt=""/>
                            </div>
                            <a href={e.link} target="_blank" rel="noopener noreferrer">Click To Watch</a>
                        </div>
                    </div>
                )
            })}

        </div>

    )
}