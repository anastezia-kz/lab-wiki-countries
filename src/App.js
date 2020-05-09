import React from 'react';
import { Route,Link } from 'react-router-dom';
import CountriesList from './components/CountriesList/';


import './App.css';

function App() {
  
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-primary mb-3">
          <div className="container">
           <Link to='/countrieslist' className="navbar-brand">WikiCountries</Link>
          </div>
      </nav> 
     
      <Route exact path='/countrieslist' component={CountriesList}></Route>
      <Route path='/countrieslist/:countryCode' component={CountriesList} >
     </Route>       
    </div>
  );
}

export default App;
