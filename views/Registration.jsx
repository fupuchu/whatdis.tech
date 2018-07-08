import React from 'react';
var Wrapper = require('./Wrapper.jsx');

class Register extends React.Component {
  render() {
    return (
      <Wrapper>
          <h1>Registration</h1>
          <p>{this.props.msg}</p>
            <form action='/register' method='POST'>
            <label>Username:</label>
            <input type="text" name='username' required />
            <label>Email:</label>
            <input type="email" name='email' required />
            <label>Password:</label>
            <input type="password" name='password' minLength='8' required />
            <label>First Name:</label>
            <input type="text" name='first_name' required />
            <label>Last Name:</label>
            <input type="text" name='last_name' required />
            <select name="location" style={{display:'block'}}>
                <option value="SG">SG</option>
            </select>
            <br />
            <input className='btn orange'type="submit" />
            </form>
            <br />
            <a className='btn blue' href="/login">Login</a>
        </Wrapper>
    );
  }
}

module.exports = Register;
