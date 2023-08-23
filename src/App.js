import React, { useState } from 'react';
import './App.css';
import {exportUsingDocx} from './utils/export';
import AssessmentInfoForm from './AssessmentInfoForm';

function App() {
  return (
    <body>
      <div className="App">
        <AssessmentInfoForm/>
      </div>
    </body>
  );
}

export default App;
