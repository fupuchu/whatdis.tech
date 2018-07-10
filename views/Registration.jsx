import React from 'react';
var Wrapper = require('./Wrapper.jsx');

class Register extends React.Component {
  render() {
    return (
      <Wrapper>
          <p>{this.props.msg}</p>
          <div class="row">
          <div class="col s12 m6 offset-m3">
            <div class="card blue-grey lighten-5">
              <div class="card-content white-text">
                <span class="card-title black-text">Registration</span>
                <form action='/register' method='POST'>
                  <label>Username:</label>
                  <input className='input-field' type="text" name='username' required />
                  <label>Email:</label>
                  <input className='input-field' type="email" name='email' required />
                  <label>Password:</label>
                  <input className='input-field' type="password" name='password' minLength='8' required />
                  <label>First Name:</label>
                  <input className='input-field' type="text" name='first_name' required />
                  <label>Last Name:</label>
                  <input type="text" name='last_name' required />
                  <select name="location" style={{display:'block'}}>
                      <option value="SG">SG</option>
                  </select>
                  <br />
                  <input className='btn orange right'type="submit" />
                  <a className='btn blue' href="/login">Login</a>
                  </form>
              </div>
            </div>
          </div>
        </div>
        </Wrapper>
    );
  }
}

module.exports = Register;
