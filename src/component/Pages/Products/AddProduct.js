import React from 'react';
import './AddProduct.css'

const AddProduct = () => {
    return (
        <div>
            <div className="addProduct">
            <div className="  p-3">
                    <h2 className="text-center mb-4">Add Product</h2>
                    <form >
                    <div className="form-group">
                    <label>Product Type*</label>
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Product type"
                                
                            />
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                            <div className="form-group">
                            <label>Name*</label>
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter Your Name"
                                
                            />
                        </div>
                        <div className="form-group">
                        <label>Barcode Symbology*</label>
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter Your Username"
                                
                            />
                        </div>
                        <div className="form-group">
                        <label>Cost*</label>
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Cost"
                                
                            />
                        </div>
                            </div>
                            <div className="col-md-6">
                            <div className="form-group">
                            <label>Code*</label>
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter Your code"
                                
                            />
                        </div>
                        <div className="form-group">
                        <label>Category*</label>
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter Your category"
                                
                            />
                        </div>
                        <div className="form-group">
                        <label>Price*</label>
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="price"
                                
                            />
                        </div>
                            </div>
                        </div>
                        <div className="form-group">
                        <label>Tax Method*</label>
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter Your Tax Method"
                                
                            />
                        </div>
                        <div className="form-group">
                        <label>Quantity*</label>
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter Your Quantity"
                                
                            />
                        </div>
                        <div className="form-group">
                        <label>Import Image</label>
                            <input
                                type="file"
                                className="form-control form-control-lg"
                                placeholder="Enter Your product Image"
                               
                            />
                        </div>
                        <div className="form-group">
                        <label>Description / Product Details</label>
                            <textarea 
                                row="4"
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter Your Description"
                                
                            />
                        </div>
                        <button className="btn btn-primary btn-block">Add Product</button>
                    </form>
                </div>
        </div >
        </div>
    );
};

export default AddProduct;