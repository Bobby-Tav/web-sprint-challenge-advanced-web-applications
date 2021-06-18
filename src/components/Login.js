import React, { useEffect, useState } from "react";

const Login = () => {
  const [data,setData]=useState({username:'',password:''})

  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const error = "";
  //replace with error state

  const handleChange = (e) =>{
    setData({...data,[e.target.name]:e.target.value})
  }

  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <div data-testid="loginForm" className="login-form">
        <h2>Build login form here</h2>
        <form>
          <label>
            <input type='text' name='username' value={data.username} onChange={handleChange}  />
          </label>
          <label>
            <input type='text' name='password' value={data.password} onChange={handleChange}  />
          </label>
        </form>
      </div>

      <p data-testid="errorMessage" className="error">{error}</p>
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