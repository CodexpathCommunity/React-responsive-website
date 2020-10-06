import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Pages/Footer/Footer';
import Home from './components/Pages/HomePage/Home';
import Products from './components/Pages/Products/Products';
import Servises from './components/Pages/Services/Servises';
import SignUp from './components/Pages/Sign-Up/SignUp';


function App() {
  return (
    
    <Router>
        <Navbar/>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services'  component={Servises} />
          <Route path='/products'  component={Products} />
          <Route path='/sign-up'  component={SignUp} />
        </Switch>
        <Footer/>
    </Router>
     
    
  );
}

export default App;
