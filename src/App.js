import React from 'react';
import './App.sass';
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./pages/Home";
import Products from './pages/Products';
import Customers from './pages/Customers';

function App() {
  return (
   <>
   <Router>
     <Navbar/>
     <Switch>
       <Route path='/' exact component={Home}/>
       <Route path='/customers' component={Customers}  />
       <Route path='/products' component={Products}/>
     </Switch>
   </Router>
   </>
  );
}

export default App;
