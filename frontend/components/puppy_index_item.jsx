const React = require('react');

const PuppyIndexItem = React.createClass({
  render() {
    <div className='bench-index-item'>
      {this.props.puppy.name}
    </div>
  }
});

module.exports = PuppyIndexItem;
