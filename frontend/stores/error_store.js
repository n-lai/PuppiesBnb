const AppDispatcher = require('../dispatcher/dispatcher.js');
const Store = require('flux/utils').Store;
const ErrorConstants = require('../constants/error_constants');

const ErrorStore = new Store(AppDispatcher);

let _errors = {};
let _form = "";

const setErrors = function(payload) {
  _errors = payload.errors;
  _form = payload.form;
};

const clearErrors = function(payload) {
  _errors = {};
  _form = "";
};

ErrorStore.__onDispatch = function(payload) {
  switch (payload.actionType) {
    case ErrorConstants.SET_ERRORS:
      setErrors(payload);
      break;
    case ErrorConstants.CLEAR_ERRORS:
      clearErrors();
      break;
  }
  ErrorStore.__emitChange();
};

ErrorStore.formErrors = function(form) {
  if (form !== _form) {
    return {};
  }

  const result = {};

  for (let field in _errors) {
    result[field] = Array.from(_errors[field]);
  }

  return result;
};

ErrorStore.form = function() {
  return _form;
};

module.exports = ErrorStore;
