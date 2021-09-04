import React from 'react';
import './App.css'
import Sidebar from './component/Sidebar/Sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './component/Pages/Dashboard/Dashboard';
import AddProduct from './component/Pages/Products/AddProduct';
import ListProduct from './component/Pages/Products/ListProduct';
import AddCategory from './component/Pages/Categories/AddCategory';
import ListCategory from './component/Pages/Categories/ListCategory';
import AddSale from './component/Pages/Sale/AddSale';
import ListSale from './component/Pages/Sale/ListSale';
import AddPurchases from './component/Pages/Purchases/AddPurchases';
import ListPurchases from './component/Pages/Purchases/ListPurchases';
import AddReturns from './component/Pages/Returns/AddReturns';
import ListReturns from './component/Pages/Returns/ListReturns';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Footer from './component/Footer/Footer';
import ViewAll from './component/Pages/Purchases/ViewAll';
import SingleView from './component/Pages/Purchases/SingleView';
import AddImei from './component/Pages/AddImei/AddImei';


const App = () => {
  return (
   <div>
     <Router>
     <Sidebar/>
     <div className="wrapper">
     <Switch>
       <Route path='/addProduct'>
         <AddProduct/>
       </Route>
       <Route path='/listProduct'>
         <ListProduct/>
       </Route>
       <Route path="/addCategory">
         <AddCategory/>
       </Route>
       <Route path="/listCategory">
         <ListCategory/>
       </Route>
       <Route path="/addSale">
         <AddSale/>
       </Route>
       <Route path="/listSale">
         <ListSale/>
       </Route>
       <Route path="/addPurchases">
         <AddPurchases/>
       </Route>
       <Route path="/listPurchase">
         <ListPurchases/>
       </Route>
       <Route path="/addImei">
         <AddImei/>
       </Route>
       <Route path ="/viewAll">
         <ViewAll/>
       </Route>
       <Route path ="/singleView/:productId">
         <SingleView/>
       </Route>
       <Route path="/addReturns">
         <AddReturns/>
       </Route>
       <Route path="/listReturns">
         <ListReturns/>
       </Route>
       <Route path='/'>
         <Dashboard/>
       </Route>
       <Route exact path='/deshboard'>
       <Dashboard/>
       </Route>

     </Switch>
     <Footer/>
     </div>
     
     </Router>
    
   </div>
  );
};

export default App;