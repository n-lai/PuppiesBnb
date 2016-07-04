const React = require('react');
const Link = require('react-router').Link;
const hashHistory = require('react-router').hashHistory;
const NavBar = require('./navbar');

const App = React.createClass({

  render() {
    return (
      <div className='app-container'>
        <NavBar />
        {this.props.children}
      </div>
    );
  }
});

module.exports = App;
