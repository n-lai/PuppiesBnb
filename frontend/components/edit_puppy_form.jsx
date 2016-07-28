const React = require('react');
const HashHistory = require('react-router').hashHistory;

const PuppyStore = require('../stores/puppy_store');
const PuppyActions = require('../actions/puppy_actions');

const ErrorStore = require('../stores/error_store');
const ErrorActions = require('../actions/error_actions');
const UploadButton = require('./upload_button');
const SearchBar = require('./search_bar');


const PuppyEditForm = React.createClass({
  getInitialState() {
    let potential = PuppyStore.find(this.props.puppyId);
    let puppy = potential ? potential : {};

    return ({
      name: puppy.name,
      breed: puppy.breed,
      temperament: puppy.temperament,
      description: puppy.description,
      lat: puppy.lat,
      lng: puppy.lng,
      price: puppy.price,
      owner_id: puppy.owner_id,
      image_url: puppy.image_url,
      buttonText: ['blank', 'Upload Puppy Picture']
    });
  },

  componentDidMount() {
    this.puppyListener = PuppyStore.addListener(this._handleChange);
    this.errorListener = ErrorStore.addListener(this.forceUpdate.bind(this));
  },

  componentWillUnmount() {
    this.puppyListener.remove();
    this.errorListener.remove();
  },

  _handleChange() {
    let potential = PuppyStore.find(this.props.puppyId);
    let puppy = potential ? potential : {};

    this.setState({
      name: puppy.name,
      breed: puppy.breed,
      temperament: puppy.temperament,
      description: puppy.description,
      price: puppy.price,

    });

    this.props.close();
    HashHistory.push('api/puppies/' + this.props.puppyId);
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
      id: this.props.puppyId,
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

    PuppyActions.editPuppy(puppyData);
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
          <button type='submit' className='login-form-button'>Edit Puppy</button>
        </form>
      </div>
    );
  }
});

module.exports = PuppyEditForm;
