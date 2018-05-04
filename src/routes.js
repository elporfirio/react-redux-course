import React from 'react';
import {IndexRoute, Route} from 'react-router';
import App from "./components/app";
import HomePage from "./components/home/HomePage";
import AboutPage from "./components/about/AboutPage";
import CoursePage from './components/course/CoursePage';
import ManageCoursePage from "./components/course/ManageCoursePage";

export default (
  <Route path={'/'} component={App}>
    <IndexRoute component={HomePage}/>
    <Route path={'courses'} component={CoursePage}/>
    <Route path={'course'} component={ManageCoursePage}/>
    <Route path={'course/:id'} component={ManageCoursePage}/>
    <Route path={'about'} component={AboutPage}/>
  </Route>
);
