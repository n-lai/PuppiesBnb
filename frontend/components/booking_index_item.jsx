const React = require('react');
const HashHistory = require('react-router').hashHistory;
const BookingActions = require('../actions/booking_actions');

const BookingIndexItem = React.createClass({
  render() {
    const startDate = new Date(this.props.booking.start_date);
    const endDate = new Date(this.props.booking.end_date);

    return (
      <div className='booking-listing-item'>
        <div className="booking-pic-wrapper">
          <img className='booking-pic' onClick={this._redirectToPuppy} width="500px" src={this.props.booking.puppy.image_url} />

          <div className='booking-listing-info'>
            <div className='booking-text-container'>
              <h1 className="booking-puppy-name">{this.props.booking.puppy.name}</h1>
              <div className="booking-dates">
                Start Date: {(startDate.getMonth()) + '/' + startDate.getDate() + '/' + startDate.getFullYear()} <br/>
                End Date: {(endDate.getMonth()) + '/' + endDate.getDate() + '/' + endDate.getFullYear()} <br/>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
});

module.exports = BookingIndexItem;
