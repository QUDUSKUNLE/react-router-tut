// modules/Repos.js
import React from 'react'
import NavLink from './NavLink'
import { browserHistory } from 'react-router'
export default React.createClass({

  // ask for `router` from context
  contextTypes: {
    router: React.PropTypes.object
  },

  // add this method
  handleSubmit(event) {
    event.preventDefault()
    const userName = event.target.elements[0].value
    const repo = event.target.elements[1].value
    const path = `/repos/${userName}/${repo}`
    this.context.router.push(path)
  },

  render() {
    return (
      <div className="center-align">
        <h2>Repos</h2>
        <ul>
          <li><NavLink to="/repos/reactjs/react-router">React Router</NavLink></li>
          <li><NavLink to="/repos/facebook/react">React</NavLink></li>
          {/* add this form */}
          <li>
            <div>
               <form onSubmit={this.handleSubmit}>
                  <input type="text" placeholder="userName"/> /  {' '}
                  <input type="text" placeholder="repo"/> {' '}
                  <button type="submit">Go</button>
                </form>
            </div>
          </li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})
