var React = require("react");
var Wrapper = require('./Wrapper.jsx');

class Category extends React.Component {
  render() {
    return (
      <Wrapper loggedIn={this.props._locals.loggedIn}>
        <h3>Viewing Categories</h3>
          <div className='row'>
          {this.props.category.map(category => (
          <div key={category.category_id} className='col s12 m6'>
            <div className='card'>
              <div className='card-content'>
                <span className='card-title'>{category.category_name.toUpperCase()}</span>
              </div>
              <div className='card-action'>
                <a href={'/category/' + category.category_id}>View</a>
                </div>
            </div>
          </div>
          ))}
          </div>
      </Wrapper>
    );
  }
}

module.exports = Category;
