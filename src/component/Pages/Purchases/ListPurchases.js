import React from 'react';
import './ListPurchases.css';
import { Link } from 'react-router-dom';
import {useState, useEffect } from 'react';
import productData from '../../../AllData/PurchasesData.json';

const ListPurchases = () => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        setProduct(productData)
        console.log(productData)
    }, [])

    
    return (
        <div>
             <div className="listProduct">
            <div className=" mt-3">
                <div className="d-flex">
                    <h2>Purchases list</h2>
                        <div style={{margin:'auto'}}>
                        <input className="form-control  me-2" type="search" placeholder="Search" aria-label="Search" />
                        </div> 
                    <Link to='/addPurchases' ><button className="btn btn-primary ml-2">Add Purchases</button></Link>
                </div>
                <table className="table list-table border shadow mt-3">
                    <thead className="thead-dark bg-dark" style={{color:'white'}} >
                        <tr>
                            <th scope="col"></th>
                            <th scope="col">Product Id</th>
                            <th scope="col">Product Name</th>
                            <th scope="col">Product Quantity</th>
                            <th scope="col">Supplier</th>
                            <th >Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            product.slice(0,10).map((pd, index) => (
                                <tr>
                                    <th scope="row"></th>
                                    <td>{pd.id}</td>
                                    <td>{pd.name}</td>
                                    <td>{pd.quantity}</td>
                                    <td><Link to="!#" className="btn btn-primary  me-2" >Habib </Link></td>
                                    <td>
                                        <Link to='/viewAll' className="btn btn-primary me-2" >View All</Link>
                                       
                                        <Link to="#" className="btn btn-danger me-2"  >Delete</Link>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                {/* <Pagination
                 showPage={showPage}
                  onPaginationChange={onPaginationChange}
                  total={product.length}
                   /> */}
            </div>
            </div>
        </div>
    );
};

export default ListPurchases;