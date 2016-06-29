const React = require('react');
const Link = require('react-router').Link;
const SessionStore = require('../stores/session_store');
const SessionActions = require('../actions/session_actions');
const hashHistory = require('react-router').hashHistory;

const LoginForm = React.createClass({

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState() {
    return { username: "", password: "" };
  },

  componentDidMount() {
    this.sessionListener = SessionStore.addListener(this.redirectIfLoggedIn);
  },

  componentWillUnmount() {
    this.sessionListener.remove();
  },

  redirectIfLoggedIn() {
    if (SessionStore.isUserLoggedIn()) {
      this.context.router.push("/");
    }
  },

  update(property) {
    return (e) => this.setState({ [property]: e.target.value });
  },

  handleSubmit(e) {
    e.preventDefault();

    const userData = {
      username: this.state.username,
      password: this.state.password
    };

    SessionActions.login(userData);

    this.setState({ username: "", password: "" })
  },

  render() {
    return (
      <div className='login-form-container'>
        <form onSubmit={this.handleSubmit} className='login-form-box'>
          <div className='login-form'>
            <label>Username:
              <input
                type="text"
                value={this.state.username}
                onChange={this.update("username")}
                className='login-input'
              />
            </label>

            <label>Password:
              <input
                type="password"
                value={this.state.password}
                onChange={this.update("password")}
                className='login-input'
              />
            </label>

            <input type="submit" value="Log In"/>

          </div>
        </form>
      </div>
    );
  }


});

module.exports = LoginForm;
