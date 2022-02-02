import {useDispatch} from 'react-redux';

// action from Slices
import {RemoveForomCart} from '../../store/Slices/Cart/CartSlice';
import {RemoveFromWatchList ,RemoveIdHearts} from '../../store/Slices/Watched/WatSlice'

// test what is coming if cart or watchlist?
//if true ===> cart and dispatch it will from catSlice
//if false ==> WatchList
function CartListContainer(Cart) 
{
  const dispatch = useDispatch()

  // Delete depend on id wether cart or watchlist
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

export default CartListContainer;

