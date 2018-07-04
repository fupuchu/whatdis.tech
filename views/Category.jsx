var React = require("react");

class Category extends React.Component {
  render() {
    return (
      <html>
        <head />
        <body style={{ fontFamily: 'sans-serif'}}>
        <h1>listing all categories</h1>
          <div>
          {this.props.category.map(category => (
          <div key={category.category_id} style={{ backgroundColor: 'lightblue'}}>
            <p>{category.category_name}</p>
            <a href={'/category/' + category.category_id}>View Term {category.category_name}</a>
          </div>
          ))}
          </div>
        </body>
      </html>
    );
  }
}

module.exports = Category;
