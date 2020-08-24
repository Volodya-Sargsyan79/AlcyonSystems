import React from 'react';
import './Header.scss'
import './MediaHeader.scss'
import NavBar from "./Nav_Bar/Nav_Bar";
import HeaderSlider from "./HeaderSlider/HeaderSlider";
import { useTranslation } from 'react-i18next';
import ReactFlagsSelect from 'react-flags-select';
import 'react-flags-select/css/react-flags-select.css';

export default function Header(props){

    const { t, i18n  } = useTranslation();
   
      
    const onSelectFlag=(countryCode)=>{
        props.chanLang(countryCode)
    }
    
  
        return(
            <div className='header_main' >
                <div className={'absolute'}><div className={'header_container'}>
                    <div className={'logo'} onClick={props.scroll.bind(this,0)} >
                        <img src={'https://res.cloudinary.com/alcyonsystems/image/upload/v1583139893/AlcyonSystems/logo_i8kmvn.png'} alt="logo"/>
                    </div>

                    <div className={'nav_fixed'} >

                        <NavBar scroll={props.scroll} active={props.active} close={props.close} lang={t} language = {i18n.language} desktop = {props.desktop} chanLang={props.chanLang}/>
             

                    </div>
                   
                </div>

                {/*<div className=" flagTop">*/}
                {/*    <ReactFlagsSelect*/}
                {/*        countries={["GB","RU","AM"]} */}
                {/*        defaultCountry={i18n.language}*/}
                {/*        showSelectedLabel={false}*/}
                {/*        showOptionLabel={false}*/}
                {/*        selectedSize={20}*/}
                {/*        optionsSize={14}*/}
                {/*        onSelect={onSelectFlag}*/}
                {/*        */}
                {/*        />*/}
                {/*</div>*/}


                </div>

             {/*<HeaderContent />*/}
             <HeaderSlider lang={t} />

            </div>
        )
    
}