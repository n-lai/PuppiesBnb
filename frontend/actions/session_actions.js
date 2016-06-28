const SessionApiUtil = require('../util/session_api_util');
const AppDispatcher = require('../dispatcher/dispatcher');
const SessionConstants = require('../constants/session_constants');
const hashHistory = require('react-router').hashHistory;

const SessionActions = {
  signup(user) {
    SessionApiUtil.signup(user, this.receiveCurrentUser);
  },

  login(user) {
    SessionApiUtil.login(user, this.receiveCurrentUser);
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
