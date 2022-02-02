import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';

//Slices
import cart from './Slices/Cart/CartSlice';
import WatchListsSlice from './Slices/Watched/WatSlice';
import CatagSlice from './Slices/Catagory/CatagorySlice';
import Auth from './Slices/Auth/AuthSlice';

//Storage
import { persistStore  , persistReducer} from 'redux-persist';
import storage from "redux-persist/lib/storage";

// for local storage and store in key
const persistConfig = {
    key : 'Root',
    storage,
    whitelist : ['cart','WatchListsSlice','Auth','CatagSlice']
}

// for all Slices or reducers
const reducers = combineReducers({
    cart,
    WatchListsSlice,
    Auth,
    CatagSlice,
});

const persistedReducer = persistReducer(persistConfig,reducers)

// store
const store= configureStore({
    reducer:persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
})


export const persistor = persistStore(store);
export default store;