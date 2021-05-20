import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import Grafica from './pages/grafica';
import avanzado from './pages/avanzado';
import Grafica2 from './pages/grafica2';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/basico' exact component={Home} />
        <Route path='/avanzado' component={avanzado} />
        <Route path='/grafica' component={Grafica} />
        <Route path='/grafica2' component={Grafica2} />
      </Switch>
    </Router>
  );
}

export default App;

