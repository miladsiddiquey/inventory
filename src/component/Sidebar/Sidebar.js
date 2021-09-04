import React from 'react';
import './Sidebar.css'
import { Link } from 'react-router-dom';


const Sidebar = () => {
  return (
    //    Top Bar Menu start

    <div class="menubar">
      <input type="checkbox" id="btn" hidden />
      <label for="btn" class="menu-btn">
        <i className="fas fa-bars"></i>
        <i className="fas fa-times"></i>
      </label>
      <nav id="sidebar">
        <div class="sidebar_logo">
          <h2>logo here</h2>
        </div>
        <div className="sidebarWrapper">
          <div className="sidebarMenu">
            <ul class="sidebarList">
              <div className="dropdown-container">
                <Link  to="/deshboard"  style={{textDecoration:'none'}} > <li className="sidebarListItem active">
                  <i className="fas fa-border-all"></i>
                  Dashboard
                </li></Link>

              </div>
              <div className="dropdown-container">
                <li className="sidebarListItem">
                  <i className="fas fa-cart-plus"></i>
                  Products
                </li>
                <div className="dropdown-content">
                  <Link to="/addProduct" style={{textDecoration:'none'}} ><li className="sidebarListItem">Add Product</li></Link>
                  <Link to="/listProduct" style={{textDecoration:'none'}} ><li className="sidebarListItem">List Product</li></Link>

                </div>
              </div>
              <div className="dropdown-container">
                <li className="sidebarListItem">
                  <i className="far fa-clone"></i>
                  Categories
                </li>
                <div className="dropdown-content">
                  <Link to="/addCategory" style={{textDecoration:'none'}} ><li className="sidebarListItem">Add Category</li></Link>
                  <Link to="/listCategory" style={{textDecoration:'none'}} ><li className="sidebarListItem">List Category</li></Link>

                </div>
              </div>
              <div className="dropdown-container">
                <li className="sidebarListItem">
                  <i className="far fa-clock"></i>
                  Sale
                </li>
                <div className="dropdown-content">
                  <Link to="addSale" style={{textDecoration:'none'}} > <li className="sidebarListItem">Add Sale</li></Link>
                  <Link to="listSale" style={{textDecoration:'none'}} > <li className="sidebarListItem">List Sale</li></Link>

                </div>
              </div>
              <div className="dropdown-container">
                <li className="sidebarListItem">
                  <i className="fas fa-shopping-bag"></i>
                  Purchases
                </li>
                <div className="dropdown-content">
                  <Link to="/addPurchases" style={{textDecoration:'none'}} ><li className="sidebarListItem">Add Purchases</li></Link>
                  <Link to="/listPurchase" style={{textDecoration:'none'}} ><li className="sidebarListItem">List Purchases</li></Link>

                </div>
              </div>
              <div className="dropdown-container">
                <li className="sidebarListItem">
                  <i className="fas fa-qrcode"></i>
                  <Link to="/addImei" style={{textDecoration:'none',color:'#595555',marginTop:'-10px'}} ><li className="sidebarListItem">Add IMEI</li></Link>
                  
                </li>
               
              </div>
              <div className="dropdown-container">
                <li className="sidebarListItem">
                  <i className="fas fa-sort-amount-down"></i>
                  Returns
                </li>
                <div className="dropdown-content">
                 <Link to="/addReturns" style={{textDecoration:'none'}} > <li className="sidebarListItem">Add Returns</li></Link>
                 <Link to="/listReturns" style={{textDecoration:'none'}} > <li className="sidebarListItem">List Returns</li></Link>
                 
                </div>
              </div>
              <div className="dropdown-container">
                <li className="sidebarListItem">
                  <i className="fas fa-user-friends"></i>
                  People
                </li>
                <div className="dropdown-content">
                  <li className="sidebarListItem">  Add Customers</li>
                  <li className="sidebarListItem" >List Customers</li>
                  <li className="sidebarListItem" >Add Users</li>
                  <li className="sidebarListItem" >List Users</li>
                </div>
              </div>
              <div className="dropdown-container">
                <li className="sidebarListItem">
                  <i className="fas fa-file-alt"></i>
                  Reports
                </li>
              </div>

            </ul>
          </div>
        </div>
      </nav>
      <div className="logo">
        <h2>logo here</h2>
      </div>
      
      <div class="profile">
        {/* <li><a href="#"><i className="far fa-user-circle"></i></a></li> */}
       
      </div>
    </div>

  );
};

export default Sidebar;