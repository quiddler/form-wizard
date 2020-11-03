import React from 'react';
import { FormBubble } from './form-bubble'
import { FormLine } from './form-line'
import './form-wizard.css'

export class FormWizardProps {

    public zgo: {
        success: Function
        next: Function
        previous: Function
        index: number
        first: boolean
        last: boolean
        valid: Function
    }

    constructor() {
        this.zgo = {
            success : () => {},
            next : () => {},
            previous : () => {},
            index : -1,
            first : false,
            last : false,
            valid : () => {}
        }
    }
}

export const FormWizard = (props: any) => {

    const formSuccess = (ans: boolean, idx: number) => {
        if (ans) {
            if(currentIndex === allowedIndex) 
                setAllowedIndex(allowedIndex + 1)
            else
                next()
            if (!successIndices.includes(idx)) 
                setSuccessIndices(successIndices.concat(idx))
            if (errorIndices.includes(idx)) {
                let errorIndex = errorIndices.indexOf(idx)
                setErrorIndices(errorIndices.filter((_, index) => index !== errorIndex))
            }
        } else {
            if (!errorIndices.includes(idx)) 
                setErrorIndices(errorIndices.concat(idx))
            if (successIndices.includes(idx)) {
                let successIndex = successIndices.indexOf(idx)
                setSuccessIndices(successIndices.filter((_, index) => index !== successIndex))
            }
        }
    }

    const next = () => {
        if(allowedIndex > currentIndex && currentIndex < props.forms.length - 1) 
            setCurrentIndex(currentIndex + 1)
    }

    const prev = () => {
        if(currentIndex > 0) 
            setCurrentIndex(currentIndex - 1)
    }

    const injectProps = (idx: number): FormWizardProps => {
        return {
            zgo: {
                success: formSuccess,
                next: next,
                previous: prev,
                index: idx,
                first: idx === 0,
                last: idx === props.forms.length - 1,
                valid: () => errorIndices.length === 0
            }
        }
    }

  const bubble = (index: number) => <FormBubble number={index}
                                                key={index.toString()}
                                                active={currentIndex === index}
                                                disabled={allowedIndex < index}
                                                error={errorIndices.includes(index)}
                                                success={successIndices.includes(index)}
                                                cb={(num: number) => setCurrentIndex(num)} 
                                                last={index === props.forms.length - 1}/>

  const [currentIndex,   setCurrentIndex]   = React.useState(0)
  const [allowedIndex,   setAllowedIndex]   = React.useState(0)
  const [successIndices, setSuccessIndices] = React.useState(new Array<number>())
  const [errorIndices,   setErrorIndices]   = React.useState(new Array<number>())

  React.useEffect(() => {
      if (allowedIndex > currentIndex) next();
  }, [allowedIndex]);

  return (
    <>
        <div className="zgo-form-nav-wrapper">
            {props.forms.map( (_form: JSX.Element, i: number, arr: Array<JSX.Element>) => {
                if (i === arr.length - 1) {
                    return bubble(i)
                } else {
                    return (
                        <React.Fragment key={i.toString()}>
                            {bubble(i)}
                            <FormLine/>
                        </React.Fragment>
                    )
                }
            })}
        </div>

        <div className="zgo-form-wrapper">
            {React.cloneElement(props.forms[currentIndex], injectProps(currentIndex))}
        </div>
    </>
  )
}
