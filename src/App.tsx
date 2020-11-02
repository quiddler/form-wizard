import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap-css-only/css/bootstrap.min.css'
import {FormBubble} from './components/form-bubble'
import {FormLine} from './components/form-line'
import {FormOne, FormTwo, FormThree, FormFour, FormFive} from './components/form-sections'

function App() {

  const forms = [<FormOne cb={(ans: boolean) => formSuccess(ans, 1)}/>, 
                 <FormTwo/>, <FormThree/>, <FormFour/>, <FormFive/>]

  const formSuccess = (ans: boolean, idx: number) => {
    if (ans) {
      if (!successIndices.includes(idx)) setSuccessIndices(successIndices.concat(idx))
    } else {
      if (successIndices.includes(idx)) {
        let i = successIndices.indexOf(idx)
        setSuccessIndices(successIndices.filter((_, index) => index !== i))
      }
    }
  }

  const [currentIndex, setCurrentIndex] = React.useState(1)
  const [allowedIndex, setAllowedIndex] = React.useState(1)
  const [successIndices, setSuccessIndices] = React.useState(new Array<number>())

  return (
    <div className="container">
      <div className="row mt-5 mb-5">
        <FormBubble number={1} 
                    active={currentIndex === 1} 
                    disabled={allowedIndex < 1} 
                    success={successIndices.includes(1)}
                    cb={(num: number) => {setCurrentIndex(num)}}/>
        <FormLine />
        <FormBubble number={2} active={currentIndex === 2} disabled={allowedIndex < 2} cb={(num: number) => {setCurrentIndex(num)}} />
        <FormLine />
        <FormBubble number={3} active={currentIndex === 3} disabled={allowedIndex < 3} cb={(num: number) => {setCurrentIndex(num)}} />
        <FormLine />
        <FormBubble number={4} active={currentIndex === 4} disabled={allowedIndex < 4} cb={(num: number) => {setCurrentIndex(num)}} />
        <FormLine />
        <FormBubble number={5} active={currentIndex === 5} disabled={allowedIndex < 5} cb={(num: number) => {setCurrentIndex(num)}} />
      </div>
      <div className="row">
        <button className="btn btn-primary" onClick={() => {if(currentIndex === allowedIndex) setAllowedIndex(allowedIndex + 1)}}>Form Success</button>
      </div>
      <div className="row">
        <button className="btn btn-secondary" onClick={() => {if(currentIndex > 1) setCurrentIndex(currentIndex - 1)}}>Previous</button>
        <button className="btn btn-primary" onClick={() => {if(allowedIndex > currentIndex && currentIndex < 5) setCurrentIndex(currentIndex + 1)}}>Next</button>
      </div>
      <div className="row">
        {React.cloneElement(forms[currentIndex - 1], {index: currentIndex})}
      </div>
    </div>
  );
}

export default App;
