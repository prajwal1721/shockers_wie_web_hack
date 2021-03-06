import { NavbarLeft } from './components/Navbar/navbarLeft';
import { HomePage } from './pages/homepage/homepage';
import { useState } from 'react';
import './App.css';
import { AboutUsPage } from './pages/AboutUsPage/aboutuspage';
import { Community } from './pages/Communitypage/Community';
import { createBrowserHistory } from "history";
import { Signin } from './components/Signin/signin';
import { WhatsNewPage } from './pages/WhatsNewPage/whatsnewpage';
import { Router, Redirect, Route, Switch } from 'react-router-dom';
const hist = createBrowserHistory();
function App() {
  const [user, setUser] = useState('');
  return (
    < Router history={hist} >
      <div className="App">
        <NavbarLeft user />

        <Switch>
          <Route path='/community' exact component={Community} />
          <Route path='/whatsnew' exact component={WhatsNewPage} />
          <Route path='/login' exact component={Signin} />
          <Route path='/about' exact component={AboutUsPage} />
          <Route path='/' exact component={HomePage} />

        </Switch>

        <footer >Made by Shockers</footer>
      </div>
    </Router >
  );

}

export default App;
