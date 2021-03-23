import React, { useState } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

import Navbar from './components/Navbar';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import ContactPage from './pages/Contact';
import UsersPage from './pages/UsersPage';
import PhotosPage from './pages/PhotosPage';

import './App.scss';

const App = () => {
  return (
    <BrowserRouter>
      <div className="root-page">
        <Navbar />
        <div className="root-page__content">
          <Switch>
            <Route path="/home">
              <HomePage />
            </Route>

            <Route path="/about">
              <AboutPage />
            </Route>

            <Route path="/contact">
              <ContactPage />
            </Route>

            <Route path="/users">
              <UsersPage />
            </Route>
            <Route path="/photos">
              <PhotosPage />
            </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
