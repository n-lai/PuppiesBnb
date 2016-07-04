const React = require('react');
const hashHistory = require('react-router').hashHistory;

const SearchBar = React.createClass({
  getInitialState() {
    return { lat: 37.7758, lng: -122.435 }
  },

  componentDidMount() {
    const that = this;
    const input = document.getElementById('searchTextField');
    window.autocomplete = new google.maps.places.Autocomplete(input);
    this.autocompleteListener = google.maps.event.addListener(window.autocomplete, 'place_changed', () => {
      const address = window.autocomplete.getPlace();
      that.setState({ lat: address.geometry.location.lat(), lng: address.geometry.location.lng()});
      hashHistory.push({
        pathname: '/api/puppies',
        query: { lat: that.state.lat, lng: that.state.lng }
      });
      document.getElementById('searchTextField').value = '';
    });
  },

  componentWillUnmount() {
    this.autocompleteListener.remove();
  },

  _handleSubmit(e) {
    e.preventDefault();
  },

  render() {
    return (
      <div className='search-bar-container'>
        <form onSubmit={this._handleSubmit}>
          <input
            ref='searchField'
            id='searchTextField'
            type='text'
            placeholder='Search By Address'
            className='search-location-bar'
          />
        </form>

      </div>
    )
  }
});

module.exports = SearchBar;
