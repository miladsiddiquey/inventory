import React from 'react';
import './Featuard.css'

const Featuard = () => {
    const count = [
        {
            "name": "Total Sales",
            "price": '$31000.45'
        },
        {
            "name": "Total Cost",
            "price": '$31000.45'
        },
        {
            "name": " Product",
            "price": '32000 k'
        }
    ];
    return (
        <div>
            <div className="row">
                {
                    count.map((count, index) => (
                        <div className="col-md-4">
                            <div className="sales">
                                <h4>{count.name}</h4>
                                <h5>{count.price}</h5>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Featuard;