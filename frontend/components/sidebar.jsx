const React = require('react');
const HashHistory = require('react-router').hashHistory;


const Sidebar = React.createClass({
  getInitialState() {
    Modal.setAppElement('body');
    return { currentUser: SessionStore.currentUser(), modalIsOpen: false };
  },


  handleOpenModal() {
    this.setState({ modalIsOpen: true });
  },

  handleCloseModal() {
    this.setState({ modalIsOpen: false });
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
      <div className='sidebar'>
        <button onClick={this.handleOpenModal}
          id='puppy-form'
          >Add a Puppy</button>

        <button onClick={this.redirectToBookings}
          >Your Puppy Bookings</button>

        <button onClick={this.redirectToUserPuppies}
          >Your Puppies</button>
        {modal}
      </div>

    );
  }
});

module.exports = Sidebar;
