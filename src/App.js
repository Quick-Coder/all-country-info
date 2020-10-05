import React, { createContext, useState } from 'react';
import CountryWrap from './components/CountryWrap/CountryWrap';
import Header from './components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Details from './components/Details/Details';
import WrongPath from './components/WrongPath/WrongPath';
export const CountryInfo=createContext();


const App = () => {
  
  const [countries, setCountries]=useState([]);
   
  return (
    <CountryInfo.Provider value={[countries,setCountries]}>
      <Header/>      
      <Router>
        <Switch>
          <Route exact path='/'><CountryWrap/></Route>
          <Route path='/country/:countryNmae'><Details/></Route>
          <Route path='*'><WrongPath/></Route>
        </Switch>
      </Router>
    </CountryInfo.Provider>
  );
};

export default App;