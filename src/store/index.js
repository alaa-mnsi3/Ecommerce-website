import {configureStore} from '@reduxjs/toolkit'
import cart from './CartSlice';
import WatchListsSlice from './WatSlice'
import { persistStore  , persistReducer} from 'redux-persist';
import storage from "redux-persist/lib/storage";
import {combineReducers} from 'redux';


const persistConfig = {
    key : 'root',
    storage,
    whitelist : ['cart','WatchListsSlice']
}
const reducers = combineReducers({
    cart,
    WatchListsSlice,
});

const persistedReducer = persistReducer(persistConfig,reducers)
const store= configureStore({reducer:persistedReducer,devTools: process.env.NODE_ENV !== 'production',})
export const persistor = persistStore(store);
export default store;