import React, {Component} from 'react'
import './Vacancies.scss'
import back from './VacanciesBackground/back.gif'
import VacanciesList from './VacanciesList/VacanciesList'
import './MediaVacancies.scss'



export default class Vacancies extends Component {
    state = {
        careersList: [
            {
                id: 0,
                title: 'Angular Js Developer',
                jobConditions: ['Salary is discussed individually, motivating bonus system, verified', 
                    'Work in a friendly team that shares universal values', 
                    'Big clients, creative advertising campaigns, solid strategies',
                    'Greate office in the center of Yerevan'],
                 duties:['  Designing and developing user interfaces using Angular best practices.',
                  '  Adapting interface for modern internet applications using the latest front-end technologies.',
                     ' Writing JavaScript, CSS, and HTML.',
                     ' Developing product analysis tasks.','  Making complex technical and design decisions for Angular projects.',
                     ' Developing application codes and unit tests in Angular and Rest Web Services.'

              ],
     requirements:[
                  ' 1+ year of recent experience in Angular 2.X+',
                 ' 1+ years of recent experience in front-end software development',
                  'Proficient in CSS, HTML, and writing cross-browser compatible code',
                  'Excellent communication skills',
                  'Critical thinker and good problem-solver'
              ]},

              {
                id: 1,
                title: 'PHP / Laravel Developer',
                jobConditions: ['Salary is discussed individually, motivating bonus system, verified',
                    'Work in a friendly team that shares universal values',
                    'Big clients, creative advertising campaigns, solid strategies',
                    'Greate office in the center of Yerevan'],
                 duties:[' Develop, record and maintain cutting edge web-based PHP applications',
                  'Build innovative, state-of-the-art applications and collaborate with the User Experience (UX) team',
                     'Utilize backend data services and help to improve the existing data services API',
                     'Collaboration with Related Departments: Briefing and Domestic Sales',
                     'Convey effectively with all task progress, evaluations, suggestions, schedules along with technical and process issues',
                     'Stay updated on new trends and best practices in web development'
              ],
              requirements:['Willingness to learn and self-develop','Ability to set realistic deadlines and time management skills',
              'Experience in PHP / Laravel','In-depth knowledge of object-oriented PHP and Laravel 5 PHP Framework',
                  'Hands-on experience with database design and REST API design','SQL profiling and query optimization',
                  'Creative and efficient problem solver'
              ]},

                  
                  
             ],
        liststyle: '',
        openList: false
    }

    careersPageHandler = (e, i) => {

        this.setState({listItem: e, openList: true})
        console.log(e)

    }
    closeListHandler = ()=>{
        this.setState({openList:false})
    }

    render() {
        return (
            <div
                className='vacancies d-flex flex-wrap'
                style={{
                backgroundImage: `url(${back})`
            }}>
                <div className={'col-lg-6 careers_text'}>
                    <h2>Careers</h2>
                    <p>
                        What matters to us is who we work with, what are our goals and principles. We
                        believe that <b>Alcyon Systems</b> is a place where one can realize his full potential in various
                        projects, take enjoyment in working and to be on truly friendly terms with
                        colleagues and just make a world a better place.
                    </p>
                </div>
                <div className={'col-lg-6 careers_list'}>
                    {this
                        .state
                        .careersList
                        .map((e, i) => {
                            return (
                                <div
                                    key={i}
                                    className={'careers_list_text'}
                                    onClick={this
                                    .careersPageHandler
                                    .bind(this, e)}>
                                    <p
                                        href=""
                                        style={{
                                        cursor: 'pointer'
                                    }}>{e.title}</p>
                                    <div className='bottom_hover'></div>
                                </div>
                            )
                        })}
                </div>

                <VacanciesList item={this.state.listItem} close = {this.closeListHandler} open={this.state.openList}/>
            </div>

        )
    }
}