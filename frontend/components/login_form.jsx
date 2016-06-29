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
      this.props.close();
      this.context.router.push("/");
    }
  },

  fieldErrors(field) {
    const errors = ErrorStore.formErrors("login");
    if (!errors[field]) {return; }

    const messages = errors[field].map( (errorMsg, i) => {
      return <li key={ i } className='errors'>{ errorMsg }</li>;
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

    ErrorActions.clearErrors();
    SessionActions.login(userData);
  },

  render() {
    return (
        <div>
          { this.fieldErrors("base") }

          <form onSubmit={this.handleSubmit} className='login-form'>
            { this.fieldErrors("username") }
              <input
                type="text"
                value={this.state.username}
                placeholder="Username"
                onChange={this.update("username")}
                className='login-input'
              />
            <br></br>
              { this.fieldErrors("password") }
              <input
                type="password"
                value={this.state.password}
                placeholder="Password"
                onChange={this.update("password")}
                className='login-input'
              />
            <br></br>
            <button className='login-form-button' type="submit">Log In</button>
            <button className='login-form-button' onClick={this.handleGuestLogin}>Guest Log In</button>
          </form>
        </div>
    );
  }


});

module.exports = LoginForm;
