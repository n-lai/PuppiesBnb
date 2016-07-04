const React = require('react');

const SearchBar = React.createClass({
  getInitialState() {
    return { lat: 37.7758, lng: -122.435 }
  },

  componentDidMount() {
    const input = document.getElementById('searchTextField');
    const autocomplete = new google.maps.places.Autocomplete(input);
    this.autocompleteListener = google.maps.event.addListener(autocomplete, 'place_changed', () => {
      const address = autocomplete.getPlace();
      that.setState({ lat: address.geometry.location.lat(), lng: address.geometry.location.lng()});
    });
  },

  componentDidUnmount() {
    this.autocompleteListener.remove();
  },

  render() {
    return (
      <div className='search-bar-container'>
        <input
          ref='searchField'
          id='searchTextField'
          type='text'
          placeholder='Search By Address'
          className='search-location-bar'
        />

      </div>
    )
  }
});

module.exports = SearchBar;
