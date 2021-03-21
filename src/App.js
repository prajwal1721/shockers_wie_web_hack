import { NavbarLeft } from './components/Navbar/navbarLeft';
import { HomePage } from './pages/homepage/homepage';
import { useState } from 'react';
import './App.css';
import { Community } from './pages/Communitypage/Community';
import { createBrowserHistory } from "history";
import { Router, Redirect, Route, Switch } from 'react-router-dom';
const hist = createBrowserHistory();
function App() {
  return (
    <Router history={hist}>
      <div className="App">
        <NavbarLeft />

        <Switch>
          <Route path='/community' exact component={Community} />
          <Route path='/whatsnew' exact component={HomePage} />
          <Route path='/products' exact component={HomePage} />
          <Route path='/about' exact component={HomePage} />
          <Route path='/' exact component={HomePage} />

        </Switch>

      </div>
    </Router>
  );

}

export default App;
