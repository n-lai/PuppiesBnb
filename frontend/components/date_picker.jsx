const React = require('react');
const Moment = require('moment');
const DatePicker = require('react-datepicker');

const Dates = React.createClass({
  render() {
    return (
      <DatePicker
        selected={this.props.date}
        onChange={this.props.action}
        className='date-dropdown'
        placeholderText={this.props.placeholder}
      />
    );
  }
});

module.exports = Dates;
