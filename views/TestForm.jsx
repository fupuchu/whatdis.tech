var React = require("react");
var Wrapper = require('./Wrapper.jsx');

class SubmitTerm extends React.Component {
  render() {
    return (
      <Wrapper>
        <div>
        <form action='/reccommendthis' method='POST'>
              <input name='terminology_title' type='hidden' value={this.props.terminology_title} />
              Submit Analogy
              <br />
              Description
              <textarea name="desc_text"></textarea>
              <br />
              <input type="submit" />
              </form>
        </div>
      </Wrapper>
    );
  }
}

module.exports = SubmitTerm;
