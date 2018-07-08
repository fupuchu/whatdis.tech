import React from 'react';
var Wrapper = require('./Wrapper.jsx');

class Error extends React.Component {
  render() {
    return (
      <Wrapper>
          <h2>{this.props.msg}</h2>
          <a className='btn red' href={this.props.link}>{this.props.linkMsg}</a>
    </Wrapper>
    );
  }
}

module.exports = Error;
