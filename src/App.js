import { NavbarLeft } from './components/Navbar/navbarLeft';
import { HomePage } from './pages/homepage/homepage';
import { useState } from 'react';
import './App.css';

function App() {


  return (
    <div className="App">
      <NavbarLeft />
      < HomePage />
    </div>
  );
}

export default App;
