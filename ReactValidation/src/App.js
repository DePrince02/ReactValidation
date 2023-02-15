import React  ,{useState} from 'react';
import {useFormik} from 'formik';
import './App.css';
import Popup from './Components/Popups';
const validate = values => {
  const errors = {};
  if(!values.firstname){
    errors.firstname = "*Required";
  } else if(values.firstname.length > 8){
    errors.firstname = "*Must Be 8 Characters Or Less";
  }
  if(!values.lastname){
    errors.lastname = "*Required";
  } else if(values.lastname.length > 8){
    errors.lastname = "*Must Be 8 Characters Or Less";
  }
  if(!values.email){
    errors.email = "*Required Email";
} else if(!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(values.email)){
  errors.email = "Invalid Email Address";
}
if(!values.password){
  errors.password ="*Required Password";
} else if(values.password.length >8){
  errors.password ="*Maximum 8 Characters Only";
} else if(values.password.length <4){
  errors.password ="*Minimum 4 Characters Need";
}
if(!values.confirmpassword){
  errors.confirmpassword = "*Required Confirmpassword";
} else if(values.password !== values.confirmpassword){
  errors.confirmpassword ="*Password Must Be Same";
}
return errors;
}
const App = () =>{
  const [bool,setBool] = useState(0);
  const formik = useFormik({
    initialValues : {
      firstname : '',
      lastname : '',
      email : '',
      password : '',
      confirmpassword : '',
    },
    validate,
    onSubmit : (values, {resetForm}) =>{
      if(bool){
        setBool(0);
        resetForm({values : ''})
      } else {
        setBool(1);
      console.log(values);
    }
    }
  });
  console.log(formik.values);
  return(
    <div className = "main">
      <div className = "sign-up">
        <h2>Sign Up Here</h2>            
        <form onSubmit={formik.handleSubmit}>
<input type="text" placeholder='Enter Your FirstName' name='firstname' autoComplete='off' onChange={formik.handleChange} value = {formik.values.firstname} onBlur ={formik.handleBlur}></input>
{
 formik.touched.firstname && formik.errors.firstname ? <span>{formik.errors.firstname}</span> : null
}
<input type="text" placeholder='Enter Your LastName' name='lastname'autoComplete='off' onChange={formik.handleChange} value = {formik.values.lastname} onBlur ={formik.handleBlur}></input>
{
 formik.touched.lastname && formik.errors.lastname ? <span>{formik.errors.lastname}</span> : null
}
<input type="text" placeholder='Enter Your Email' name='email' autoComplete='off' onChange={formik.handleChange} value = {formik.values.email} onBlur ={formik.handleBlur}></input>
{
 formik.touched.email && formik.errors.email ? <span>{formik.errors.email}</span> : null
}
<input type="password" placeholder='Enter Password' name='password' autoComplete='off' onChange={formik.handleChange} value = {formik.values.password} onBlur ={formik.handleBlur}></input>
{
 formik.touched.password && formik.errors.password ? <span>{formik.errors.password}</span> : null
}
<input type="password" placeholder='Confirm Password' name='confirmpassword' autoComplete='off' onChange={formik.handleChange} value = {formik.values.confirmpassword} onBlur ={formik.handleBlur}></input>
{
 formik.touched.confirmpassword && formik.errors.confirmpassword ? <span>{formik.errors.confirmpassword}</span> : null
}
<input type='submit' value='submit'></input>            
        </form>
      </div>
      <div className='message-box'>
       {
        bool ? (<Popup Onclick = {formik.handleSubmit}/>) : null
       }
      </div>
    </div>
  );
}
export default App; 