import React from 'react';
import './ListProduct.css'
import { Link } from 'react-router-dom';

const ListProduct = () => {
    const product =[
        {
            "type": "silindar",
            "name": "Omera LPG Refill 120kg",
            "barcode": "1w2e4r5t6y7u8i",
            "cost": "25 $",
            "code": "2539",
            "category": "gas",
            "price": "15 $",
            "tax": "N/A",
            "quantity": "2",
            "description": "This is Omera LPG Refill 120kg",
            "id": 4
          },
          {
            "type": "silindar",
            "name": "Omera LPG Refill 120kg",
            "barcode": "1w2e4r5t6y7u8i",
            "cost": "25 $",
            "code": "2539",
            "category": "gas",
            "price": "15 $",
            "tax": "N/A",
            "quantity": "2",
            "description": "This is Omera LPG Refill 120kg",
            "id": 5
          },
          {
            "type": "silindar",
            "name": "Omera LPG Refill 120kg",
            "barcode": "1w2e4r5t6y7u8i",
            "cost": "25 $",
            "code": "2539",
            "category": "gas",
            "price": "15 $",
            "tax": "N/A",
            "quantity": "2",
            "description": "This is Omera LPG Refill 120kg",
            "id": 7
          },
          {
            "type": "silindar",
            "name": "Omera LPG Refill 120kg",
            "barcode": "1w2e4r5t6y7u8i",
            "cost": "25 $",
            "code": "2539",
            "category": "gas",
            "price": "15 $",
            "tax": "N/A",
            "quantity": "2",
            "description": "This is Omera LPG Refill 120kg",
            "id": 8
          },
          {
            "type": "silindar",
            "name": "Omera LPG Refill 120kg",
            "barcode": "1w2e4r5t6y7u8i",
            "cost": "25 $",
            "code": "2539",
            "category": "gas",
            "price": "15 $",
            "tax": "N/A",
            "quantity": "2",
            "description": "This is Omera LPG Refill 120kg",
            "id": 9
          },
          {
            "type": "silindar",
            "name": "Omera LPG Refill 120kg",
            "barcode": "1w2e4r5t6y7u8i",
            "cost": "25 $",
            "code": "2539",
            "category": "gas",
            "price": "15 $",
            "tax": "N/A",
            "quantity": "2",
            "description": "This is Omera LPG Refill 120kg",
            "id": 10
          }
    ]
    return (
        <div>
             <div className="listProduct">
            <div className=" mt-3">
                <div className="d-flex">
                    <h2>product list</h2>
                        <div style={{margin:'auto'}} >
                        <input className="form-control  me-2" type="search" placeholder="Search" aria-label="Search" />
                        </div> 
                    <Link to='/addProduct' ><button className="btn btn-primary ml-2">Add Product</button></Link>
                </div>
                <table className="table list-table border shadow mt-3">
                    <thead className="thead-dark bg-dark" style={{color:'white'}} >
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Product Name</th>
                            <th scope="col">Quentity</th>
                            <th scope="col">Barcode</th>
                            <th scope="col">Category</th>
                            <th >Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            product.slice(0,10).map((pd, index) => (
                                <tr>
                                    <th scope="row">{index + 1}</th>
                                    <td>{pd.name}</td>
                                    <td>{pd.quantity}</td>
                                    <td>{pd.barcode}</td>
                                    <td>{pd.category}</td>
                                    <td>
                                        <Link to="!#" className="btn btn-primary me-2" >View</Link>
                                        <Link to="#" className="btn btn-outline-primary me-2">Edit</Link>
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

export default ListProduct;