import React,{Component} from "react";
import './MobileServices.scss';
import './MediaMobileServices.scss';
import pic from '../backgroundVideo/services.png'

export default class MobileServices extends Component{
    state = {
        isHovered: false,

        e:'',
        a:''

    };

    handleHover=(e)=>{
        this.setState({
            isHovered: true,

            e:this.props.context[e].content,
            a:this.props.context[e].hoverColor
        });

    }
    hoverOver=()=>{

        this.setState({
            isHovered: false
        });
    }

    render() {
        const btnClass = this.state.isHovered ? "clickMade" : "clickStart";

        return(

            <div className={'services_mobile'} style={{backgroundImage:`url(${pic})`}}>
                <div className={'services_text_mobile'}>
                    <h2 >{this.props.left}</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, aperiam debitis ea enim,
                        et exercitationem fuga harum id illo laudantium maxime minima odit perferendis possimus
                        provident ratione repudiandae sunt, ullam!
                    </p>
                </div>
                <div className={'services_list_mobile'} >
                    {this.props.titles.map((e,i)=>{
                        return(
                            <div key={i} className={`list_item div_hov_mobile${i}`}  onClick={this.handleHover.bind(this,i)} >
                                <h2 className={`items_mobile${i}`} >{e}</h2>
                            </div>
                        )})}


                </div>
                <div style={{background:this.state.a}} className={`${btnClass} hoverPos_mobile`}>
                    <div id="mdiv" onClick={this.hoverOver}>
                        <div className="mdiv">
                            <div className="md"></div>
                        </div>
                    </div>
                    <div>
                        <p >{this.state.e}</p>
                    </div>

                </div>

            </div>
        )
    }
}