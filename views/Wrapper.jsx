import React from 'react'
import Navbar from './navbar.jsx'
import Footer from './footer.jsx'

class Wrapper extends React.Component {
  render() {
  	return ( 
      <html>
        <head>
        <title>whatdis.tech</title>
        <meta name="description" content='Vote for the analogy that helped non-tech users understand confusing tech terms.' />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content='whatdis.tech' />
        <meta property="og:description" content='Vote for the analogy that helped non-tech users understand confusing tech terms.' />
        <meta property="og:type" content="website" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-rc.2/css/materialize.min.css" />
        </head>
  		<body>
  			<div className='container'>
              {this.props.children}
            </div>
  			<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-rc.2/js/materialize.min.js" />
  		</body>
  	</html> );

  }
}

module.exports = Wrapper;