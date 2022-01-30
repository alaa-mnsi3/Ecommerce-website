import React from 'react';
import {useDispatch} from 'react-redux';
import {RemoveForomCart} from '../../store/CartSlice';
import {RemoveFromWatchList ,RemoveIdHearts} from '../../store/WatSlice'

function CartContainer(Cart) {
    const dispatch = useDispatch()
    const handleDelete = (id) =>
    {
      if(Cart)
      {
        dispatch(RemoveForomCart(id))
      }
      else
      {
        dispatch(RemoveFromWatchList(id))
        dispatch(RemoveIdHearts(id))
      }
    }
  return {handleDelete};
}

export default CartContainer;

