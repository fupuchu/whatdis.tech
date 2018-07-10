var React = require("react");
var Wrapper = require('./Wrapper.jsx');

class Home extends React.Component {
  render() {
    return (
      <Wrapper>
        <div>
            <h1>Welcome to whatdis.tech</h1>
            <h5>Help non-tech users wrap their head around confusing tech terms and vote for the analogies that helped got your point across</h5>
          </div>
      </Wrapper>
    );
  }
}

module.exports = Home;
