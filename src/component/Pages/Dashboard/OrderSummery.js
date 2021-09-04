import React from 'react';
import './OrderSummery.css'
import { Bar } from 'react-chartjs-2'

const OrderSummery = () => {
    const data = {
        labels: ['jan', 'Feb', 'Mar', 'Apr', 'May','jun','jul','Aug','Sep','Oct','Nov','Dec'],
        datasets: [
            
            {
                label: 'Sales for 2020 (M)',
               
                data: [3, 2, 4, 5, 6, 4, 7,5,9,6,7,3,8],
                backgroundColor: '#FC7947'
            },
            {
                label: 'sales for 2021 (M)',
                data: [2, 3, 5, 7, 8, 9, 10,5,8,7,6,7,3],
                backgroundColor: 'green'
            }
        ]
    }
    return (
       
             <div>
            <div className="row mt-5">
                <div className="col-md-12">
                    <div className="order_summery">
                        <h4>Order Summery</h4>
                        <Bar style={{ width: '100%' }} data={data} />
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default OrderSummery;