const React = require('react');
const Link = require('react-router').Link;
const SessionStore = require('../stores/session_store');
const ErrorStore = require('../stores/error_store');
const SessionActions = require('../actions/session_actions');
const ErrorActions = require('../actions/error_actions');
const hashHistory = require('react-router').hashHistory;

const SignupForm = React.createClass({

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState() {
    return { username: "", password: "", name: "", email: "", profile_img_url: "" };
  },

  componentDidMount() {
    this.signupListener = SessionStore.addListener(this.redirectIfLoggedIn);
    this.errorListener = ErrorStore.addListener(this.forceUpdate.bind(this));
  },

  componentWillUnmount() {
    this.signupListener.remove();
    this.errorListener.remove();
  },

  redirectIfLoggedIn() {
    if (SessionStore.isUserLoggedIn()) {
      this.props.close();
      this.context.router.push("/");
    }
  },

  fieldErrors(field) {
    const errors = ErrorStore.formErrors("signup");
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
      name: this.state.name,
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
      profile_img_url: this.state.profile_img_url
    };

    ErrorActions.clearErrors();
    SessionActions.signup(userData);
  },


  render() {
    return(
      <div className='signup-form-container'>
        <form onSubmit={this.handleSubmit} className='signup-form-box'>
          { this.fieldErrors("base") }

          <div className='signup-form'>

              <input
                type="text"
                value={this.state.name}
                placeholder='Name'
                onChange={this.update("name")}
                className='signup-input'
              />
              <br></br>
              <input
                type="text"
                value={this.state.username}
                placeholder='Username'
                onChange={this.update("username")}
                className='signup-input'
              />
              <br></br>
              <input
                type="text"
                value={this.state.email}
                placeholder='Email Address'
                onChange={this.update("email")}
                className='signup-input'
              />
            <br></br>
              <input
                type="password"
                value={this.state.password}
                placeholder='Password'
                onChange={this.update("password")}
                className='signup-input'
              />
            <br></br>
              <input
                type="text"
                value={this.state.profile_img_url}
                placeholder='Profile Picture URL'
                onChange={this.update("profile_img_url")}
                className='signup-input'
              />
            <br></br>
            <button className='signup-form-button' type="submit">Sign Up</button>
            <button className='signup-form-button' onClick={this.handleGuestLogin}>Guest Log In</button>
          </div>
        </form>
      </div>
    );
  }
});

module.exports = SignupForm;
