const PuppyApiUtil = require('../util/puppy_api_util');
const AppDispatcher = require('../dispatcher/dispatcher');
const PuppyConstants = require('../constants/puppy_constants');
const PuppyStore = require('../stores/puppy_store');


const PuppyActions = {
  fetchAllPuppies(bounds) {
    PuppyApiUtil.fetchAllPuppies(bounds, this.receiveAllPuppies);
  },

  receiveAllPuppies(puppies) {
    AppDispatcher.dispatch({
      actionType: PuppyConstants.PUPPIES_RECEIVED,
      puppies: puppies
    });
  },

  fetchPuppy(id) {
    PuppyApiUtil.fetchPuppy(id, this.receivePuppy);
  },

  receivePuppy(puppy) {
    AppDispatcher.dispatch({
      actionType: PuppyConstants.PUPPY_RECEIVED,
      puppy: puppy
    });
  },

  createPuppy(puppy) {
    PuppyApiUtil.createPuppy(puppy, this.receivePuppy);
  },

  editPuppy(puppy) {
    PuppyApiUtil.updatePuppy(puppy, this.receivePuppy);
  },

  deletePuppy(id) {
    PuppyApiUtil.deletePuppy(id, this.removePuppy);
  },

  removePuppy(puppy) {
    AppDispatcher.dispatch({
      actionType: PuppyConstants.PUPPY_REMOVED,
      puppy: puppy
    });
  }
};

module.exports = PuppyActions;
