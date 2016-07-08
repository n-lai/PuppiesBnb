const React = require('react');

const FeaturedPlaces = React.createClass({
  _handleClick() {
    this.props.action(this.props.city);
  },

  render() {
    const style = {
      backgroundImage: 'url(' + this.props.imgUrl + ')',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }

    return (
      <div className='featured-cities' style={style} onClick={this._handleClick}>
        <div className='featured-cities-header'>
          <h1>{this.props.city}</h1>
        </div>
      </div>
    );
  }
});

module.exports = FeaturedPlaces;
