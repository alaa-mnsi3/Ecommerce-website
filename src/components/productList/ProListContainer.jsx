import React from 'react';
import {AddIdHearts,RemoveFromWatchList,AddToWatchList,RemoveIdHearts} from '../../store/WatSlice'
import {useDispatch,useSelector} from 'react-redux';

function ProListContainer() 
{
    let checkedHearts =useSelector(state => state.WatchListsSlice.idHearts)
    const dispatch =useDispatch();

    const handleAddHeart = (product) =>
    {
        dispatch(AddIdHearts(product.id))
        dispatch(AddToWatchList(product))
    }

    const handleRemoveHeart = (product) =>
    {
        dispatch(RemoveFromWatchList(product.id))
        dispatch(RemoveIdHearts(product.id))
    }
  return {checkedHearts,handleAddHeart,handleRemoveHeart};
}

export default ProListContainer;
