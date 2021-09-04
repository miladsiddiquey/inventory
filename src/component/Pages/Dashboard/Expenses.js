import React from 'react';
import './Expenses.css'
import { LineChart, Line, Tooltip, ResponsiveContainer } from 'recharts';

const Expenses = () => {
    const pdata = [

        {
            name: 'Page B',
            uv: 3000,
            Income: 1398,
            amt: 2210,
        },
        {
            name: 'Page C',
            uv: 2000,
            Income: 9800,
            amt: 2290,
        },
        {
            name: 'Page D',
            uv: 2780,
            Income: 3908,
            amt: 2000,
        },
        {
            name: 'Page E',
            uv: 1890,
            Income: 4800,
            amt: 2181,
        },
        {
            name: 'Page F',
            uv: 2390,
            Income: 3800,
            amt: 2500,
        },
        {
            name: 'Page G',
            uv: 3490,
            Income: 4300,
            amt: 2100,
        },
    ];
    return (
        <div className="expenses mt-2">
            <h4>Expenses</h4>
            <h4>$134567</h4>
            <ResponsiveContainer width="100%" aspect={3}>
                <LineChart data={pdata} margin={{top:5, right:40,left:5,bottom:5}} >
                    <Tooltip />
                    <Line type="monotone" dataKey="Income" stroke="#8884d8" strokeWidth={2} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Expenses;