import React from 'react'

export const FormOne = (props: any) => {

    return (
        <div>
            <button className="btn btn-secondary" onClick={() => props.zgo.success(false, props.zgo.index)}>Fake error</button>
            <button className="btn btn-primary" onClick={() => props.zgo.success(true, props.zgo.index)}>Fake success</button>
            
            {props.zgo.first ? null : <button onClick={() => props.zgo.previous()}>Previous</button>}
            {props.zgo.last ? <button onClick={() => props.zgo.next()}>Submit</button> : <button onClick={() => props.zgo.next()}>Continue</button>}
        </div>
    )
}

export const FormTwo = (props: any) => {

    return (
        <div>
            <button className="btn btn-secondary" onClick={() => props.zgo.success(false, props.zgo.index)}>Fake error</button>
            <button className="btn btn-primary" onClick={() => props.zgo.success(true, props.zgo.index)}>Fake success</button>
            
            {props.zgo.first ? null : <button onClick={() => props.zgo.previous()}>Previous</button>}
            {props.zgo.last ? <button onClick={() => props.zgo.next()}>Submit</button> : <button onClick={() => props.zgo.next()}>Continue</button>}
        </div>
    )
}

export const FormThree = (props: any) => {

    return (
        <div>
            <button className="btn btn-secondary" onClick={() => props.zgo.success(false, props.zgo.index)}>Fake error</button>
            <button className="btn btn-primary" onClick={() => props.zgo.success(true, props.zgo.index)}>Fake success</button>
            
            {props.zgo.first ? null : <button onClick={() => props.zgo.previous()}>Previous</button>}
            {props.zgo.last ? <button onClick={() => props.zgo.next()}>Submit</button> : <button onClick={() => props.zgo.next()}>Continue</button>}
        </div>
    )
}

export const FormFour = (props: any) => {

    return (
        <div>
            <button className="btn btn-secondary" onClick={() => props.zgo.success(false, props.zgo.index)}>Fake error</button>
            <button className="btn btn-primary" onClick={() => props.zgo.success(true, props.zgo.index)}>Fake success</button>
            
            {props.zgo.first ? null : <button onClick={() => props.zgo.previous()}>Previous</button>}
            {props.zgo.last ? <button onClick={() => props.zgo.next()}>Submit</button> : <button onClick={() => props.zgo.next()}>Continue</button>}
        </div>
    )
}

export const FormFive = (props: any) => {

    return (
        <div>
            <button className="btn btn-secondary" onClick={() => props.zgo.success(false, props.zgo.index)}>Fake error</button>
            <button className="btn btn-primary" onClick={() => props.zgo.success(true, props.zgo.index)}>Fake success</button>
            
            {props.zgo.first ? null : <button onClick={() => props.zgo.previous()}>Previous</button>}
            {props.zgo.last ? <button onClick={() => props.zgo.next()}>Submit</button> : <button onClick={() => props.zgo.next()}>Continue</button>}
        </div>
    )
}

export const FormSix = (props: any) => {

    return (
        <div>
            <button className="btn btn-secondary" onClick={() => props.zgo.success(false, props.zgo.index)}>Fake error</button>
            <button className="btn btn-primary" onClick={() => props.zgo.success(true, props.zgo.index)}>Fake success</button>
            
            {props.zgo.first ? null : <button onClick={() => props.zgo.previous()}>Previous</button>}
            {props.zgo.last ? <button onClick={() => props.zgo.next()}>Submit</button> : <button onClick={() => props.zgo.next()}>Continue</button>}
        </div>
    )
}
