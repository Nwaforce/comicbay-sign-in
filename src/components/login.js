import React, { useState } from 'react';
import './login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

fetch('https://comic-bay-api.onrendr.com/api/v1/auth/register')



  const handleSubmit = async (event) => {
    event.preventDefault();
    


    try {
        const response = await  fetch('https://comic-bay-api.onrendr.com/api/v1/auth/register',{
        
            method: "POST",
      body: JSON.stringify({ username, password }),
     headers: {
       "Content-Type": "application/json",
   },
  }
  );

  const data = await response.json();
  console.log(data);



    } catch (error) {
        
    }
  }

  return (
    <div className="signin-container">
      <div className="signin-logo">
    
        <h1 className='span'>Enter your email address</h1>
        <br />
        <p className='span'>Type your email to log in or create a ComicBay account.</p>
      </div>
      <form className="signin-form" onSubmit={handleSubmit} >
        <div className='form-group'>

          <input
            type="email" required
            value={username}
            onChange={(event) => setUsername(event.target.value)}
           
          />
          <label>Enter email</label>
        </div>
        <br />
        <div className='form-group'>
          
          <input
            type="password" required 
            minLength={8}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <label>Enter password</label>
        </div>
        <br />
        <div>
        <div className='two_buttons'>
            <a href="" class = "button">Sign in</a>
            <a href="" class = "buttonn">Sign up</a>

        </div>
       
       
    
        </div>
      </form>
    </div>
  );
}

export default Login;
