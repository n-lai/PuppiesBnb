const BookingApiUtil = {
  fetchUserBookings(id, cb) {
    $.ajax({
      method: 'GET',
      url: '/api/bookings-renter',
      data: { renter_id: id },
      success(response) {
        cb(response);
      }
    });
  },

  createBooking(booking, cb, error) {
    $.ajax({
      method: 'POST',
      url: '/api/bookings',
      data: { booking },
      success(response) {
        cb(response);
      },
      error(xhr) {
        const errors = xhr.responseJSON;
        error('booking', errors);
      }
    });
  },

  deleteBooking(id, cb) {
    $.ajax({
      method: 'DELETE',
      url: '/api/bookings/' + id,
      success(response) {
        cb(response);
      }
    });
  }
};

module.exports = BookingApiUtil;
