const React = require('react');
const HashHistory = require('react-router').hashHistory

const PuppyListingItem = React.createClass({
  _removePuppy(e) {
    e.stopPropagation();

    this.props.removePuppy(this.props.puppy);
  },

  _editPuppy(e) {
    e.stopPropagation();

    this.props.editPuppy();
  },

  _redirectToPuppy() {
    const puppyId = this.props.puppy.id;
    HashHistory.push('/api/puppies/' + puppyId);
  },

  render() {

    return (
      <div className='puppy-listing-item'>
        <div className='listing-pic-wrapper' onClick={this._redirectToPuppy}>
          <img className='listing-pic' width="500px" src={this.props.puppy.image_url} />

          <div className='puppy-listing-info'>
            <div className='listing-text-container'>
              <h1 className='listing-puppy-name'>{this.props.puppy.name}</h1>
              <div className='listing-info'>
                Breed: {this.props.puppy.breed.replace(/_/g, " ")} <br/>
                Temperament: {this.props.puppy.temperament} <br/>
                <button
                  onClick={this._editPuppy}
                  className='edit-puppy-button'
                  >Edit Puppy</button>
                <button
                  onClick={this._removePuppy}
                  className='remove-puppy-button'
                  >Remove Puppy</button>
              </div>
            </div>
          </div>

        </div>

      </div>

    );
  }
});

module.exports = PuppyListingItem;
