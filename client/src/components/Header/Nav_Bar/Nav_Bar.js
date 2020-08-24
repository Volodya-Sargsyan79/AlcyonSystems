import React from "react";
import './Nav_Bar.scss'
import ReactFlagsSelect from "react-flags-select";
import {useTranslation} from "react-i18next";






export default ({scroll,active,close,lang,language,desktop,chanLang})=>{
    const {  i18n  } = useTranslation();

    const onSelectFlag=(countryCode)=>{
       chanLang(countryCode)
    }
     

        return(
            <div className="containers">
                <ul className={`menu ${active ? 'active_menu' : ''}`} onClick={() => close()}>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>

                <div className={`${language === "AM" ? 'langAm' :  language === "RU"  ? 'langAm' : language === 'GB' ? 'item_menu' : null}`}>
                    <div onClick={desktop.bind(this,0)} className={`item ${active ? 'active_item' : ''}`} ><p>{lang("headerMenu.1")}</p></div>
                    <div onClick={desktop.bind(this,1)} className={`item ${active ? 'active_item' : ''}`}><p className={'as'}>{lang("headerMenu.2")}</p></div>
                    <div onClick={desktop.bind(this,2)} className={`item ${active ? 'active_item' : ''}`}><p >{lang("headerMenu.3")}</p></div>
                    <div onClick={desktop.bind(this,3)} className={`item ${active ? 'active_item' : ''}`}><p>{lang("headerMenu.4")}</p></div>
                    <div onClick={desktop.bind(this,5)} className={`item ${active ? 'active_item' : ''}`}><p>{lang("headerMenu.5")}</p></div>
                    <div onClick={desktop.bind(this,4)} className={`item ${active ? 'active_item' : ''}`}><p >{lang("headerMenu.6")}</p></div>
                    <div onClick={desktop.bind(this,6)} className={`item ${active ? 'active_item' : ''}`}><p>{lang("headerMenu.7")}</p></div>
                </div>

                <div className={` ${active ? 'mobile_active_item' : 'mobile_item'}`}>
                    <div onClick={scroll.bind(this,0)} className={`item ${active ? 'active_item' : ''}`} ><p>{lang("headerMenu.1")}</p></div>
                    <div onClick={scroll.bind(this,1)} className={`item ${active ? 'active_item' : ''}`}><p>{lang("headerMenu.2")}</p></div>
                    <div onClick={scroll.bind(this,2)} className={`item ${active ? 'active_item' : ''}`}><p>{lang("headerMenu.3")}</p></div>
                    <div onClick={scroll.bind(this,3)} className={`item ${active ? 'active_item' : ''}`}><p>{lang("headerMenu.4")}</p></div>
                    <div onClick={scroll.bind(this,5)} className={`item ${active ? 'active_item' : ''}`}><p>{lang("headerMenu.5")}</p></div>
                    <div onClick={scroll.bind(this,4)} className={`item ${active ? 'active_item' : ''}`}><p>{lang("headerMenu.6")}</p></div>
                    <div onClick={scroll.bind(this,6)} className={`item ${active ? 'active_item' : ''}`}><p>{lang("headerMenu.7")}</p></div>
                    {/*{active ? <div  className={` ${active ? 'flagTop_mobile' : 'mobile_dis'}`} >*/}
                    {/*    <ReactFlagsSelect*/}
                    {/*        countries={["GB","RU","AM"]}*/}
                    {/*        defaultCountry={i18n.language}*/}
                    {/*        showSelectedLabel={false}*/}
                    {/*        showOptionLabel={false}*/}
                    {/*        selectedSize={20}*/}
                    {/*        optionsSize={14}*/}
                    {/*        onSelect={onSelectFlag}*/}

                    {/*    />*/}
                    {/*</div>: null}*/}
                </div>
            </div>
        )


}
