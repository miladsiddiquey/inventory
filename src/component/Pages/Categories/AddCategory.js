import React from 'react';
import './AddCategory.css';

const AddCategory = () => {
    return (
        <div className="add_category" >
        <div className="  p-3">
                <h2 className="text-center mb-4">Add Category</h2>
                <form>
                <div className="form-group">
                    <label>Import Image</label>
                        <input
                            type="file"
                            className="form-control form-control-lg"
                            placeholder="Enter Your product Image"
                            
                           
                            
                        />
                    </div>
                <div className="form-group">
                <label>Product Name*</label>
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Product name"
                            
                        />
                    </div>
                    
                    <div className="form-group">
                    <label>Category *</label>
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Your category"
                            
                        />
                    </div>
                    <div className="form-group">
                    <label>Code*</label>
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Your code"
                            
                        />
                    </div>
                    
                    <button className="btn btn-primary btn-block">Add Category</button>
                </form>
            </div>
    </div>
    );
};

export default AddCategory;