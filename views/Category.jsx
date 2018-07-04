var React = require("react");
var Wrapper = require('./Wrapper.jsx');

class Category extends React.Component {
  render() {
    return (
      <Wrapper>
        <h1>listing all categories</h1>
          <div>
          {this.props.category.map(category => (
          <div key={category.category_id} style={{ backgroundColor: 'lightblue'}}>
            <p>{category.category_name}</p>
            <a href={'/category/' + category.category_id}>View: {category.category_name}</a>
          </div>
          ))}
          </div>
      </Wrapper>
    );
  }
}

module.exports = Category;
