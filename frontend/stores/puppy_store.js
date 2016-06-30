const AppDispatcher = require('../dispatcher/dispatcher.js');
const Store = require('flux/utils').Store;
const PuppyConstants = require('../constants/puppy_constants');
const PuppyStore = new Store(AppDispatcher);

let _puppies = {};

const _resetAllPuppies = function(puppies) {
  _puppies = {};

  puppies.forEach(puppy => {
    _puppies[puppy.id] = puppy;
  });
};

const _resetSinglePuppy = function(puppy) {
  _puppies[puppy.id] = puppy;
};

PuppyStore.__onDispatch = function(payload) {
  debugger
  switch (payload.actionType) {
    case PuppyConstants.PUPPIES_RECEIVED:
      _resetAllPuppies(payload.puppies);
      break;
  }
  PuppyStore.__emitChange();
};

PuppyStore.all = function() {
  const puppies = [];

  for (let id in _puppies) {
    if (_puppies.hasOwnProperty(id)) {
      puppies.push(_puppies[id]);
    }
  }

  return puppies;
};

module.exports = PuppyStore;
