import React, { useEffect,useState } from 'react';

// fetching for any url in website
function useFetch(url) 
{
    let [products,setProducts]=useState([{}]);
    useEffect(()=>
    {
        fetch(url)
        .then((res)=>res.json())
        .then((data)=>setProducts(data))
        .catch(err=>console.log(err.message))
    },[])
    return(products)
}

export default useFetch;
