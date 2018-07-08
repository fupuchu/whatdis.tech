import React from 'react';
var Wrapper = require('./Wrapper.jsx');

class Register extends React.Component {
  render() {
    return (
      <Wrapper>
          <h1>Registration</h1>
            <form action='/register' method='POST'>
            <label>Username:</label>
            <input type="text" name='username' />
            <label>Email:</label>
            <input type="email" name='email' />
            <label>Password:</label>
            <input type="password" name='password' />
            <label>First Name:</label>
            <input type="text" name='first_name' />
            <label>Last Name:</label>
            <input type="text" name='last_name' />
            <select name="location" style={{display:'block'}}>
                <option value="SG">SG</option>
            </select>
            <input type="submit" />
            </form>
        </Wrapper>
    );
  }
}

module.exports = Register;
