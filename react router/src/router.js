// Libs
import React from 'react';
import { Router, Route, browserHistory, IndexRedirect } from 'react-router';

// Components
import App from './components/App';
import Home from './components/Home';
// import About from './components/About';
// import Courses from './components/Courses';
// import Teachers from './components/Teachers';
// import NotFound from './components/NotFound';
// import HTML from './components/courses/HTML';
// import CSS from './components/courses/CSS';
// import JavaScript from './components/courses/JavaScript';
// import CourseContainer from './components/courses/CourseContainer';
// import CourseList from './data/courses';
// import Featured from './components/Featured';


// Routes
const routes = (
  <Router history={browserHistory}>
    <Route component={App}>
      <Route path="/" component={Home} />
    </Route>
  </Router>
);

export default routes;
