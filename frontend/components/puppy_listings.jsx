const React = require('react');
const SessionStore = require('../stores/session_store');
const PuppyIndexItem = require('./puppy_index_item');
const PuppyActions = require('../actions/puppy_actions');
const PuppyStore = require('../stores/puppy_store');
const PuppyForm = require ('./puppy_form');
const Modal = require('react-modal');
const ModalStyles = require('../styles/modal_styles');



const PuppyListings = React.createClass({
  getInitialState() {
    Modal.setAppElement('body');
    return { puppies: {}, currentUser: null, modalIsOpen: false };
  },

  handleOpenModal() {
    this.setState({ modalIsOpen: true });
  },

  handleCloseModal() {
    this.setState({ modalIsOpen: false });
  },


  componentDidMount() {
    this.puppyListener = PuppyStore.addListener(this.getPuppies);
    this.userListener = SessionStore.addListener(this.getUserPuppies);
    this.setState({ currentUser: SessionStore.currentUser() });
  },

  componentWillUnmount() {
    this.puppyListener.remove();
  },

  getPuppies() {
    this.setState({ puppies: PuppyStore.all() });
  },

  getUserPuppies() {
    PuppyActions.fetchUserPuppies(this.state.currentUser.id);
  },

  render() {
    let modal;

    if (this.state.modalIsOpen) {
      modal = (
        <Modal isOpen={this.state.modalIsOpen} onRequestClose={this.handleCloseModal} style={ModalStyles} className='modal'>
          <PuppyForm />
        </Modal>
      );
    }

    return (
      <div>
        <button
          onClick={this.handleOpenModal}
          id='puppy-form'
          >Add a Puppy</button>
        {modal}
      </div>
    );
  }
});

module.exports = PuppyListings;
