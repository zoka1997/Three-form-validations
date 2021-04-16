import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormVanilla from './Components/FormVanilla';
import FormikForm from './Components/FormikForm';
import FormikFormVal from './Components/FormikFormVal';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";

function App() {
  const nameValidation = (fieldName, fieldValue) => {
      if (fieldValue.trim() === '') {
        return `${fieldName} is required`;
      }
      if (/[^a-zA-Z -]/.test(fieldValue)) {
        return 'Invalid characters';
      }
      if (fieldValue.trim().length < 3) {
        return `${fieldName} needs to be at least three characters`;
      }
      return null;
  };


  const emailValidation = email => {
    if (
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        email,
    )
    ) 
  {
  return null;
  }
     if (email.trim() === '') {
       return 'Email is required';
     }
     return 'Please enter a valid name';
    };

    const ageValidation = age => {
       if (!age) {
         return 'Age is required';
       }
       if (age < 18) {
         return 'Age must be at least 18';
       }
       if (age > 99) {
        return 'Age must be under 99';
      }
      return null;
    };
    
    const validate = {
      firstName: name => nameValidation('First Name', name),
      lastName: name => nameValidation('Last Name', name),
      email: emailValidation,
      age: ageValidation,
    };
    
    const initialValues = {
      age: 10,
      email: 'no@email',
      firstName: 'Mary',
      lastName: 'Jane',
    };

  return (
    <div className="App">
     <Router>
     <div>
          <h1 className="main-form">Forms</h1>
          <ul>
            <li>
              <Link to="/form-vanilla">Form with manual validation</Link>
            </li>
            <li>
              <Link to="/form-formik">Form validation using Formik</Link>
            </li>
            <li>
              <Link to="/form-formik-val">Form validation using Formik with was validated</Link>
            </li>
          </ul>
        </div>
        <Route
          path="/form-vanilla"
          render={() => (
            <FormVanilla validate={validate} initialValues={initialValues} />
          )}
        />
         <Route
          path="/form-formik"
          render={() => (
            <FormikForm validate={validate} initialValues={initialValues} />
          )}
        />
         <Route
          path="/form-formik-val"
          render={() => (
            <FormikFormVal validate={validate} initialValues={initialValues} />
          )}
        />
     </Router>
    </div>
  );
}

export default App;
