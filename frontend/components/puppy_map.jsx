const React = require('react');
const ReactDOM = require('react-dom');
const PuppyStore = require('../stores/puppy_store');
const FilterStore = require('../stores/filter_store');
const hashHistory = require('react-router').hashHistory;

const PuppyMap = React.createClass({
  getInitialState() {
      return { markers: [] };
  },

  componentDidMount(){
    this.puppyListener = PuppyStore.addListener(this._onChange);
    this.infowindow = new google.maps.InfoWindow();

    const mapDOMNode = ReactDOM.findDOMNode(this.refs.map);
    const mapOptions = {
      center: { lat: 37.7758, lng: -122.435 }, // this is SF
      zoom: 10
    };
    this.map = new google.maps.Map(mapDOMNode, mapOptions);
    this.registerListeners();
    this._onChange();

    this.idleListener = false;
    this.filterListener = FilterStore.addListener(this.updateParams);
  },

  componentWillUnmount() {
    this.puppyListener.remove();
    this.filterListener.remove();
    this.idleListener.remove();
  },

  componentDidUpdate() {
    this._onChange();
  },

  updateParams() {
    // if (!this.idleListenerWasSet) {
    //   this.idleListener = true;
    //   return;
    // }

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
  },

  registerListeners() {
    const that = this;
    this.idleListener = google.maps.event.addListener(this.map, 'idle', this.updateParams);

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

    const content = `<img id='map-pic' src=${puppy.image_url} class='map-picture'/>` +
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
