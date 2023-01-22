import React from 'react';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import Home from './pages/home/Home';
import ThankYou from './pages/thank-you/ThankYou';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound';

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
