const React = require('react');
const HashHistory = require('react-router').hashHistory

const PuppyListingItem = React.createClass({
  redirectToPuppy() {
    const puppyId = this.props.puppy.id;
    HashHistory.push('/api/puppies/' + puppyId);
  },

  render() {
    const style = {
      backgroundImage: 'url(' + this.props.puppy.image_url + ')',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    };

    return (
      <div className='puppy-listing-item'>
        <div className='puppy-listing-img-container' style={style} onClick={this.redirectToPuppy}>
        </div>
        <div className='puppy-listing-info'>
          <h1>{this.props.puppy.name}</h1>
          <div className='puppy-listing-info-details'>
            <p>Breed: {this.props.puppy.breed.replace(/_/g, " ")}</p>
            <p>Temperament: {this.props.puppy.temperament}</p>
            <button
              onClick={this.props.removePuppy.bind(null, this.props.puppy)}
              id='remove-puppy-button'
              >Remove Puppy</button>
          </div>
        </div>
      </div>

    );
  }
});

module.exports = PuppyListingItem;
