const React = require('react');
const Link = require('react-router').Link;
const SessionStore = require('../stores/session_store');
const ErrorStore = require('../stores/error_store');
const SessionActions = require('../actions/session_actions');
const ErrorActions = require('../actions/error_actions');
const hashHistory = require('react-router').hashHistory;
const UploadButton = require('./upload_button');

const SignupForm = React.createClass({

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState() {
    return { username: "", password: "", name: "", email: "", profile_img_url: "", buttonText: ['blank', 'Upload Profile Picture'] };
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
    }
    hashHistory.push({
      pathname: '/api/puppies',
      query: { lat: 37.7749, lng: -122.4194 }
    });
  },

  fieldErrors(field) {
    const errors = ErrorStore.formErrors("signup");
    if (!errors[field]) {return; }

    const messages = errors[field].map( (errorMsg, i) => {
      return <li key={ i } className='errors'>{ errorMsg }</li>;
    });

    return <ul>{ messages }</ul>;
  },

  update(property) {
    return (e) => this.setState({ [property]: e.target.value });
  },

  updateUrl(url) {
    this.setState({ image_url: url, buttonText: ['success', 'Picture successfully uploaded!'] });
  },

  handleGuestLogin(e) {
    e.preventDefault();

    ErrorActions.clearErrors();
    SessionActions.login({ username: 'guest', password: 'password' });
  },

  _handleSubmit(e) {
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
        <div>
          { this.fieldErrors("base") }
          <form onSubmit={this._handleSubmit} className='form'>
              <input
                type="text"
                value={this.state.name}
                placeholder='Name'
                onChange={this.update("name")}
                className='form-input'
              />
              <br></br>
              <input
                type="text"
                value={this.state.username}
                placeholder='Username'
                onChange={this.update("username")}
                className='form-input'
              />
              <br></br>
              <input
                type="text"
                value={this.state.email}
                placeholder='Email Address'
                onChange={this.update("email")}
                className='form-input'
              />
            <br></br>
              <input
                type="password"
                value={this.state.password}
                placeholder='Password'
                onChange={this.update("password")}
                className='form-input'
              />
            <br></br>
            <UploadButton updateUrl={this.updateUrl} buttonText={this.state.buttonText}/>

            <button className='signup-form-button' type="submit">Sign Up</button>
            <button className='signup-form-button' onClick={this.handleGuestLogin}>Guest Log In</button>
          </form>
        </div>
    );
  }
});

module.exports = SignupForm;
