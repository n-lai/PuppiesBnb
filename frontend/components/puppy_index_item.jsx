const React = require('react');
const hashHistory = require('react-router').hashHistory;

const PuppyIndexItem = React.createClass({
  _handleClick() {
    const puppyId = this.props.puppy.id;
  },

  render() {
    const puppy = this.props.puppy;
    return (
      <div className='puppy-index-item' onClick={this._handleClick} key={puppy.id}>
        <div className='img-container'>
          <div className='puppy-index-pic'><img src={puppy.image_url}/></div>
        </div>
        <div className='caption'>
          <span className='puppy-index-info'>{puppy.name}</span>
          <span className='puppy-index-info'>{puppy.breed}</span>
          <span className='puppy-index-info'>${puppy.price} per night</span>
        </div>
      </div>
    );
  }
});

module.exports = PuppyIndexItem;
