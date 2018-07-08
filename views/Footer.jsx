var React = require("react");

class Footer extends React.Component {
    render() {
        return (
        <footer className="page-footer blue-grey darken-3" style={{
            paddingTop : '0'
        }}>
          <div className="footer-copyright">
            <div className="container">
            Crafted with <i className="fas fa-heart red-text"></i> by <a href="https://github.com/fupuchu">Leon Ho</a>
            </div>
          </div>
        </footer>
        )
    }
}

module.exports = Footer