import {createSlice} from '@reduxjs/toolkit'

const initialState={watchLists:[],idHearts:[]}

const WatchListsSlice =createSlice({
    name : 'WatchListsSlice',
    initialState,
    reducers:
    {
        AddIdHearts:(state,action)=>
        { 
            state.idHearts.push(action.payload)
        },
        RemoveIdHearts:(state,action)=>
        {
            let checkedHearts = state.idHearts
            checkedHearts =checkedHearts.filter(item => item !== action.payload);
            state.idHearts = checkedHearts
        },
        AddToWatchList:(state,action)=>
        {
            state.watchLists.push(action.payload);
        },
        RemoveFromWatchList:(state,action)=>
        {
            let watchList = state.watchLists
            watchList = watchList.filter(product => {return (product.id !== action.payload)})
            state.watchLists = watchList;
        },
    }
})

export const {AddIdHearts,RemoveIdHearts,AddToWatchList,RemoveFromWatchList} = WatchListsSlice.actions;
export default WatchListsSlice.reducer;
