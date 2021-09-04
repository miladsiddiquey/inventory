import React from 'react';
import {useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import productData from '../../../AllData/PurchasesData.json';



const ViewAll = () => {

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
                        <h2>All Product </h2>
                        <div style={{margin:'auto'}}>
                            <input className="form-control  me-2" type="search" placeholder="Search" aria-label="Search" />
                        </div>
                        <Link to='/addPurchases' ><button className="btn btn-primary ml-2">Add Purchases</button></Link>
                    </div>
                    <table className="table list-table border shadow mt-3">
                        <thead className="thead-dark bg-dark" style={{ color: 'white' }} >
                            <tr>
                                <th scope="col"></th>
                                <th scope="col">Product Suppliers</th>
                                <th scope="col">Product Brand</th>
                                <th scope="col">Product Quantity</th>
                                <th scope="col">Product Tp</th>
                                <th scope="col">Product Mrp</th>
                                <th scope="col">Product IMEI</th>
                                <th >Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                product.map((pd, index,) => (
                                    <tr>
                                        <th scope="row"></th>
                                        <td>{pd.suppliers}</td>
                                        <td>{pd.name}</td>
                                        <td>{pd.quantity}</td>
                                        <td>{pd.tp}</td>
                                        <td>{pd.mrp}</td>
                                        <td>{pd.imei}</td>

                                        <td>
                                            <Link to={`/singleView/${pd.id}`} className="btn btn-primary ml-2" >View</Link>
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

export default ViewAll;