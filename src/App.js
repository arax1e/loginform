import React from "react";
// TODO: import useFormik from formik library
import {useFormik} from 'formik'

function App() {
  // TODO: add a const called formik assigned to useFormik()
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: values => { 
      alert('Login Successful') 
    },
    validate: values => {
      let errors = {};
      if(!values.email) {
        errors.email = 'Required Field';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
        errors.email = 'Invalid email address';
      }
      if(!values.password) errors.password = 'Required Field';
      return errors;
    }
  });

  return (
    <div>
    <form onSubmit={formik.handleSubmit}>
      <div>Email</div>
      <input name="email" type="text" id="emailField" onChange={formik.handleChange} value={formik.values.email}/>
      {formik.errors.email ? <div style={{color:'red'}} id="emailError">{formik.errors.email}</div>: null}
      <div>Password</div>
      <input name="password" type="text" id="pswField" onChange={formik.handleChange} value={formik.values.password}/>
      {formik.errors.password ? <div style={{color:'red'}} id="pswError">{formik.errors.password}</div>: null}
      <button id="submitBtn" type="submit">Submit</button>
    </form>
    </div>
  );
}

export default App;
