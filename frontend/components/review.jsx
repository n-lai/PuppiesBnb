const React = require('react');

const Review = React.createClass({
  render() {
    return (
      <div className='review'>
        <ul>
          <li className='rating'>Rating: {this.props.review.rating}</li>
          <li className='description'>{this.props.review.description}</li>
        </ul>
        <hr/>
      </div>
    )
  }
});

module.exports = Review;
