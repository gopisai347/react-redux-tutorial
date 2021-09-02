import React,{useEffect} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux';
import {selectedProducts} from '../redux/actions/productAction'; 



const ProductDetails=()=>{

    const product=useSelector((state)=>state.product);
    const {productId}= useParams();
    console.log(productId);

    const dispatch=useDispatch();
    console.log(product)

    const fetchProductDetail= async()=>{
        const response= await axios.get(`https://fakestoreapi.com/products/${productId}`).catch(err=>{
            console.log("Err",err);
        });
        dispatch(selectedProducts(response.data));
    }

    useEffect(()=>{
        if(productId && productId !== "") fetchProductDetail();
    },[productId]);
    return(
        <div className="card">
        <div className="image">
            <img src={product.image} alt={product.title}/>
        </div>
        <div className="content">
            <div className="header">{product.title}</div>
            <div className="meta price">${product.price}</div>
            <div className="meta">{product.category}</div>
        </div>
    </div>
    )
}

export default ProductDetails;