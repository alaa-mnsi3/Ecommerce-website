import { useState } from 'react';
import { useParams ,useNavigate } from 'react-router-dom';
import useFetch from '../../Custom Hook/useFetch';
import {useDispatch} from 'react-redux';
import { AddCart } from '../../store/Slices/Cart/CartSlice';

function ProductDiscriptionContainer() 
{
    const dispatch=useDispatch()
    const productId = useParams().id
    const Navigate = useNavigate()
    const product = useFetch(`https://fake-products.herokuapp.com/products/${productId}`);


    const [Quantity,setQuantity]= useState(1)

    // Add product to Cart
    const handleAddTocart = () => 
    {
        console.log(product, Quantity)
        dispatch(AddCart({product , Quantity}))
        // Navigate('/cart')
    }

    // add Quantity
    const handlePlusQuantity=()=>
    {
        setQuantity(prev => prev+1)
    }
    // Minus Quantity
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

export default ProductDiscriptionContainer;
