import React from 'react'
import './form-bubble.css'

export const FormBubble = (props: any) => {

    const createClassName = () => {
        if (props.disabled) return "form-bubble disabled"
        if (props.active) return "form-bubble active" 
        if (props.success) return "form-bubble success"
        return "form-bubble"
    }

    return (
        <div className={createClassName()} 
             onClick={() => {if(!props.disabled) props.cb(props.number)}}>{props.number}</div>
    )
}