import React from 'react';
import './App.css';
import 'bootstrap-css-only/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import {FormOne, FormTwo, FormThree, FormFour, FormFive, FormSix} from './components/form-sections'
import {FormWizard, FormWizardProps} from './components/form-wizard'

function App() {

  const forms: Array<JSX.Element> = [<FormOne/>, <FormTwo/>, <FormThree/>, <FormFour/>, <FormFive/>, <FormSix/>]

  const props: FormWizardProps = {
    forms: forms,
    title: "Spreadable Props Form"
  }

  return (
    <div className="container">
      <div className="row mt-5 mb-5">
        <FormWizard {...props}/>
        <div className="mt-5">&nbsp;</div>
        <FormWizard forms={forms} title="Square Form" nav="square"/>
        <div className="mt-5">&nbsp;</div>
        <FormWizard forms={forms} title="Rectangle Form" nav="rectangle"/>
      </div>
    </div>
  );
}

export default App;
