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

  PuppyStore.__emitChange();
};

const _resetSinglePuppy = function(puppy) {
  _puppies[puppy.id] = puppy;
  PuppyStore.__emitChange();
};

const _removePuppy = function(puppy) {
  delete _puppies[puppy.id];
  PuppyStore.__emitChange();
};

PuppyStore.__onDispatch = function(payload) {
  switch (payload.actionType) {
    case PuppyConstants.PUPPIES_RECEIVED:
      _resetAllPuppies(payload.puppies);
      break;
    case PuppyConstants.PUPPY_RECEIVED:
      _resetSinglePuppy(payload.puppy);
      break;
    case PuppyConstants.PUPPY_REMOVED:
      _removePuppy(payload.puppy);
      break;
  }
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

PuppyStore.find = function(id) {
  return _puppies[id];
};

module.exports = PuppyStore;
