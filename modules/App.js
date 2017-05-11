import React from 'react'
import { Link, IndexLink } from 'react-router'
import NavLink from './NavLink'
import Home from './Home'

export default React.createClass({
  render() {
    return (
      <div>
        <nav className="black-text" role="navigation">
          <div className="nav-wrapper">
            <Link to="/" className="brand-logo">React Router</Link>
            <ul className="right hide-on-med-and-down">
              <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
              <li><NavLink to="/about">About</NavLink></li>
              <li><NavLink to="/repos">Repos</NavLink></li>
            </ul>
          </div>
        </nav>
        {this.props.children || <Home/>}
      </div>
    )
  }
})
