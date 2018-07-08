var React = require("react");
var Wrapper = require('./Wrapper.jsx');

class SubmitTerm extends React.Component {
  render() {
    return (
      <Wrapper>
        <h2>{this.props.msg}</h2>
          <div>
              <form action='/submit-term' method='POST'>
              <h4>Choose the category</h4>
              <select style={{ display: 'block'}} name="category_id">
                <option value="3">Frontend</option>
                <option value="4">Backend</option>
                <option value="1">Database</option>
                <option value="2">Web Development</option>
              </select>
              <br />
              Terminology:
              <input autocomplete='none' className='input-field' name="terminology_title" type="text"/>
              <br />
              <input className='btn amber darken-2' type="submit" />
              </form>
          </div>
      </Wrapper>
    );
  }
}

module.exports = SubmitTerm;
