import React from 'react';
var Wrapper = require('./Wrapper.jsx');

class Login extends React.Component {
  render() {
    return (
      <Wrapper>
          <h1>Login</h1>
          <h6 className='red-text'>{this.props.msg}</h6>
            <form action='/login' method='POST'>
              <label>Email:</label>
              <input type="email" name='email' />
              <label>Password:</label>
              <input type="password" name='password' />
              <input className='btn orange' type="submit" />
            </form>
        </Wrapper>
    );
  }
}

module.exports = Login;
