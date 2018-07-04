var React = require("react");

class SingleCategory extends React.Component {
  render() {
    return (
      <html>
        <head />
        <body style={{ fontFamily: 'sans-serif'}}>
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
        </body>
      </html>
    );
  }
}

module.exports = SingleCategory;
