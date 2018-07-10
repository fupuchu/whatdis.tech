var React = require("react");
var Wrapper = require('./Wrapper.jsx');

class SubmitTerm extends React.Component {
  render() {
    return (
      <Wrapper>
        <h2>Submit your Terminology</h2>
        <h5 className='red-text'>{this.props.warn}</h5>
          <div>
              <form action='/submit-term' method='POST'>
              <h4>Choose the category</h4>
              <select style={{ display: 'block'}} name="category_id">
                <option value="1">Database</option>
                <option value="2">Web Development</option>
                <option value="3">Frontend</option>
                <option value="4">Backend</option>
              </select>
              <br />
              Terminology:
              <input autoComplete='none' className='input-field' name="terminology_title" type="text"/>
              <br />
              <input className='btn amber darken-2' type="submit" />
              </form>
          </div>
      </Wrapper>
    );
  }
}

module.exports = SubmitTerm;
