const React = require('react');
const Masonry = require('react-masonry-component');

const SessionStore = require('../stores/session_store');
const HashHistory = require('react-router').hashHistory;
const PuppyIndexItem = require('./puppy_index_item');
const PuppyActions = require('../actions/puppy_actions');
const PuppyStore = require('../stores/puppy_store');
const PuppyForm = require ('./puppy_form');
const Modal = require('react-modal');
const ModalStyles = require('../styles/modal_styles');

const PuppyListingItem = require('./puppy_listing_item');

const masonryOptions = {
  isFitWidth: true,
  gutter: 10
}

const PuppyListings = React.createClass({
  getInitialState() {
    Modal.setAppElement('body');
    return { puppies: {}, currentUser: SessionStore.currentUser(), modalIsOpen: false };
  },

  handleOpenModal() {
    this.setState({ modalIsOpen: true });
  },

  handleCloseModal() {
    this.setState({ modalIsOpen: false });
    document.location.reload();
    },


  componentDidMount() {
    this.puppyListener = PuppyStore.addListener(this.getPuppies);
    this.getUserPuppies();
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

  removePuppy(puppy) {
    PuppyActions.deletePuppy(puppy.id);
  },

  render() {

    const puppies = this.state.puppies;

    if (Object.keys(puppies).length === 0 && puppies.constructor === Object) {
      return <div>No Puppies Here</div>;
    }

    let modal;

    if (this.state.modalIsOpen) {
      modal = (
        <Modal isOpen={this.state.modalIsOpen} onRequestClose={this.handleCloseModal} style={ModalStyles} className='modal'>
          <PuppyForm close={this.handleCloseModal} />
        </Modal>
      );
    }

    let puppyItems = this.state.puppies.map(puppy => {
      return (
        <li><PuppyListingItem key={puppy.id} puppy={puppy} removePuppy={this.removePuppy}/></li>
      );
    })

    if (this.state.puppies.length > 0) {
      return(
        <div className='user-bookings'>
          <div className='sidebar'>
            <button
              onClick={this.handleOpenModal}
              id='puppy-form'
              >Add a Puppy</button>
            {modal}
          </div>

          <div className='main-content'>
            <h1>Your Puppies</h1>
            <hr/>
            <Masonry className="user-bookings-index" elementType="ul" options={masonryOptions}>
              {puppyItems}
            </Masonry>
          </div>
        </div>
      )
    } else {
      return (
        <div className='user-bookings'>
          <div className='sidebar'>
            <button
              onClick={this.handleOpenModal}
              id='puppy-form'
              >Add a Puppy</button>
            {modal}
          </div>
          <div className='main-content'>
            <h1>Your Puppies</h1>
            <hr/>
            <ul className='user-bookings-index'>
              <div className='no-bookings'>
                You have no puppies. Add one today!
              </div>
            </ul>
        </div>

        </div>
      );
    }


  }
});
module.exports = PuppyListings;
