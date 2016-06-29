const React = require('react');
const Link = require('react-router').Link;
const SessionStore = require('../stores/session_store');
const SessionActions = require('../actions/session_actions');
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
  },

  componentWillUnmount() {
    this.signupListener.remove();
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
      name: this.state.name,
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
      profile_img_url: this.state.profile_img_url
    };

    SessionActions.signup(userData);
    this.setState({ username: "", password: "", name: "", email: "", profile_img_url: "" });
  },

  render() {
    return(
      <div className='signup-form-container'>
        <form onSubmit={this.handleSubmit} className='signup-form-box'>
          <div className='signup-form'>

            <label>Name:
              <input
                type="text"
                value={this.state.name}
                onChange={this.update("name")}
                className='signup-input'
              />
            </label>

            <label>Username:
              <input
                type="text"
                value={this.state.username}
                onChange={this.update("username")}
                className='signup-input'
              />
            </label>

            <label>Email address:
              <input
                type="text"
                value={this.state.email}
                onChange={this.update("email")}
                className='signup-input'
              />
            </label>

            <label>Password:
              <input
                type="password"
                value={this.state.password}
                onChange={this.update("password")}
                className='signup-input'
              />
            </label>

            <label>Profile Picture URL:
              <input
                type="text"
                value={this.state.profile_img_url}
                onChange={this.update("profile_img_url")}
                className='signup-input'
              />
            </label>

            <input type="submit" value="Sign Up"/>

          </div>
        </form>
      </div>
    );
  }
});

module.exports = SignupForm;
