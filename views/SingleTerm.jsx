import React from 'react';
var Wrapper = require('./Wrapper.jsx');

class SingleTerm extends React.Component {
  render() {
    return (
       <Wrapper loggedIn={this.props._locals.loggedIn}>
        <div className="row">
          <div className="col m6 s12">
          <h1>Viewing {this.props.terminology_title}</h1>
          <a href={'/category/' + this.props.category_id} className='btn red'>
          Go Back
          </a>
          </div>
        </div>
        <div className="row">
           <div className="col m6 s12">
           <form action='/submit-desc' method='POST'>
              <input name='terminology_title' type='hidden' value={this.props.terminology_title} />
              <h6>Submit Analogy</h6>
              <span>Description</span>
              <textarea className='input-field' name="desc_text"></textarea>
              <br />
              <input className='btn orange' type="submit" />
          </form>
           </div>
          </div>

          <div>
          {this.props.singleterm.map(singleterm => (
          <div key={singleterm.desc_id} className='row'>
            <div className="col s12 m12">
              <div className="card">
                <div className="card-content">
                    <span className='card-title'>{singleterm.desc_text}</span>
                    <p>Votes: {singleterm.desc_vote}</p>
                </div>
                <div className="card-action">
                    <form action='/reccommendthis' method='POST'>
                    <input name='term_title' type="hidden" value={singleterm.terminology_title} />
                    <input name='desc_id' type='hidden' value={singleterm.desc_id} />
                    <input name='desc_vote' type='hidden' value={singleterm.desc_vote} />
                      <input className='btn blue' type="submit" value="rec this" />
                    </form>
                  </div>
                </div>
              </div>
          </div>
            ))}
          </div>
        </Wrapper>
    );
  }
}

module.exports = SingleTerm;
