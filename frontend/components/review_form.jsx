const React = require('react');
const SessionStore = require('../stores/session_store');
const PuppyActions = require('../actions/puppy_actions');

const ReviewForm = React.createClass({
  getInitialState() {
    return ({ description: "", rating: null });
  },

  update(property) {
    return (e) => this.setState({ [property]: e.target.value });
  },

  _handleSubmit(e) {
    e.preventDefault();

    const user = SessionStore.currentUser();
    debugger
    const reviewData = {
      description: this.state.description,
      rating: parseInt(this.state.rating),
      puppy_id: this.props.puppy.id,
      user_id: user.id
    };

    PuppyActions.createReview(reviewData);
  },

  render() {
    return (
      <div className='review-form'>
        <h1 id='review-h1'>submit a review:</h1>
        <form onSubmit={this._handleSubmit}>
          <select
            value={this.state.rating}
            onChange={this.update('rating')}
            className='rating-dropdown'>
            <option disabled selected>Select Your Rating</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
          <br></br>
          <textarea
            className='form-input'
            placeholder='Write your review here'
            value={this.state.description}
            onChange={this.update('description')}
          />
          <br></br>
          <button className='review-button' type='submit'>Submit Review</button>
        </form>
      </div>
    )
  }
});

module.exports = ReviewForm;
