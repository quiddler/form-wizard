import React from 'react';
import './App.css';
import 'bootstrap-css-only/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import {FormOne, FormTwo, FormThree, FormFour, FormFive, FormSix} from './components/form-sections'
import {FormWizard} from './components/form-wizard'

function App() {

  const forms: Array<JSX.Element> = [<FormOne/>, <FormTwo/>, <FormThree/>, <FormFour/>, <FormFive/>, <FormSix/>]

  return (
    <div className="container">
      <div className="row mt-5 mb-5">
        <FormWizard forms={forms} />
      </div>
    </div>
  );
}

export default App;
