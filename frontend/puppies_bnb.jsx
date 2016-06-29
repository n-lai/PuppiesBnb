const React = require('react');
const ReactDOM = require('react-dom');

const ReactRouter = require('react-router');
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const IndexRoute = ReactRouter.IndexRoute;
const HashHistory = ReactRouter.hashHistory;

const LoginForm = require('./components/login_form');
const SignupForm = require('./components/signup_form');
const App = require('./components/app');

const SessionApiUtil = require('./util/session_api_util');
const SessionActions = require('./actions/session_actions');

const appRouter = (
  <Router history={ HashHistory }>
    <Route path="/" component={ App } />
      <Route path="/login" component={ LoginForm }/>
      <Route path="/signup" component={ SignupForm }/>
  </Router>
);

window.SessionApiUtil = SessionApiUtil;
window.SessionActions = SessionActions;

document.addEventListener('DOMContentLoaded', () => {
  if (window.currentUser) {
    SessionActions.receiveCurrentUser(window.currentUser);
  }
  const root = document.getElementById('content');
  ReactDOM.render(appRouter, root);
});
