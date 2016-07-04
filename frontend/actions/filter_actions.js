const PuppyApiUtil = require('../util/puppy_api_util');
const PuppyActions = require('./puppy_actions');
const FilterConstants = require('../constants/filter_constants');
const AppDispatcher = require('../dispatcher/dispatcher');

const FilterActions = {
  updatePuppyBreed(breed) {

  },

  updatePuppyPrices(prices) {
    AppDispatcher.dispatch({
      actionType: FilterConstants.PRICES,
      prices: prices
    });
  },
};

module.exports = FilterActions;
