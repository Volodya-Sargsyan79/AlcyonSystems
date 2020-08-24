import React,{Component} from "react";
import './Services.scss';
import './MediaServices.scss';
import video from './backgroundVideo/services.png';

export default class Services extends Component{


        state = {
            isHovered: false,

            e:'',
            a:''

        };



    handleHover=(e)=>{
        this.setState({
            isHovered: true,
            // e:this.props.context[e],
            e:this.props.context[e].content,
            a:this.props.context[e].hoverColor
        });
        console.log()

    }
    hoverOver=()=>{

        this.setState({
            isHovered: false
        });
    }

    render() {
        const btnClass = this.state.isHovered ? "hoverMade" : "hoverStart";


        return(
            <div className={'services d-flex flex-wrap'} style={{backgroundImage:`url(${video})`}}>

                <div className={'services_content col-lg-6' } >
                    <div className={'services_text'}>
                        <h2 >{this.props.left}</h2>
                        <p>
                            Because each client has his own specific needs, our offer includes
                            all types of activities related to software development solutions,
                            so we can match any need you have for custom software development projects.
                            We can offer...
                        </p>
                    </div>

                        <div style={{background:this.state.a}} className={`${btnClass} hoverPos`}>
                                 <p >{this.state.e}</p>
                        </div>
                </div>
                <div className={'col-lg-6 services_list'} >
                    {this.props.titles.map((e,i)=>{
                                return(
                                     <div key={i} className={`list_item div_hov${i}`}  >
                                            <h2 className={`items${i}`} onMouseEnter={this.handleHover.bind(this,i)} onMouseLeave={this.hoverOver}>{e}</h2>
                                     </div>
                                )})}


                </div>

            </div>
        )
    }
}

