const PuppyApiUtil = require('../util/puppy_api_util');
const AppDispatcher = require('../dispatcher/dispatcher');
const PuppyConstants = require('../constants/puppy_constants');
const PuppyStore = require('../stores/puppy_store');


const PuppyActions = {
  fetchAllPuppies() {
    PuppyApiUtil.fetchAllPuppies(this.receiveAllPuppies);
  },

  receiveAllPuppies(puppies) {
    AppDispatcher.dispatch({
      actionType: PuppyConstants.PUPPIES_RECEIVED,
      puppies: puppies
    });
  }
};

module.exports = PuppyActions;
