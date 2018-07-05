var React = require("react");
var Wrapper = require('./Wrapper.jsx');

class SingleCategory extends React.Component {
  render() {
    return (
      <Wrapper>
        <h1>Viewing.. {this.props.title}</h1>
        <a href={'/category'}>Go Back</a>
        <h4>Submit your terminologies here</h4>
        <a href="/submitterm" className="btn">
        Submit Your Termis
        </a>
          <div>
          {this.props.onecat.map(onecat => (
          <div key={onecat.terminology_id} style={{ backgroundColor: 'lightblue'}}>
            <p>{onecat.category_name}</p>
            <p>{onecat.terminology_title}</p>
            <a href={'/' + onecat.terminology_title + '/all'}>View {onecat.terminology_title}</a>
          </div>
            ))}
          </div>
      </Wrapper>
    );
  }
}

module.exports = SingleCategory;
