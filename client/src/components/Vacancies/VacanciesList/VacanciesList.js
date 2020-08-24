import React from 'react'
import './VacanciesList.scss'
import Contact from './VacanciesContact/Contact'
import './MediaVacanciesList.scss'

export default({item, open, close}) => {

    return (
        <div className={`${open ? 'open_list' : 'list_page'}`}>
            <div className={'fix'}>
                <div id="mdiv" onClick={close}>
                    <div className="mdiv">
                        <div className="md"></div>
                    </div>
                </div>
            </div>

                {!item ? null : <div>
                        <h2 className={'list_name_items'}>{item.title}</h2>


                        <div className="d-flex classik">
                        <div className="col-lg-4">
                        <div className='career_items_list '  >
                            <h3>Job</h3>
                            <div>
                                <ul>
                                    {item.jobConditions.map((e, i) => {
                                            return (
                                                <li key={i}>{e}</li>
                                            )
                                        })}
                                </ul>
                            </div>
                        </div>
                        <div className='career_items_list'>
                            <h3>Duties</h3>
                            <div>
                                <ul>
                                    {item.duties.map((e, i) => {
                                            return (
                                                <li key={i}>{e}</li>
                                            )
                                        })}
                                </ul>
                            </div>
                        </div>
                        </div>

                        <div className={'col-lg-4'}>
                            <div className='career_items_list'>
                                <h3>Requirements</h3>
                                <div>
                                    <ul>
                                        {item.requirements.map((e, i) => {
                                                return (
                                                    <li key={i}>{e}</li>
                                                )
                                            })}
                                    </ul>
                                     
                                </div>
                                
                            </div>
                            
                        </div>

                        <div className='career_items_list2 col-lg-4'>
                             <Contact />
                        </div>
                        
                        </div>
                       

                    </div>}
                   
            </div>

        
    )
}