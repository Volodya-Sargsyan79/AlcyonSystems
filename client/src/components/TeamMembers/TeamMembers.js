import React from "react";

import './TeamMembers.scss'
import './MediaTeamMembers.scss'


export default ()=>{
    const members =[
        {id:0,description:'',name:'',job:'',img:'https://res.cloudinary.com/alcyonsystems/image/upload/v1584353679/AlcyonSystems/Team/jdfg/322323_lwn702.png',hoverimg:'https://res.cloudinary.com/alcyonsystems/image/upload/v1584351963/AlcyonSystems/Team/jdfg/Volodyahover_ttuoqy.png',fullName:'Volodya Sargsyan',specialistIn:'Director, Front-End Developer'},
        {id:1,description:'',name:'',job:'',img:'https://res.cloudinary.com/alcyonsystems/image/upload/v1584352652/AlcyonSystems/Team/jdfg/Lusine_einka2.png',hoverimg:'https://res.cloudinary.com/alcyonsystems/image/upload/v1584351963/AlcyonSystems/Team/jdfg/LusineHdgtover_bz4zyg.png',fullName:'Lusine Adumyan',specialistIn:'Project Manager'},
        {id:2,description:'',name:'',job:'',img:'https://res.cloudinary.com/alcyonsystems/image/upload/v1584106071/AlcyonSystems/Team/zhgcgdg/IMG_8624-min_phj76w.png',hoverimg:'https://res.cloudinary.com/alcyonsystems/image/upload/v1584351963/AlcyonSystems/Team/jdfg/Armanhover_nghuuh.png',fullName:'Arman Nazaryan',specialistIn:'Front-End Developer'},
        {id:3,description:'',name:'',job:'',img:'https://res.cloudinary.com/alcyonsystems/image/upload/v1584351962/AlcyonSystems/Team/jdfg/Hasmik_ysp4u1.png',hoverimg:'https://res.cloudinary.com/alcyonsystems/image/upload/v1584351963/AlcyonSystems/Team/jdfg/HasmikHover_b6rihn.png',fullName:'Hasmik Hovsepyan',specialistIn:'Full-Stack Developer'},
        {id:4,description:'',name:'',job:'',img:'https://res.cloudinary.com/alcyonsystems/image/upload/v1584351963/AlcyonSystems/Team/jdfg/Nare_umwjcg.png',hoverimg:'https://res.cloudinary.com/alcyonsystems/image/upload/v1584351963/AlcyonSystems/Team/jdfg/NareHover_eysv4a.png',fullName:'Nare Madoyan',specialistIn:'Front-End Developer'},
        {id:5,description:'',name:'',job:'',img:'https://res.cloudinary.com/alcyonsystems/image/upload/v1584353679/AlcyonSystems/Team/jdfg/IMG_8618-migghggggn_uujjba.png',hoverimg:'https://res.cloudinary.com/alcyonsystems/image/upload/v1584351963/AlcyonSystems/Team/jdfg/TigranHover_cb9chf.png',fullName:'Tigran Mnjoyan',specialistIn:'Front-End Developer'},
        {id:6,description:'',name:'',job:'',img:'https://res.cloudinary.com/alcyonsystems/image/upload/v1584353679/AlcyonSystems/Team/jdfg/120.0454_gi5hds.png',hoverimg:'https://res.cloudinary.com/alcyonsystems/image/upload/v1584351962/AlcyonSystems/Team/jdfg/Hrachhover_lrujy2.png',fullName:'Hrachya Ashkhatoyan',specialistIn:'Full-Stack Developer'},
        {id:7,description:'',name:'',job:'',img:'https://res.cloudinary.com/alcyonsystems/image/upload/v1584106071/AlcyonSystems/Team/zhgcgdg/vahge1-min_viqk0l.png',hoverimg:'https://res.cloudinary.com/alcyonsystems/image/upload/v1584351963/AlcyonSystems/Team/jdfg/VaheHover_wjn1kc.png',fullName:'Vahe Martirosyan',specialistIn:'Front-End Developer'}

    ]

        return(
            <div className={' team'}>
                <div className="row">
                    {members.map((e,i)=>{
                        return(
                            <div className={'col-lg-3 team_all '} key={i}>
                                <div className={'first'} style={{backgroundImage:`url(${e.img})`}}>
                                    <div className='hovered_img' style={{backgroundImage:`url(${e.hoverimg})`}}>
                                        <div className={' container d-flex bsd'}>
                                            <p>{e.fullName}</p>
                                            <p>{e.specialistIn}</p>
                                        </div>

                                    </div>
                
                                </div>
                            </div>
                        )
                    })}
                </div>

            </div>
        )

}