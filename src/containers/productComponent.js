import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const ProductComponent=()=>{
    const products=useSelector((state)=>state.allproducts.products);
    
    const renderlist=products.map((product,index)=>{
        // const [id]=product;
        return(
            <div>
           

            {/* <div>{id}</div>

            <div>{title}</div> */}

        <div className="four Column wide" key={index}>
            <Link to={`/product/${product.id}`}>
            <div className="ui link cards">
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
            </div>
            </Link>
        </div>
        </div>
        )
    })
    // console.log(products);
    // const {id,title}=products[0];
    return(
        <>{renderlist}</>
    )
}

export default ProductComponent;