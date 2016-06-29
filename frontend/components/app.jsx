const React = require('react');
const Link = require('react-router').Link;
const SessionStore = require('../stores/session_store');
const SessionActions = require('../actions/session_actions');

const App = React.createClass({
  greeting() {
    if (SessionStore.isUserLoggedIn()) {
      return (
        <hgroup className='header-group'>
          <h2 className='header-name'>Hi, {SessionStore.currentUser().name}!</h2>
          <input className='header-button' type='submit' value="Logout" onClick={this._handleLogout} />
        </hgroup>
      );
    } else if ( !['/login', '/signup'].includes(this.props.location.pathname) ) {
      return (
        <nav className='login-signup'>
          <Link to='/login' activeClassName='current'>Login</Link>
          &nbsp;
          <Link to='/signup' activeClassName='current'>Signup</Link>
        </nav>
      );
    }
  },

  _handleLogout() {
    SessionActions.logout();
  },

  render() {
    return (
      <div className='app-container'>
        <header>
          { this.greeting() }
        </header>
        Hello from the PuppiesBnb App!
      </div>
    );
  }
});

module.exports = App;
