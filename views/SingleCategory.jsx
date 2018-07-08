var React = require("react");
var Wrapper = require('./Wrapper.jsx');

class SingleCategory extends React.Component {
  render() {
    return (
      <Wrapper>
        <h1>{this.props.title.toUpperCase()}</h1>
        <a href='/category' className='btn red'>Go Back</a>
        <h4>Submit your terminologies here!</h4>
        <a href="/submitterm" className="btn orange">
        Submit Your Terminology
        </a>
          <div className='row'>
          {this.props.onecat.map(onecat => (
          <div key={onecat.terminology_id} className='col s12 m6'>
          <div className="card">
          <div className="card-content">
          <span className='card-title'>{onecat.terminology_title.toUpperCase()}</span>
          </div>
          <div className="card-action">
          <a href={'/' + onecat.terminology_title + '/all'}>View {onecat.terminology_title}'s analogies</a>
          </div>
          </div>
          </div>
            ))}
          </div>
      </Wrapper>
    );
  }
}

module.exports = SingleCategory;
