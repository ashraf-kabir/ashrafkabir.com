import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import ThankYou from './components/pages/ThankYou';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from '../src/components/Footer';
import NotFound from './components/NotFound';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/thank-you' exact component={ThankYou} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
