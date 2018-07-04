var React = require("react");
var Wrapper = require('./Wrapper.jsx');

class SingleCategory extends React.Component {
  render() {
    return (
      <Wrapper>
        <h1>Viewing.. single category</h1>
          <div>
          {this.props.onecat.map(onecat => (
          <div key={onecat.id} style={{ backgroundColor: 'lightblue'}}>
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
