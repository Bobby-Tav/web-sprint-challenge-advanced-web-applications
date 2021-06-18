import React, { useEffect, useState, useHistory } from "react";
import axios from 'axios';

const Login = (props) => {
  const [data,setData]=useState({username:'',password:''})
  const [error,setError] =useState({error:''})
  
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  // const error = "";
  //replace with error state
  
  const handleChange = (e) =>{
    setData({...data,[e.target.name]:e.target.value})
  }
const onSubmit = (e) =>{
  e.preventDefault();

  axios.post('http://localhost:5000/api/login',data)
  .then(res =>{
    localStorage.setItem('token',res.data.payload)
    props.history.push('')
  })
  .catch(err=>{
    console.log('my error',err)
    setError({error:'Username or Password not valid.'})
  })
  
}
  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <div data-testid="loginForm" className="login-form">
        <h2>Build login form here</h2>
        <form onSubmit={onSubmit}>
          <label>Username:
            <input type='text' name='username' value={data.username} onChange={handleChange} data-testid="username" />
          </label>
          <label>Password:
            <input type='text' name='password' value={data.password} onChange={handleChange} data-testid="password" />
          </label>
          <button>Log In!</button>
        </form>
      </div>

      <p data-testid="errorMessage" className="error">{error.error}</p>
    </div>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state nessiary for form functioning.
//3. MAKE SURE YOUR USERNAME AND PASSWORD INPUTS INCLUDE data-testid="username" and data-testid="password"
//4. If either the username or password is not entered, display the following words with the p tag provided: Username or Password not valid.
//5. If the username / password is equal to Lambda / i<3Lambd4, save that token to localStorage.