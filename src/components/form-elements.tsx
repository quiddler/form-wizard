import React from 'react'
import './form-elements.css'

export const FormBubble = (props: any) => {

    const createClassName = () => {
        if (props.disabled) return "zgo-form-bubble disabled"
        if (props.error && props.active) return "zgo-form-bubble error active"
        if (props.error) return "zgo-form-bubble error"
        if (props.success && props.active) return "zgo-form-bubble success active"
        if (props.active) return "zgo-form-bubble active" 
        if (props.success) return "zgo-form-bubble success"
        return "zgo-form-bubble"
    }

    return (
        <div className={createClassName()}
             onClick={() => { if(!props.disabled) props.cb(props.number)}}>
            {props.last ? <i className="zgo-font">&#10003;</i> : <span>{props.number + 1}</span>}
        </div>
    )
}

export const FormSquare = (props: any) => {

    const createClassName = () => {
        if (props.disabled) return "zgo-form-square disabled"
        if (props.error && props.active) return "zgo-form-square error active"
        if (props.error) return "zgo-form-square error"
        if (props.success && props.active) return "zgo-form-square success active"
        if (props.active) return "zgo-form-square active" 
        if (props.success) return "zgo-form-square success"
        return "zgo-form-square"
    }

    return (
        <div className={createClassName()}
             onClick={() => { if(!props.disabled) props.cb(props.number)}}>
            {props.last ? <i className="zgo-font">&#10003;</i> : <span>{props.number + 1}</span>}
        </div>
    )
}

export const FormRectangle = (props: any) => {

    const createClassName = () => {
        if (props.disabled) return "zgo-form-rectangle disabled"
        if (props.error && props.active) return "zgo-form-rectangle error active"
        if (props.error) return "zgo-form-rectangle error"
        if (props.success && props.active) return "zgo-form-rectangle success active"
        if (props.active) return "zgo-form-rectangle active" 
        if (props.success) return "zgo-form-rectangle success"
        return "zgo-form-rectangle"
    }

    return (
        <div className={createClassName()}
             onClick={() => { if(!props.disabled) props.cb(props.number)}}>
            {props.last ? <i className="zgo-font">&#10003;</i> : <span>{props.number + 1}</span>}
        </div>
    )
}