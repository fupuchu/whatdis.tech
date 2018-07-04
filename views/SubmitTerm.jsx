var React = require("react");

class SubmitTerm extends React.Component {
  render() {
    return (
      <html>
        <head />
        <body style={{ fontFamily: 'sans-serif'}}>
        <h1>{this.props.msg}</h1>
          <div>
              <form action='/submit-term' method='POST'>
              Select Terminology:
              <select name="category_id">
                <option value="3">frontend</option>
                <option value="4">backend</option>
                <option value="1">database</option>
                <option value="2">web development</option>
              </select>
              <br />
              Terminology:
              <input name="terminology_title" type="text"/>
              <br />
              <input type="submit" />
              </form>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = SubmitTerm;
