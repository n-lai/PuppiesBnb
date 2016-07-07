const PuppyApiUtil = require('../util/puppy_api_util');
const AppDispatcher = require('../dispatcher/dispatcher');
const PuppyConstants = require('../constants/puppy_constants');
const PuppyStore = require('../stores/puppy_store');
const ErrorActions = require('./error_actions');
const hashHistory = require('react-router').hashHistory;

const PuppyActions = {
  fetchAllPuppies(params) {
    PuppyApiUtil.fetchAllPuppies(params, this.receiveAllPuppies);
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

  createPuppy(puppyData) {
    PuppyApiUtil.createPuppy(puppyData, this.receivePuppy, ErrorActions.setErrors);
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
  },

  createReview(review) {
    PuppyApiUtil.createReview(review, this.receivePuppy);
  }
};

module.exports = PuppyActions;
