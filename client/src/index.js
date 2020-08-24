import React,{ useState, Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './i18'
import * as serviceWorker from './serviceWorker';
import { useTranslation } from 'react-i18next';
import Loader from './loading'

function Wrap(){

    const { i18n } = useTranslation();
    const [language, setLanguage]=useState("GB")
  
    const changeLanguages = (language)=>{
      setLanguage(language)
      i18n.changeLanguage(language)
    }

    return (

        <App lang={language} chanLang={changeLanguages}/>
    )
}



ReactDOM.render( <Suspense fallback={(<div><Loader/></div>)}>
          <Wrap />  </Suspense>, document.getElementById('root'));


serviceWorker.unregister();
