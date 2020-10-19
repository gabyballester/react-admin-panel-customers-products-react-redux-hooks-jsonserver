import React from 'react';
import './App.sass';
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./pages/Home";
// import Products from './pages/Products';
import Customers from './pages/Customers';
import CustomerNew from './pages/CustomerNew';
import CustomerEdit from './pages/CustomerEdit';
import Footer from './components/Footer'


function App() {
  return (
   <Router>
     <Navbar/>
     <Switch>
       <Route path='/' exact component={Home}/>
       <Route path='/customers' component={Customers}  />
       <Route path='/customer/new' component={CustomerNew}  />
       <Route path='/customer/edit/:id' component={CustomerEdit}  />
       {/* <Route path='/products' component={Products}/> */}
       {/* <Route path='/product/new' component={ProductNew}/> */}
       {/* <Route path='/product/edit/:id' component={ProductEdit}/> */}
     </Switch>
     <Footer/>
   </Router>
  );
}

export default App;
