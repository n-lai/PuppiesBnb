const AppDispatcher = require('../dispatcher/dispatcher');
const BookingConstants = require('../constants/booking_constants');
const BookingApiUtil = require('../util/booking_api_util');

const BookingActions = {
  fetchAllBookings(id) {
    BookingApiUtil.fetchUserBookings(id, this.receiveBookings);
  },

  receiveBookings(bookings) {
    AppDispatcher.dispatch({
      actionType: BookingConstants.BOOKINGS_RECEIVED,
      bookings: bookings
    });
  },

  deleteBooking(id) {
    BookingApiUtil.deleteBooking(id, this.removeBooking);
  },

  removeBooking(booking) {
    AppDispatcher.dispatch({
      actionType: BookingConstants.BOOKING_REMOVED,
      booking: booking
    });
  }

};

module.exports = BookingActions;
