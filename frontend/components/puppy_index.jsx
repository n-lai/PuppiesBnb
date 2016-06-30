const React = require('react');
const PuppyStore = require('../stores/puppy_store');
const PuppyActions = require('../actions/puppy_actions');
const PuppyIndexItem = require('./puppy_index_item');

const PuppyIndex = React.createClass({
  getInitialState() {
    return { puppies: PuppyStore.all() }
  },

  componentDidMount() {
    this.puppyListener = PuppyStore.addListener(this._handleChange);
    PuppyActions.fetchAllPuppies();
  },

  _handleChange() {
    this.setState({ puppies: PuppyStore.all() });
  },

  render() {
    return (
      <div className='puppy-index'>
        {
          this.state.puppies.map(puppy => {
            return <PuppyIndexItem key={puppy.id} puppy={puppy} />
          })
        }
      </div>
    );
  }

});

module.exports = PuppyIndex;
