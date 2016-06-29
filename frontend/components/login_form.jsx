const React = require('react');
const Link = require('react-router').Link;
const SessionStore = require('../stores/session_store');
const ErrorStore = require('../stores/error_store');
const ErrorActions = require('../actions/error_actions');
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
    this.errorListener = ErrorStore.addListener(this.forceUpdate.bind(this));
  },

  componentWillUnmount() {
    this.sessionListener.remove();
    this.errorListener.remove();
  },

  redirectIfLoggedIn() {
    if (SessionStore.isUserLoggedIn()) {
      this.context.router.push("/");
    }
  },

  fieldErrors(field) {
    const errors = ErrorStore.formErrors("login");

    if (!errors[field]) {return; }

    const messages = errors[field].map( (errorMsg, i) => {
      return <li key={ i }>{ errorMsg }</li>;
    });

    return <ul>{ messages }</ul>;
  },

  update(property) {
    return (e) => this.setState({ [property]: e.target.value });
  },

  handleGuestLogin(e) {
    e.preventDefault();

    ErrorActions.clearErrors();
    SessionActions.login({ username: 'guest', password: 'password' });
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
          { this.fieldErrors("base") }

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
            <button onClick={this.handleGuestLogin}>Guest Login</button>
          </div>
        </form>
      </div>
    );
  }


});

module.exports = LoginForm;
