var React = require("react");

class NavBar extends React.Component {
  render() {
    return (
        <div>
        <nav className='blue darken-3'>
          <div className='container'>
          <div className="nav-wrapper">
          <a href='/' className="brand-logo">whatdis.tech</a>
          <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
          <ul className="right hide-on-med-and-down">
            <li><a href="/category">Categories</a></li>
            <li><a href="/registration">Register</a></li>
            <li><a href="/login">Login</a></li>
            <li><a href="/login">Logout</a></li>
          </ul>
        </div>
        </div>
      </nav>
      <ul className="sidenav" id="mobile-demo">
      <li><a href="/category">Categories</a></li>
            <li><a href="/registration">Register</a></li>
            <li><a href="/login">Login</a></li>
      </ul>
      </div>
    );
  }
}

module.exports = NavBar;
