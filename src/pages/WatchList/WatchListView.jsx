import React from 'react';
import {useSelector} from 'react-redux';
import CartListView from '../../components/CartList/CartListView';
import {NoItems} from '../Cart/CartView';

function WatchListView() {
  const {watchLists} = useSelector(state => state.WatchListsSlice)
  
  return (
    <div>
      {watchLists.length?
      <CartListView data={watchLists} Cart={false}/>
      :
      <NoItems>No Items in WishList</NoItems>
      }
    </div>
  );
}


export default WatchListView;
