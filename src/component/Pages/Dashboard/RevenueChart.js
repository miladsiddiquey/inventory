import React from 'react';
import './RevenueChart.css'
import { Bar } from 'react-chartjs-2'

const RevenueChart = () => {
    const data = {
        labels: ['jan', 'Feb', 'Mar', 'Apr', 'May','jun'],
        datasets: [
            
            {
                label: 'Sales for 2020 (M)',
               
                data: [3, 2, 4, 5, 6, 4, 7],
                backgroundColor: 'gray'
            },
            {
                label: 'sales for 2021 (M)',
                data: [2, 3, 5, 7, 8, 9, 10],
                backgroundColor: 'green'
            }
        ]
    }
    return (
        <div>
            <div className="row mt-5">
                <div className="col-md-12">
                    <div className="revenue">
                        <h4>Revenue</h4>
                        <Bar style={{ width: '100%' }} data={data} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RevenueChart;