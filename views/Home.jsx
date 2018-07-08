var React = require("react");
var Wrapper = require('./Wrapper.jsx');

class Home extends React.Component {
  render() {
    return (
      <Wrapper>
        <div>
            <h1>Welcome to whatdis.tech</h1>
            <a className="waves-effect waves-light btn-small" href="/category">View Categories</a>
          </div>
      </Wrapper>
    );
  }
}

module.exports = Home;
