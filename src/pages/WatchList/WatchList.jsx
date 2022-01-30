import React from 'react';
import {useSelector} from 'react-redux';
import ListCart from '../../components/CartItems/ListCart/ListCart';

function WatchList() {
  const {watchLists} = useSelector(state => state.WatchListsSlice)
  console.log(watchLists)
  return (
    <div>
      <ListCart data={watchLists} Cart={false}/>
    </div>
  );
}

export default WatchList;
