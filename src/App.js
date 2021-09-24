import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import ThankYou from './components/pages/ThankYou';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from '../src/components/Footer';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/thank-you' component={ThankYou} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
