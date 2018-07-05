var React = require("react");
var Wrapper = require('./Wrapper.jsx');

class SubmitTerm extends React.Component {
  render() {
    return (
      <Wrapper>
        <h1>{this.props.msg}</h1>
          <div>
              <form action='/submit-term' method='POST'>
              Select Terminology:
              <select style={{ display: 'block'}} name="category_id">
                <option value="3">frontend</option>
                <option value="4">backend</option>
                <option value="1">database</option>
                <option value="2">web development</option>
              </select>
              Terminology:
              <input name="terminology_title" type="text"/>
              <br />
              <input type="submit" />
              </form>
          </div>
      </Wrapper>
    );
  }
}

module.exports = SubmitTerm;
