import React from 'react'
var NavBar = require('./NavBar.jsx')
var Footer = require('./Footer.jsx')

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
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-rc.2/js/materialize.min.js" />
        <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.1.0/css/all.css" integrity="sha384-87DrmpqHRiY8hPLIr7ByqhPIywuSsjuQAfMXAE0sMUpY3BM7nXjf+mLIUSvhDArs" crossOrigin="anonymous" />
        </head>
  		<body style={{
        display: 'flex',
        minHeight: '100vh',
        flexDirection: 'column'
      }}>
        <NavBar />
          <main style={{
            flex: '1 0 auto'
          }}>
          <div className='container'>
            {this.props.children}
          </div>
          </main>
        <Footer />
  		</body>
  	</html> );

  }
}

module.exports = Wrapper;