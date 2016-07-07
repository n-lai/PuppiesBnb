const React = require('react');
const hashHistory = require('react-router').hashHistory;

const PuppyIndexItem = React.createClass({
  _handleClick() {
    const puppyId = this.props.puppy.id;
    hashHistory.push('/api/puppies/' + puppyId);
  },

  render() {
    const puppy = this.props.puppy;
    return (
      <div className='puppy-index-item' onClick={this._handleClick} key={puppy.id}>
        <div className='img-container'>
          <div className='puppy-index-pic'><img src={puppy.image_url}/></div>
        </div>
        <div className='caption'>
          <span className='puppy-index-info' id='price-overlay'>${puppy.price} per day</span>
          <div className='puppy-index-details'>
            <span className='puppy-index-name'>{puppy.name}</span>
            <span className='puppy-index-breed'>{puppy.breed.replace(/_/g, " ")}</span>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = PuppyIndexItem;
