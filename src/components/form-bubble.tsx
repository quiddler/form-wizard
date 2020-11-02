import React from 'react'
import './form-bubble.css'

export const FormBubble = (props: any) => {

    const createClassName = () => {
        if (props.disabled) return "form-bubble disabled"
        if (props.error && props.active) return "form-bubble error active"
        if (props.error) return "form-bubble error"
        if (props.success && props.active) return "form-bubble success active"
        if (props.active) return "form-bubble active" 
        if (props.success) return "form-bubble success"
        return "form-bubble"
    }

    return (
        <div className={createClassName()}
             onClick={() => { if(!props.disabled) props.cb(props.number)}}>
            {props.last ? <i className="fa fa-check"></i> : <span>{props.number + 1}</span>}
        </div>
    )
}