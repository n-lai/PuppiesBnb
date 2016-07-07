const React = require('react');
const PuppyStore = require('../stores/puppy_store');
const PuppyActions = require('../actions/puppy_actions');
const BookingForm = require('./booking_form');
const ReviewForm = require('./review_form');
const BookingStore = require('../stores/booking_store');
const SessionStore = require('../stores/session_store');

const PuppyDetail = React.createClass({
  getInitialState() {
    const puppyId = parseInt(this.props.params.puppyId);
    const potentialPuppy = PuppyStore.find(puppyId) || {};
    return { puppy: potentialPuppy, user: SessionStore.currentUser() }
  },

  componentDidMount() {
    this.puppyListener = PuppyStore.addListener(this._onChange);
    this.userListener = SessionStore.addListener(this._onLogin);
    this.bookingListener = BookingStore.addListener(this._onBookingSuccess);
    PuppyActions.fetchPuppy(parseInt(this.props.params.puppyId));
  },

  componentWillReceiveProps(newProps) {
    PuppyActions.fetchPuppy(parseInt(newProps.params.puppyId));
  },

  componentWillUnmount() {
    this.puppyListener.remove();
    this.userListener.remove();
    this.bookingListener.remove();
  },

  _onChange() {
    const puppyId = parseInt(this.props.params.puppyId);
    const potentialPuppy = PuppyStore.find(puppyId) || {};
    this.setState({ puppy: potentialPuppy });
  },

  _onLogin() {
    this.setState({ user: SessionStore.currentUser() });
  },

  _onBookingSuccess() {
    console.log('success');
  },

  render() {
    const puppy = this.state.puppy;
    if (puppy === undefined ) { return <div></div>; }
    return(
      <div className='puppy-detail-container'>
        <div className='puppy-image-container'>
          <img src={puppy.image_url} />
          <div className='booking-form-container'>
            <BookingForm puppy={this.state.puppy}/>
          </div>
        </div>

        <div className='puppy-detail-bottom'>
          <div className='puppy-details-header'>
            <div className='puppy-basic-info'>
              <h2 className='puppy-detail-name'>{puppy.name}</h2>
              <h3 className='puppy-detail-breed'>{puppy.breed}</h3>
            </div>
          </div>

          <div className='puppy-details'>
            {['temperament', 'description' ].map((attr) => {
              return (
                <div>
                  <h1>{attr}</h1>
                  <span key={attr}>{puppy[attr]}</span>
                  <hr/>
                </div>
              );
            })}
            <h1>reviews </h1>

          </div>

          <div className='review-form-container'>
            <ReviewForm puppy={this.state.puppy} />
          </div>
        </div>

      </div>
    );
  }

});

module.exports = PuppyDetail;
