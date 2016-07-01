const React = require('react');
const ReactDOM = require('react-dom');
const PuppyStore = require('../stores/puppy_store');

const PuppyMap = React.createClass({
  getInitialState() {
      return { markers: [] };
  },

  componentDidMount(){
    this.puppyListener = PuppyStore.addListener(this._onChange);
    this.infowindow = new google.maps.InfoWindow();

    const mapDOMNode = ReactDOM.findDOMNode(this.refs.map);
    const mapOptions = {
      center: {lat: 37.7758, lng: -122.435}, // this is SF
      zoom: 10
    };
    this.map = new google.maps.Map(mapDOMNode, mapOptions);
    this.listenForMove();
    this._onChange();
  },

  componentWillUnmount() {
    this.puppyListener.remove();
  },

  componentDidUpdate() {
    this._onChange();
  },

  listenForMove() {
    const that = this;
    google.maps.event.addListener(this.map, 'idle', () => {
      const latLng = this.map.getBounds();
      const northEast = latLng.getNorthEast();
      const southWest = latLng.getSouthWest();

      const bounds = {
        'northEast': {'lat': northEast.lat(), 'lng': northEast.lng() },
        'southWest': {'lat': southWest.lat(), 'lng': southWest.lng() }
      }
      PuppyActions.fetchAllPuppies(bounds);
    });

    google.maps.event.addListener(this.map, 'click', function(event) {
      const location = event.latLng;
      const lat = location.lat();
      const lng = location.lng();
      const coords = { lat: lat, lng: lng }

      that._handleClick(coords);
    });
  },

  _onChange() {
    const currentPuppyIds = this.state.markers.map(marker => marker.puppyId);
    const newPuppyIds = PuppyStore.all().map(puppy => puppy.id);
    this.state.markers.forEach(marker => {
      if (!newPuppyIds.includes(marker.puppyId)) {
        this.removeMarker(marker);
      }
    });

    PuppyStore.all().forEach(puppy => {
      if (!currentPuppyIds.includes(puppy.id)) {
        const location = { lat: puppy['lat'], lng: puppy['lng'] }
        this.addMarker(location, this.map, puppy.id);
      }
    });
  },

  _handleClick(coords) {
  },

  removeMarker(marker) {
    const idx = this.state.markers.indexOf(marker);
    this.state.markers[idx].setMap(null);
    this.state.markers.splice(idx, 1);
  },

  addMarker(location, map, puppyId) {
    const marker = new google.maps.Marker({
      position: location,
      map: map,
      puppyId: puppyId
    });

    const puppy = PuppyStore.find(puppyId);

    const content = `<img src=${puppy.image_url} class='map-picture'/>` +
                    `<h3>${puppy.name}</h3>`

    marker.addListener('click', () => {
      this.infowindow.setContent(content);
      this.infowindow.open(map, marker);
    });

    this.state.markers.push(marker);
  },

  render() {
    return (
      <div className='map' ref='map'>

      </div>
    );
  }
});

module.exports = PuppyMap;
