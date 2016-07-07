const React = require('react');
const SessionStore = require('../stores/session_store');
const PuppyActions = require('../actions/puppy_actions');

const ReviewForm = React.createClass({
  getInitialState() {
    return ({ description: "", rating: 'Please select a rating' });
  },

  componentDidMount() {
    this.puppyListener = PuppyStore.addListener(this._clearOnSuccess);
  },

  componentWillUnmount() {
    this.puppyListener.remove();
  },

  _clearOnSuccess() {
    this.setState({ description: "", rating: 'Please select a rating' });
    document.getElementById('select-form').removeAttribute('selected');
  },

  update(property) {
    return (e) => this.setState({ [property]: e.target.value });
  },

  _handleSubmit(e) {
    e.preventDefault();

    const reviewData = {
      description: this.state.description,
      rating: parseInt(this.state.rating),
      puppy_id: this.props.puppy.id,
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
            className='rating-dropdown'
            id='select-form'>
            <option disabled value='Please select a rating'>Please select a rating</option>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
          </select>
          <br></br>
          <textarea
            className='review-form-input'
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
