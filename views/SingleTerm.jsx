var React = require("react");

class SingleTerm extends React.Component {
  render() {
    return (
      <html>
        <head />
        <body style={{ fontFamily: 'sans-serif'}}>
        <h1>Viewing.. single category</h1>
          <div>
          {this.props.singleterm.map(singleterm => (
          <div key={singleterm.desc_id} style={{ backgroundColor: 'lightblue'}}>
            <p>Terminology: {singleterm.desc_text}</p>
            <p>Votes: {singleterm.desc_vote}</p>
          </div>
            ))}
          </div>
          <form action='/submit-desc' method='POST'>
              <input name='terminology_title' type='hidden' value={this.props.terminology_title} />
              Submit Analogy
              <br />
              Description
              <textarea name="desc_text"></textarea>
              <br />
              <input type="submit" />
              </form>
        </body>
      </html>
    );
  }
}

module.exports = SingleTerm;
