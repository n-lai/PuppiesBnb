const React = require('react');

const Review = React.createClass({
  render() {
    return (
      <div>
        <ul>
          <li>Rating: {this.props.rating}</li>
          <li>{this.props.description}</li>
        </ul>
      </div>
    )
  }
});

module.exports = Review;
