import React from 'react';
var Wrapper = require('./Wrapper.jsx');

class Login extends React.Component {
  render() {
    return (
      <Wrapper>
          <h1>Login</h1>
            <form action='/login' method='POST'>
            <label>Email:</label>
            <input type="email" name='email' />
            <label>Password:</label>
            <input type="password" name='password' />
            <input type="submit" />
            </form>
        </Wrapper>
    );
  }
}

module.exports = Login;