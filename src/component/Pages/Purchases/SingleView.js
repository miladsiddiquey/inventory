import React from 'react';
import { Link } from 'react-router-dom';
import {useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import productData from '../../../AllData/PurchasesData.json';

const SingleView = () => {
    const {productId } = useParams();
    const [productDetail, setProductDetail] = useState({})
    useEffect(() => {
        const allProductData = productData.find(product => product.id == productId);
        setProductDetail(allProductData)
        console.log(allProductData)
    }, [productId])
    const {id, name, brand, quantity,supplier,tp,mrp,description,imei,img} = productDetail;

    return (
        <div>
           <div className="container py-4">
                <Link  to="/" className="btn btn-primary">
                    back to Home
                </Link>
                <h4 className="mt-4">product Id: {id}</h4>
                <hr />
                <div className="row mt-4">
                    <div className="col-md-6">
                    <ul className="list-group  " style={{fontWeight:'700'}}>
                    <li className="list-group-item " >Product Brand :  {brand}</li>
                    <li className="list-group-item " >Name :   {name}</li>
                    <li className="list-group-item " >Product Quantity :  {quantity}</li>
                    <li className="list-group-item " >Supplier :  {supplier}</li>
                    <li className="list-group-item " >Product Tp :  {tp}</li>
                    <li className="list-group-item " >Product Mrp :  {mrp}</li>
                    <li className="list-group-item " >IMEI :  {imei}</li>
                   
                   
                </ul>
                    </div>
                    <div className="col-md-6">
                        <img className="img-fluid" src={img} alt="product img" style={{width:'250px'}} />
                    <li className="list-group-item"> Description :  {description}</li>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default SingleView;