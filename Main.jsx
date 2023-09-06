import React, { useEffect, useState } from 'react'
import SingleProduct from './SingleProduct';

const Main = () => {
    const url = 'https://dummyjson.com/products';
    const [isLoading,setIsLoading] = useState(false);
    const [product,setProducts] = useState([]);
    const getData = async() => {
        setIsLoading(true); //why not = //
        const data = await fetch(url);
        const response = await data.json();
        console.log(response.products);
        setProducts(response.products);
        setIsLoading(false);
    }
    useEffect(() => {
        getData();
    }, [])
    if(isLoading){
        return <h1 className="text-center">Loading...</h1>
    }
    return (
        <>
            <div className="row">
                {product?.map((prod) => {
                    return <SingleProduct key={prod.id} {...prod}/>
                })}
            </div>
        </>
    )
}

export default Main