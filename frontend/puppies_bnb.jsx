const React = require('react');
const ReactDOM = require('react-dom');

const ReactRouter = require('react-router');
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const IndexRoute = ReactRouter.IndexRoute;
const HashHistory = ReactRouter.hashHistory;

const LandingPage = require('./components/landing_page');
const Search = require('./components/search');
const SessionActions = require('./actions/session_actions');
const NavBar = require('./components/navbar');

const PuppyIndex = require('./components/puppy_index');
const PuppyDetail = require('./components/puppy_detail');

const BookingActions = require('./actions/booking_actions');
const BookingApiUtil = require('./util/booking_api_util');
const BookingStore = require('./stores/booking_store');

const PuppyActions = require('./actions/puppy_actions');
const PuppyStore = require('./stores/puppy_store');


window.bookingStore = BookingStore;
window.bookingActions = BookingActions;
window.BookingApiUtil = BookingApiUtil;

window.PuppyActions = PuppyActions;
window.PuppyStore = PuppyStore;

const App = React.createClass({
  render() {
    return (
      <div>
        <NavBar />
        {this.props.children}
      </div>
    )
  }
});

const appRouter = (
  <Router history={ HashHistory }>
    <Route path='/' component={ App }>
      <IndexRoute component={LandingPage} />
      <Route path='/api/puppies' component={Search}/>
      <Route path='/api/puppies/:puppyId' component={PuppyDetail}/>
    </Route>
  </Router>
);


document.addEventListener('DOMContentLoaded', () => {
  if (window.currentUser) {
    SessionActions.receiveCurrentUser(window.currentUser);
  }
  const root = document.getElementById('content');
  ReactDOM.render(appRouter, root);
});
