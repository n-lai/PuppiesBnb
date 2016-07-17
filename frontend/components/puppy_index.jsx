const React = require('react');
const PuppyStore = require('../stores/puppy_store');
const PuppyActions = require('../actions/puppy_actions');
const PuppyIndexItem = require('./puppy_index_item');

const PuppyIndex = React.createClass({
  getInitialState() {
    return { puppies: PuppyStore.all() }
  },

  componentWillMount() {
    this.missingPuppies = '';
  },

  componentDidMount() {
    this.puppyListener = PuppyStore.addListener(this._handleChange);
    this.missingPuppies = "Sorry, this city doesn't have puppies up for rental yet. Try looking in New York or San Francisco!";
  },

  componentWillUnmount() {
    this.puppyListener.remove();
  },

  _handleChange() {
    this.setState({ puppies: PuppyStore.all() });
  },

  render() {
    if (Object.keys(this.state.puppies).length === 0) {
      return <div className='missing-puppies'><h1>{this.missingPuppies}</h1></div>
    }

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
