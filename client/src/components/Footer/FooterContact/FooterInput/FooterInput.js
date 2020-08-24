import React from 'react'
import './FooterInput.scss'

function isValid(props) {
    return !props.valid && props.touched && props.shoudValidate
}


export default (props) => {

    const sty = ['contactInputs']
    const htmlFor = Math.random()
    if(isValid(props)) {
        sty.push('invalid')
    }

    return(
        <div className={sty.join(' ')} key={props.id}>
            <input
                name={props.name}
                value={props.value}
                type={props.type}
                id={htmlFor}
                className="formInput"
                onChange={props.onchange}
                placeholder={props.placeholder}
             />
             {/* {isValid(props) ? <span>{props.errMessage}</span> : null} */}
        </div>
    )
}