import React, { useState } from 'react';
import { useParams ,useNavigate } from 'react-router-dom';
import useFetch from '../../custom Hook/useFetch';
import {useDispatch} from 'react-redux';
import { AddCart } from '../../store/CartSlice';

function ProductDiscController() {
    const dispatch=useDispatch()
    const productId = useParams().id
    const Navigate = useNavigate()
    const product = useFetch(`http://localhost:4005/products/${productId}`)

    const [Quantity,setQuantity]= useState(1)

    const handleAddTocart = () => 
    {
        dispatch(AddCart({product , Quantity}))
        Navigate('/cart')
    }

    const handlePlusQuantity=()=>
    {
        setQuantity(prev => prev+1)
    }

    const handleMinusQuantity =() =>
    {
        setQuantity(prev => prev-1)
        if(Quantity <= 0)
        {
            setQuantity(prev => 0)
        }
    }
    return {handleAddTocart,handleMinusQuantity,handlePlusQuantity,product,Quantity};
}

export default ProductDiscController;
