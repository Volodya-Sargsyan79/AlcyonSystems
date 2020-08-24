import React from 'react'
import Fade from 'react-reveal/Fade'
import './About.scss'
import { useTranslation } from 'react-i18next';

export default ()=>{
    const { t } = useTranslation();

    return(
        <Fade left timeout={1500}>
            <div className={'about_relative'}>
                <h2>{t("aboutMe.1")}</h2>
                <div className={' about_window'}>

                    <div className={'about_tophover'}>
                        <p className={'antipadding'}>
                            {t("aboutMe.2")}
                        </p>
                    </div>
                    <div className={'about_bottomhover'}>
                        <p>
                            {t("aboutMe.3")}
                        </p>
                    </div>
                </div>
            </div>
        </Fade>


    )
}