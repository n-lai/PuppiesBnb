const React = require('react');
const HashHistory = require('react-router').hashHistory;
const Link = require('react-router').Link;
const PuppyStore = require('../stores/puppy_store');
const SessionStore = require('../stores/session_store')
const ErrorStore = require('../stores/error_store');
const PuppyActions = require('../actions/puppy_actions');
const ErrorActions = require('../actions/error_actions');
const hashHistory = require('react-router').hashHistory;
const UploadButton = require('./upload_button');
const SearchBar = require('./search_bar');

const PuppyForm = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState() {
    return { name: "", breed: "", temperament: "", description: "", lat: 0, lng: 0, price: "", owner_id: SessionStore.currentUser().id, image_url: "", buttonText: ['blank', 'Upload Puppy Picture']}
  },

  componentDidMount() {
    const that = this;
    // this.puppyListener = PuppyStore.addListener(this.redirectIfPuppyMade);
    this.errorListener = ErrorStore.addListener(this.forceUpdate.bind(this));
    this.geocoder = new google.maps.Geocoder();
    const input = document.getElementById('puppyTextField');
    const autocomplete = new google.maps.places.Autocomplete(input);
    this.autocompleteListener = google.maps.event.addListener(autocomplete, 'place_changed', () => {
      const address = autocomplete.getPlace();
      that.setState({ lat: address.geometry.location.lat(), lng: address.geometry.location.lng()})
    });

  },

  componentWillUnmount() {
    // this.puppyListener.remove();
    this.errorListener.remove();
    this.autocompleteListener.remove();
  },

  redirectIfPuppyMade() {
    this.props.close();
    HashHistory.push('/api/user/puppies');
  },

  fieldErrors(field) {
    const errors = ErrorStore.formErrors("puppy");
    if (!errors[field]) {return; }

    const messages = errors[field].map( (errorMsg, i) => {
      return <li key={ i } className='errors'>{ errorMsg }</li>;
    });

    return <ul>{ messages }</ul>;
  },

  update(property) {
    return (e) => this.setState({ [property]: e.target.value });
  },

  updateUrl(url) {
    this.setState({ image_url: url, buttonText: ['success', 'Picture successfully uploaded!'] });
  },

  _handleSubmit(e) {
    e.preventDefault();

    const puppyData = {
      name: this.state.name,
      breed: this.state.breed,
      lat: this.state.lat,
      lng: this.state.lng,
      description: this.state.description,
      temperament: this.state.temperament,
      owner_id: this.state.owner_id,
      price: parseInt(this.state.price),
      image_url: this.state.image_url
    };

    PuppyActions.createPuppy(puppyData, this.redirectIfPuppyMade);
    ErrorActions.clearErrors();
  },

  render() {
    return (
      <div>
        { this.fieldErrors('base') }
        <form onSubmit={this._handleSubmit} className='form'>
          <input
            type='text'
            placeholder='Name'
            value={this.state.name}
            onChange={this.update("name")}
            className='puppy-form-input'
          />

          <input
            type='text'
            placeholder='Breed'
            value={this.state.breed}
            onChange={this.update("breed")}
            className='puppy-form-input'
          />

          <input
            ref='searchField'
            id='puppyTextField'
            type='text'
            placeholder='Enter an Address'
            className='puppy-form-input'
          />

          <input
            type='text'
            placeholder='Temperament'
            value={this.state.temperament}
            onChange={this.update("temperament")}
            className='puppy-form-input'
          />

          <input
            type='number'
            placeholder='Price per day'
            value={this.state.price}
            onChange={this.update("price")}
            className='puppy-form-input'
          />

          <textarea
            placeholder='Description'
            value={this.state.description}
            onChange={this.update("description")}
            className='puppy-form-input'
          />
        <UploadButton updateUrl={this.updateUrl} buttonText={this.state.buttonText}/>
        <button type='submit' className='login-form-button'>Add Puppy</button>
        </form>
      </div>
    );
  }
});

module.exports = PuppyForm;
