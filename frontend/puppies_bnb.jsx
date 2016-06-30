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
const Search = require('./components/search');

const SessionApiUtil = require('./util/session_api_util');
const SessionActions = require('./actions/session_actions');

const PuppyStore = require('./stores/puppy_store');
const PuppyActions = require('./actions/puppy_actions');
const PuppyIndex = require('./components/puppy_index');
const PuppyDetail = require('./components/puppy_detail');


const appRouter = (
  <Router history={ HashHistory }>
    <Route path='/' component={ App }>
      <IndexRoute component={Search} />
      <Route path='/api/puppies' component={Search}/>
      <Route path='/api/puppies/:puppyId' component={PuppyDetail}/>
    </Route>
  </Router>
);

window.SessionApiUtil = SessionApiUtil;
window.SessionActions = SessionActions;
window.PuppyStore = PuppyStore;
window.PuppyActions = PuppyActions;


document.addEventListener('DOMContentLoaded', () => {
  if (window.currentUser) {
    SessionActions.receiveCurrentUser(window.currentUser);
  }
  const root = document.getElementById('content');
  ReactDOM.render(appRouter, root);
});
