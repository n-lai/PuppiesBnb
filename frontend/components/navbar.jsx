const React = require('react');
const HashHistory = require('react-router').hashHistory;
const Modal = require('react-modal');
const ModalStyles = require('../styles/modal_styles');

const LoginForm = require('./login_form');
const SignupForm = require('./signup_form');
const PuppyForm = require ('./puppy_form');

const SearchBar = require('./search_bar');

const SessionStore = require('../stores/session_store');
const SessionActions = require('../actions/session_actions');
const ErrorActions = require('../actions/error_actions');

const NavBar = React.createClass({
  getInitialState() {
    Modal.setAppElement('body');
    return { modalIsOpen: false, modal: ""};
  },

  handleOpenModal(modal) {
    this.setState({ modalIsOpen: true, modal: modal });
  },

  handleCloseModal() {
    this.setState({ modalIsOpen: false });
    ErrorActions.clearErrors();
  },

  _handleLogout() {
    SessionActions.logout();
    ErrorActions.clearErrors();
    this.setState({ modalIsOpen: false });
  },

  _handleRoot() {
    HashHistory.push('/');
  },

  greeting() {
    if (SessionStore.isUserLoggedIn()) {
      return (
        <hgroup className='header-group'>
          <h3 className='header-name'>Hi, {SessionStore.currentUser().name}!</h3>
          <button onClick={this.handleOpenModal.bind(this, "Puppy Form")} id='puppy-button'>Add a Puppy</button>
          <button onClick={this._handleLogout} className='logout-button'>Log Out</button>
          <button onClick={this._redirectToAccount}>Account</button>
        </hgroup>
      );
    } else {
      return (
        <nav className='login-signup'>
          <div className='nav-bar-buttons'>
            <button
              onClick={this.handleOpenModal.bind(this, "Log In")}
              id='login-button'
            >Log In</button>

            <button
              onClick={this.handleOpenModal.bind(this, "Sign Up")}
              id='signup-button'
            >Sign Up</button>
          </div>
        </nav>
      );
    }
  },


  render() {
    let component;
    if (this.state.modal === "Log In") {
      component = <LoginForm close={this.handleCloseModal}/>;
    } else if (this.state.modal === "Sign Up") {
      component = <SignupForm close={this.handleCloseModal}/>;
    } else if (this.state.modal === "Puppy Form"){
      component = <PuppyForm close={this.handleCloseModal}/>;
    }
    let modal;

    if (this.state.modalIsOpen) {
      modal = (
        <Modal isOpen={this.state.modalIsOpen} onRequestClose={this.handleCloseModal} style={ModalStyles} className='modal'>
          {component}
        </Modal>
      );
    }

    return (
      <div className='app'>
        <header>
          <button onClick={this._handleRoot} className='logo'>PuppiesBnb</button>
          <SearchBar />
          { this.greeting() }
        </header>
        {modal}

      </div>
    );
  }

});

module.exports = NavBar;
