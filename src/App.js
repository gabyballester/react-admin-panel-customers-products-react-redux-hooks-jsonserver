import React from 'react';
import './App.sass';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
// import Home from "./pages/Home";
import Customers from './pages/Customers';
import CustomerNew from './pages/CustomerNew';
import CustomerEdit from './pages/CustomerEdit';
import Products from './pages/Products';
import ProductNew from './pages/ProductNew';
import ProductEdit from './pages/ProductEdit';
import LoginRegister from './components/auth/LoginRegister';

//Redux
import {Provider} from 'react-redux';
import store from './store';

function App() {
  return (
   <Router>
     <Provider store={store}>
     <Switch>
       <Route path='/customers' component={Customers}  />
       <Route path='/customer/new' component={CustomerNew}  />
       <Route path='/customer/edit/:id' component={CustomerEdit}  />
       <Route path='/products' component={Products}/>
       <Route path='/product/new' component={ProductNew}/>
       <Route path='/product/edit/:id' component={ProductEdit}/>
       <Route path='/' component={LoginRegister}/>
       <Route path='*' component={Customers}/>
     </Switch>
     </Provider>
   </Router>
  );
}

export default App;
