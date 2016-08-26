const React = require('react');
const ReactDOM = require('react-dom');
const PuppyStore = require('../stores/puppy_store');
const PuppyActions = require('../actions/puppy_actions');
const FilterStore = require('../stores/filter_store');
const hashHistory = require('react-router').hashHistory;

const PuppyMap = React.createClass({

  componentDidMount(){
    this.infowindow = new google.maps.InfoWindow();
    this.markers = [];

    const mapDOMNode = ReactDOM.findDOMNode(this.refs.map);
    const mapOptions = {
      center: { lat: this.props.lat, lng: this.props.lng },
      zoom: 11
    };
    this.map = new google.maps.Map(mapDOMNode, mapOptions);
    this.registerListeners();
    this._onChange();
  },

  componentDidUpdate() {
    this._onChange();
  },

  componentWillUnmount() {
    this.puppyListener.remove();
    this.filterListener.remove();
    this.idleListener.remove();
  },

  updateParams() {
    const latLng = this.map.getBounds();
    const northEast = latLng.getNorthEast();
    const southWest = latLng.getSouthWest();

    const bounds = {
      'northEast': {'lat': northEast.lat(), 'lng': northEast.lng() },
      'southWest': {'lat': southWest.lat(), 'lng': southWest.lng() }
    }

    const params = FilterStore.params();
    params.bounds = bounds;

    PuppyActions.fetchAllPuppies(params, bounds);
    this._onChange();
  },

  registerListeners() {
    const that = this;
    this.idleListener = google.maps.event.addListener(this.map, 'idle', this.updateParams);
    this.puppyListener = PuppyStore.addListener(this._onChange);
    this.filterListener = FilterStore.addListener(this.updateParams);

    google.maps.event.addListener(this.map, 'click', function(event) {
      const location = event.latLng;
      const lat = location.lat();
      const lng = location.lng();
      const coords = { lat: lat, lng: lng }

    });

    window.autocomplete.addListener('place_changed', function() {
      var place = window.autocomplete.getPlace().geometry.location;
      that.map.setCenter(place);
      that.map.setZoom(12);
    });
  },

  _onChange() {
    const removeMarkers = [];

    const currentPuppyIds = this.markers.map(marker => marker.puppyId);
    const newPuppyIds = PuppyStore.all().map(puppy => puppy.id);

    this.markers.forEach(marker => {
      if (!newPuppyIds.includes(marker.puppyId)) {
        removeMarkers.push(marker);
      }
    });

    PuppyStore.all().forEach(puppy => {
      if (!currentPuppyIds.includes(puppy.id)) {
        const location = { lat: puppy['lat'], lng: puppy['lng'] }
        this.addMarker(location, this.map, puppy.id);
      }
    });

    removeMarkers.forEach(this.removeMarker);
  },

  removeMarker(marker) {
    const idx = this.markers.indexOf(marker);
    this.markers[idx].setMap(null);
    this.markers.splice(idx, 1);
  },

  addMarker(location, map, puppyId) {
    const marker = new google.maps.Marker({
      position: location,
      map: map,
      puppyId: puppyId
    });

    const puppy = PuppyStore.find(puppyId);

    const content = `<img id='map-pic' src='${puppy.image_url}' class='map-picture'/>` +
                    `<div class='infowindow-detail'>
                        <h3 class='map-puppy-name'>${puppy.name}</h3>
                        <h3>$${puppy.price} / day</h3>
                      </div>`

    marker.addListener('click', () => {
      const markerPuppy = marker.puppyId;
      this.infowindow.setContent(content);
      this.infowindow.open(map, marker);

      google.maps.event.addDomListener(document.getElementById('map-pic'), 'click', () => {
        hashHistory.push('/api/puppies/' + markerPuppy)
      })

    });

    this.markers.push(marker);
  },



  render() {
    return (
      <div className='map' ref='map'>

      </div>
    );
  }
});

module.exports = PuppyMap;
