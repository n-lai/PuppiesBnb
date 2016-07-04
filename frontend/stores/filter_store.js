const Store = require('flux/utils').Store;
const AppDispatcher = require('../dispatcher/dispatcher.js');
const FilterConstants = require('../constants/filter_constants');

const FilterStore = new Store(AppDispatcher);

let _params = {
  location: "",
  price: { minPrice: 0, maxPrice: 100000 }
};

FilterStore.params = function() {
  return _params;
};

FilterStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case FilterConstants.PRICES:
      _params.price.minPrice = payload.prices[0];
      _params.price.maxPrice = payload.prices[1];
      FilterStore.__emitChange();
      break;
  }
};

module.exports = FilterStore;
