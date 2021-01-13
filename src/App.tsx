import React from 'react';
import './App.css';
import { Router } from './routing/Router';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavbarComponent } from './components/NavbarComponent';

function App() {
  return(
    <div>
      <NavbarComponent/>
      <Router/>
    </div>
  )
}

export default App;
