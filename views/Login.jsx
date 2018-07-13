import React from 'react';
var Wrapper = require('./Wrapper.jsx');

class Login extends React.Component {
  render() {
    return (
      <Wrapper loggedIn={this.props._locals.loggedIn}>
          <h6 className='red-text'>{this.props.msg}</h6>
            <form action='/login' method='POST'>
            <div className="row">
              <div className="col s12 m6 offset-m3">
                <div className="card blue-grey lighten-5">
                  <div className="card-content white-text">
                    <span className="card-title black-text">Login</span>
                    <label>Email:</label>
                      <input type="email" name='email' />
                      <label>Password:</label>
                      <input type="password" name='password' />
                  </div>
                  <div className="card-action">
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
