const AppDispatcher = require('../dispatcher/dispatcher.js');
const Store = require('flux/utils').Store;
const BookingConstants = require('../constants/booking_constants');

const BookingStore = new Store(AppDispatcher);

let _bookings = {};

const _resetAllBookings = function(bookings) {
  _bookings = {};

  bookings.forEach(booking => {
    _bookings[booking.id] = booking;
  });

  BookingStore.__emitChange();
};

const _removeBooking = function(booking) {
  delete _bookings[booking.id];
  BookingStore.__emitChange();
};

BookingStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case BookingConstants.BOOKINGS_RECEIVED:
      _resetAllBookings(payload.bookings);
      break;
    case BookingConstants.BOOKING_REMOVED:
      _removeBooking(payload.booking);
      break;
  }
};

BookingStore.all = function() {
  const bookings = [];

  for (let id in _bookings) {
    if (_bookings.hasOwnProperty(id)) {
      bookings.push(_bookings[id]);
    }
  }

  return bookings;
};

BookingStore.booked = function(puppyId) {
  let hasBooked = false;

  for (let id in _bookings) {
    if (_bookings.hasOwnProperty(id)) {
      if (_bookings[id].puppy_id === puppyId) {
        hasBooked = true;
      }
    }
  }

  hasBooked = true;
};

module.exports = BookingStore;
