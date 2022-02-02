import {useDispatch,useSelector} from 'react-redux';
//Actions
import {AddIdHearts,RemoveFromWatchList,AddToWatchList,RemoveIdHearts} from '../../store/Slices/Watched/WatSlice'

function ProductListContainer() 
{
    let checkedHearts =useSelector(state => state.WatchListsSlice.idHearts)
    const dispatch =useDispatch();

    // add background to Heart and add product to watchList
    const handleAddHeart = (product) =>
    {
        dispatch(AddIdHearts(product.id))
        dispatch(AddToWatchList(product))
    }

    // Remove background from Heart and remove product from watchList
    const handleRemoveHeart = (product) =>
    {
        dispatch(RemoveFromWatchList(product.id))
        dispatch(RemoveIdHearts(product.id))
    }

  return {checkedHearts,handleAddHeart,handleRemoveHeart};
}

export default ProductListContainer;
