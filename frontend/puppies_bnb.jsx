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

const PuppyListings = require('./components/puppy_listings');
const UserBookings = require('./components/user_bookings');


const App = React.createClass({
  render() {
    return (
      <div className='root'>
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
      <Route path='/api/user/puppies' component={PuppyListings}/>
      <Route path='/api/user/bookings' component={UserBookings}/>
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
