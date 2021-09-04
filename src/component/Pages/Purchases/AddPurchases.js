import React from 'react';
import './AddPurchases.css';

const AddPurchases = () => {
    return (
        <div>
            <div className="addPurchases">
                <div className="  p-3">
                    <h2 className="text-center mb-4">Add Purchases</h2>
                    <form >
                        <div className="form-group">
                            <label>Product Brand*</label>
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Product Brand"

                            />
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Product Name*</label>
                                    <input
                                        type="text"
                                        className="form-control form-control-lg"
                                        placeholder="Product Name"

                                    />
                                </div>
                                <div className="form-group">
                                    <label>Product Id*</label>
                                    <input
                                        type="text"
                                        className="form-control form-control-lg"
                                        placeholder="Product Id"

                                    />
                                </div>
                                <div className="form-group">
                                    <label>Quantity*</label>
                                    <input
                                        type="number"
                                        className="form-control form-control-lg"
                                        placeholder="Quantity"

                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Supplier*</label>
                                    <input
                                        type="text"
                                        className="form-control form-control-lg"
                                        placeholder="Supplier"

                                    />
                                </div>
                                <div className="form-group">
                                    <label>P.Tp*</label>
                                    <input
                                        type="text"
                                        className="form-control form-control-lg"
                                        placeholder="tp"

                                    />
                                </div>
                                <div className="form-group">
                                    <label>p.Mrp*</label>
                                    <input
                                        type="text"
                                        className="form-control form-control-lg"
                                        placeholder="mrp"

                                    />
                                </div>
                            </div>
                        </div>
                        {/* <div className="form-group">
                        <label>Product Details*</label>
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Details"
                                
                            />
                        </div> */}
                        <div className="form-group">
                            <label>Product IMBI*</label>
                            <div>
                                <input type="radio" id="horns" name=" horns" />
                                <label>  Active</label>
                            </div>
                            <div>
                                <input type="radio" id="horns" name=" horns" />
                                <label>  Deactive</label>
                            </div>

                        </div>
                        <div className="form-group">
                            <label>Product Image</label>
                            <input
                                type="file"
                                className="form-control form-control-lg"
                                placeholder="Import Your product Image"

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

export default AddPurchases;