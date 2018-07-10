import React from 'react';
var Wrapper = require('./Wrapper.jsx');

class Login extends React.Component {
  render() {
    return (
      <Wrapper>
          <h6 className='red-text'>{this.props.msg}</h6>
            <form action='/login' method='POST'>
            <div class="row">
              <div class="col s12 m6 offset-m3">
                <div class="card blue-grey lighten-5">
                  <div class="card-content white-text">
                    <span class="card-title black-text">Login</span>
                    <label>Email:</label>
                      <input type="email" name='email' />
                      <label>Password:</label>
                      <input type="password" name='password' />
                  </div>
                  <div class="card-action">
                  <input className='btn orange' type="submit" />
                  </div>
                </div>
              </div>
            </div>
            </form>
        </Wrapper>
    )
  }
}

module.exports = Login;
