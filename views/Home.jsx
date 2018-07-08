var React = require("react");
var Wrapper = require('./Wrapper.jsx');

class Home extends React.Component {
  render() {
    return (
      <Wrapper>
        <div>
            <h1>Welcome to whatdis.tech</h1>
            <p>Help non-tech users get the hang around understanding tech terms and vote for the analogies that helped get your point across</p>
          </div>
      </Wrapper>
    );
  }
}

module.exports = Home;
