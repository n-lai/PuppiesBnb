const React = require('react');
const hashHistory = require('react-router').hashHistory;
const FilterStore = require('../stores/filter_store');

const SearchBar = React.createClass({
  getInitialState() {
    return { text: 'Search By Location'};
  },

  componentDidMount() {
    const input = document.getElementById('searchTextField');
    window.autocomplete = new google.maps.places.Autocomplete(input);
    this.autocompleteListener = google.maps.event.addListener(window.autocomplete, 'place_changed', this._handleSubmit)
  },

  componentWillUnmount() {
    this.autocompleteListener.remove();
  },

  _handleSubmit() {
    FilterStore.resetFilters();
    const address = window.autocomplete.getPlace();

    if (!address) {
      return;
    }

    const coords = {
      lat: address.geometry.location.lat(),
      lng: address.geometry.location.lng()
    }

    hashHistory.push({
      pathname: '/api/puppies',
      query: coords
    });
  },

  render() {
    return (
      <div className='search-bar-container'>
        <div className='search-icon'>
        </div>
        <input
          ref='searchField'
          id='searchTextField'
          type='text'
          placeholder={this.state.text}
          className='search-location-bar'
        />

      </div>
    )
  }
});

module.exports = SearchBar;
