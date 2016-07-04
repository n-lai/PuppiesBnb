const React = require('react');
const ReactSlider = require('react-slider');
const HashHistory = require('react-router').hashHistory;

const FilterActions = require('../actions/filter_actions');

const FilterParams = React.createClass({
  getInitialState() {
    return {
      lat: 0,
      lng: 0,
      min: 0,
      max: 100
    };
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
        <h3>Filter By Budget</h3>
        <ReactSlider onAfterChange={this.updatePrices} withBars defaultValue={[this.state.min, this.state.max]} className='slider'>
          <div id='left-handle' className='my-handle'>{this.state.min}</div>
          <div id='right-handle' className='my-handle'>{this.state.max + toggleMax}</div>
        </ReactSlider>
      </div>
    );
  }
});

module.exports = FilterParams;
