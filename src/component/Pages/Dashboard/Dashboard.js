import React from 'react';

import './Dashboard.css'
import Expenses from './Expenses';
import Featuard from './Featuard';
import IncomeChart from './IncomeChart';
import OrderSummery from './OrderSummery';
import RevenueChart from './RevenueChart';
import StockProduct from './StockProduct';



const Dashboard = () => {
    return (
        <div className="dashboard">
            <Featuard />
            <div className="row">
                <div className="col-md-6">
                    <RevenueChart />
                </div>
                <div className="col-md-6">
                    <StockProduct />
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <div className="row">
                        <IncomeChart />
                    </div>
                    <div className="row">
                        <Expenses />
                    </div>
                </div>
                <div className="col-md-8">
                    <OrderSummery />
                </div>
            </div>


        </div>
    );
};

export default Dashboard;