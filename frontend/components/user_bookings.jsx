const React = require('react');
const SessionStore = require('../stores/session_store');
const BookingStore = require('../stores/booking_store');
const BookingActions = require('../actions/booking_actions');

const BookingIndexItem = require('./booking_index_item');

const UserBookings = React.createClass({
  getInitialState() {
    return { bookings: [] };
  },

  componentDidMount() {
    this.bookingsListener = BookingStore.addListener(this._getBookings);
    BookingActions.fetchAllBookings(SessionStore.currentUser().id);
  },

  componentWillUnmount() {
    this.bookingsListener.remove();
  },

  _getBookings() {
    this.setState({ bookings: BookingStore.all() });
  },

  render() {
    if (this.state.bookings.length > 0) {
      return(
        <div className='user-bookings'>
          <div className='sidebar'>

          </div>

          <div className='main-content'>
            <h1>Your Bookings</h1>
            <hr/>
            <ul className='user-bookings-index'>
              {this.state.bookings.map(booking => {
                return (
                  <BookingIndexItem key={booking.id} booking={booking} />
                );
              })}
            </ul>
          </div>
        </div>
      )
    } else {
      return (
        <div className='user-bookings'>
          <div className='sidebar'>

          </div>
          <div className='main-content'>
            <h1>Your Bookings</h1>
            <hr/>
            <ul className='user-bookings-index'>
              <div className='no-bookings'>
                You have no bookings with any puppies. Check out Amsterdam or Sydney to rent some awesome puppies!
              </div>
            </ul>
        </div>

        </div>
      );
    }

  }
});

module.exports = UserBookings;
