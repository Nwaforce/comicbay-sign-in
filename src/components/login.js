import React, { useState } from 'react';
import './login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    
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
            <a href="" class = "buttonn">Sign in</a>

        </div>
       
       
    
        </div>
      </form>
    </div>
  );
}

export default Login;
