const React = require('react');
const Link = require('react-router').Link;
const PuppyStore = require('../stores/session_store');
const ErrorStore = require('../stores/error_store');
const PuppyActions = require('../actions/session_actions');
const ErrorActions = require('../actions/error_actions');
const hashHistory = require('react-router').hashHistory;

const PuppyForm = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState() {
    return { name: "", breed: "", temperament: "", description: "", lat: "", lng: "" }
  },

  componentDidMount() {

  },

  componentWillUnmount() {

  },

  redirectIfPuppyMade() {

  },

  fieldErrors(field) {
    const errors = ErrorStore.formErrors("signup");
    if (!errors[field]) {return; }

    const messages = errors[field].map( (errorMsg, i) => {
      return <li key={ i } className='errors'>{ errorMsg }</li>;
    });

    return <ul>{ messages }</ul>;
  },

  update(property) {
    return (e) => this.setState({ [property]: e.target.value });
  },

  _handleSubmit(e) {
    e.preventDefault();
  },

  render() {
    return (
      <div>
        { this.fieldErrors('base') }
        <form onSubmit={this._handleSubmit} className='puppy-form'>

        </form>
      </div>
    );
  }
});
