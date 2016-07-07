const React = require('react');
const DatePicker = require('./date_picker.jsx');
const moment = require('moment');
const HashHistory = require('react-router').hashHistory;

const PuppyStore = require('../stores/puppy_store');
const SessionStore = require('../stores/session_store');
const BookingStore = require('../stores/booking_store');

const BookingActions = require('../actions/booking_actions');

const BookingForm = React.createClass({
  getInitialState() {
    return { startDate: null, endDate: null, formatSubmit: ['open', 'Book This Puppy'] };
  },

  componentWillReceiveProps(props) {
    this.setState( { bookings: this.props.bookings } );
    if (this.userHasBooked()) {
      this.disableForm();
    } else {
      this.enableForm();
    }
  },

  userHasBooked() {
    return (BookingStore.booked(this.props.puppy.id) && UserStore.currentUser());
  },

  enableForm() {
    this.setState({ formatSubmit: ['open', 'Book This Puppy'] });
    document.getElementById('booking-submit-button').disabled = false;
  },

  disableForm() {
    this.setState({formatSubmit: ['booked', 'Booked!']});
    document.getElementById('booking-submit-button').disabled = true;
  },

  redirectOnSuccess() {
    this.setState({ formatSubmit: ['booked', 'Booked!'] });
    document.getElementById('booking-submit-button').disabled = true;
    alert('Congrats, you have booked this puppy!')
  },

  updateStartDate(date) {
    const currentEnd = this.state.endDate;

    if (currentEnd && date._d > currentEnd._d) {
      alert('Start date cannot come after end date');
    } else {
      this.setState({ startDate: date });
    }
  },

  updateEndDate(date) {
    const currentStart = this.state.startDate;

    if (currentStart && date._d < currentStart._d) {
      alert('End date cannot occur before start date');
    } else {
      this.setState({ endDate: date });
    }

  },

  _handleSubmit(e) {
    e.preventDefault();

    const user = SessionStore.currentUser();

    if (Object.keys(user).length === 0 && user.constructor === Object) {
      alert('You must be logged in to book a puppy');
      return;
    } else if (!this.state.startDate || !this.state.endDate) {
      alert('Please select valid starting and ending dates.');
    } else {
      BookingActions.createBooking({
        renter_id: user.id,
        puppy_id: this.props.puppy.id,
        start_date: this.state.startDate._d,
        end_date: this.state.endDate._d
      }, this.redirectOnSuccess);
    }
  },

  render() {
    return (
      <div>
        <form className='booking-form' onSubmit={this._handleSubmit}>
          <h1>$ {this.props.puppy.price} per day</h1>
          <div className='booking-form-date-container'>
            <div className='booking-form-dates'>
              <p>Start Date</p>
              <DatePicker
                action={this.updateStartDate}
                date={this.state.startDate}
                placeholder='mm/dd/yyyy'
              />
            </div>

            <div className='booking-form-dates'>
              <p>End Date</p>
              <DatePicker
                action={this.updateEndDate}
                date={this.state.endDate}
                placeholder='mm/dd/yyyy'
              />
            </div>
          </div>
          <button
            id='booking-submit-button'
            type='submit'
            className={ 'booking-form-' + this.state.formatSubmit[0] }
          >{this.state.formatSubmit[1]}</button>
        </form>
      </div>
    );
  }
});

module.exports = BookingForm;
