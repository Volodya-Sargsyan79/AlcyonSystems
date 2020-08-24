import React, {Component} from 'react';
import Header from "./components/Header/Header";
import AboutUs from './components/AboutUS/AboutUs'

import Portfolio from "./components/Portfolio/Portfolio";
import TeamMembers from "./components/TeamMembers/TeamMembers";
import Vacancies from './components/Vacancies/Vacancies';
import Slider from './components/slider/Slider'
import Footer from './components/Footer/Footer';
import { Lines } from 'react-preloaders';
import ServForLang from "./components/Services/ServForLang";


export default class App extends Component{





    constructor(props){
        super(props)
                this.homeRef = React.createRef();
                this.myAboutRef = React.createRef();
                this.myServicesRef = React.createRef();
                this.myPortfolioRef = React.createRef();
                this.myTeamRef = React.createRef();
                this.myVacanciesRef = React.createRef();
                this.myContactRef = React.createRef();
        this.state = {
            h:0,
            a:0,
            load: true,
            active:false

        }
    }

    menuHandler = () =>{
        this.setState({
            active:!this.state.active
        })

    }



    componentDidMount() {
        this.setState({load: false})


    }

    handleScrollToElement =(e,i)=> {
        this.setState({
            active:!this.state.active
        })

        if (e === 0 ){
            window.scrollTo({behavior:'smooth',top:this.homeRef.current.offsetTop})
        }
        else if(e === 1){
            window.scrollTo({behavior:'smooth',top:this.myAboutRef.current.offsetTop})
        }
        else if(e === 2){
            window.scrollTo({behavior:'smooth',top:this.myServicesRef.current.offsetTop-80})
        }
        else if(e === 3){
            window.scrollTo({behavior:'smooth',top:this.myPortfolioRef.current.offsetTop-110})
        }
        else if(e === 4){
            window.scrollTo({behavior:'smooth',top:this.myTeamRef.current.offsetTop-160})
        }
        else if(e === 5){
            window.scrollTo({behavior:'smooth',top:this.myVacanciesRef.current.offsetTop -130})
        }
        else if(e === 6){
            window.scrollTo({behavior:'smooth',top:this.myContactRef.current.offsetTop})
        }
            }
    handleScrollToElementDesktop =(e,i)=> {


        if (e === 0 ){
            window.scrollTo({behavior:'smooth',top:this.homeRef.current.offsetTop})
        }
        else if(e === 1){
            window.scrollTo({behavior:'smooth',top:this.myAboutRef.current.offsetTop})
        }
        else if(e === 2){
            window.scrollTo({behavior:'smooth',top:this.myServicesRef.current.offsetTop-80})
        }
        else if(e === 3){
            window.scrollTo({behavior:'smooth',top:this.myPortfolioRef.current.offsetTop-110})
        }
        else if(e === 4){
            window.scrollTo({behavior:'smooth',top:this.myTeamRef.current.offsetTop-160})
        }
        else if(e === 5){
            window.scrollTo({behavior:'smooth',top:this.myVacanciesRef.current.offsetTop -130})
        }
        else if(e === 6){
            window.scrollTo({behavior:'smooth',top:this.myContactRef.current.offsetTop})
        }
    }





  render() {

   
    return(

        <div>
        <Lines customLoading={this.state.load} />

            <div>
                    <section  ref={this.homeRef}>
                            <header>
                                <Header scroll={this.handleScrollToElement} chanLang = {this.props.chanLang} active = {this.state.active} close={this.menuHandler} desktop={this.handleScrollToElementDesktop}/>
                            </header>
                       </section>
                       <section ref={this.myAboutRef}>
                           <AboutUs/>
                       </section>
                       <section>
                           <Slider />
                       </section>
                       <section ref={this.myServicesRef} className="refsection">
                          <ServForLang/>
                       </section>
                       <section ref={this.myPortfolioRef}>
                           <Portfolio/>
                       </section>
                       <section ref={this.myVacanciesRef}>
                           <Vacancies/>
                       </section>
                       <section ref={this.myTeamRef}>
                           <TeamMembers />
                       </section>
                       <section ref={this.myContactRef}>
                           <Footer />
                       </section>
            </div>
        </div>


       
        
    )
  }
}
