const React = require('react');
const ReactDOM = require('react-dom');

const ReactRouter = require('react-router');
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const IndexRoute = ReactRouter.IndexRoute;
const HashHistory = ReactRouter.hashHistory;



const SessionApiUtil = require('./util/session_api_util');
const SessionActions = require('./actions/session_actions');


window.SessionApiUtil = SessionApiUtil;
window.SessionActions = SessionActions;
