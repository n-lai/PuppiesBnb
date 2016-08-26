const React = require('react');
const ReactSlider = require('react-slider');
const HashHistory = require('react-router').hashHistory;
const FilterActions = require('../actions/filter_actions');

const FilterParams = React.createClass({
  getInitialState() {
    return {
      breed: "All",
      min: 0,
      max: 100
    };
  },

  componentWillReceiveProps() {
    this.setState({ breed: "All" });
  },

  updateBreed(e) {
    let breed = e.target.value
    this.setState({ breed: breed });
    FilterActions.updatePuppyBreed(breed);
  },

  updatePrices(prices) {
    this.setState({ min: prices[0], max: prices[1] });
    FilterActions.updatePuppyPrices([prices[0], prices[1]]);
  },

  render() {
    let toggleMax = '';

    if (this.state.max === 100) {
      toggleMax = '+';
    }

    return (
      <div className='search-params'>
        <ul>
          <li>
            <h3>Popular Breeds:</h3>
            <select
              value={this.state.breed}
              onChange={this.updateBreed}
              className='breed-dropdown'>
              <option value='All'>All</option>
              <option value='Beagle'>Beagle</option>
              <option value='Corgi'>Corgi</option>
              <option value='Golden Retriever'>Golden Retriever</option>
              <option value='German Shepherd'>German Shepherd</option>
              <option value='Labrador'>Labrador</option>
              <option value='Other'>Other</option>
            </select>
          </li>
          <li>
            <h3>Filter By Budget:</h3>
              <ReactSlider onAfterChange={this.updatePrices} withBars defaultValue={[this.state.min, this.state.max]} className='slider'>
                <div id='left-handle' className='my-handle'>{this.state.min}</div>
                <div id='right-handle' className='my-handle'>{this.state.max + toggleMax}</div>
              </ReactSlider>
          </li>
        </ul>
      </div>
    );
  }
});

module.exports = FilterParams;
