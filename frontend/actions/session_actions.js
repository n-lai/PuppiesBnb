const SessionApiUtil = require('../util/session_api_util');
const AppDispatcher = require('../dispatcher/dispatcher');
const SessionConstants = require('../constants/session_constants');
const hashHistory = require('react-router').hashHistory;
const ErrorActions = require('./error_actions');

const SessionActions = {
  signup(userData) {
    SessionApiUtil.signup(userData, this.receiveCurrentUser, ErrorActions.setErrors);
  },

  login(userData) {
    SessionApiUtil.login(userData, this.receiveCurrentUser, ErrorActions.setErrors);
  },

  receiveCurrentUser(user) {
    AppDispatcher.dispatch({
      actionType: SessionConstants.LOGIN,
      user: user
    });
  },

  logout() {
    SessionApiUtil.logout(SessionActions.removeCurrentUser);
  },

  removeCurrentUser() {
    AppDispatcher.dispatch({
      actionType: SessionConstants.LOGOUT
    });
    hashHistory.push("/login");
  }
};

module.exports = SessionActions;
