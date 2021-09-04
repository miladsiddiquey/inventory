import React from 'react';
import './ListCategory.css';
import { Link } from 'react-router-dom';

const ListCategory = () => {
    const category = [
        {
            name:"chips",
            category:"potetu chaips",
            code:"1245876",
            price:"432",
        },
        {
            name:"chips",
            category:"potetu chaips",
            code:"1245876",
            price:"432",
        },
        {
            name:"chips",
            category:"potetu chaips",
            code:"1245876",
            price:"432",
        }
    ]
    return (
        <div className="list-category">

        <div className=" mt-3">
            <div className="d-flex">
                <h2>Category List</h2>
                <div style={{margin:'auto'}} >
                        <input className="form-control  me-2" type="search" placeholder="Search" aria-label="Search" />
                        </div> 
                    <Link to='/addCategory' ><button className="btn btn-primary ml-2">Add Category</button></Link>
            </div>
            <table className="table border shadow mt-3">
                <thead className="thead-dark bg-dark" style={{color:'white'}} >
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col"> Name</th>
                        <th scope="col">Category</th>
                        <th scope="col">code</th>
                        <th scope="col">price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        category.slice(0, 5).map((pd, index) => (
                            <tr>
                                <th scope="row">{index + 1}</th>
                                <td>{pd.name}</td>
                                <td>{pd.category}</td>
                                <td>{pd.code}</td>
                                <td>{pd.price}</td>
                                <td>
                                    <Link to="!#" className="btn btn-primary me-2 " >View</Link>
                                    <Link to="!#" className="btn btn-outline-primary me-2 ">Edit</Link>
                                    <Link to="!#" className="btn btn-danger me-2" >Delete</Link>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            
        </div>

    </div>
    );
};

export default ListCategory;