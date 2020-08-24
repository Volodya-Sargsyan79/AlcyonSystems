import React from 'react'
import Fade from 'react-reveal/Fade'
import { useTranslation } from 'react-i18next';
import './WhyUs.scss'

export default ()=>{
    const { t } = useTranslation();
    return(
        <Fade right timeout={2000}>
            <div className={'why_relative'}>
                <h2>{t("aboutMe.4")}</h2>
                <div className={' why_window'}>

                    <div className={'why_tophover'}>
                        <p className={'antipadding'}>
                            {t("aboutMe.5")}
                        </p>
                    </div>
                    <div className={'why_bottomhover'}>
                        <p>
                            {t("aboutMe.6")}
                        </p>
                    </div>
                </div>
            </div>
        </Fade>

    )
}