import React from "react";
import Services from "./Services";
import { useTranslation } from 'react-i18next';
import MobileServices from "./MobileServices/MobileServices";
// t('Services.3')
export default ()=>{
    const { t } = useTranslation();
    const titles = [t('Services.1'),t('Services.5'),t('Services.7'),t('Services.9'),t('Services.11'),t('Services.13')];
    const context =  [
        {
            content:t('Services.2'),
            hoverColor:'#eaf800',
        },
        // {
        //     content:t('Services.4'),
        //     hoverColor:'#0bff0a',
        //
        // },
        {
            content:t('Services.6'),
            hoverColor:'#de80d2',
        },
        {
            content:t('Services.8'),
            hoverColor:'#00c590',
        },
        {
            content:t('Services.10'),
            hoverColor:'#cccccc',
        },
        {
            content:t('Services.12'),
            hoverColor:'#ff6069',
        },
        {
            content:t('Services.14'),
            hoverColor:'#ffd972',
        },
    ]
    const left = t('Services.15')

    return(
        <div>
            <Services lang={t} titles = {titles} context = {context} left={left}/>
            <MobileServices lang={t} titles = {titles} context = {context} left={left}/>
        </div>
    )
}