import {createAsyncThunk} from '@reduxjs/toolkit'

export const fetchedAuth = createAsyncThunk('AuthSlice/fetchedAuth',
    async(_,{rejectWithValue}) => 
    {
        try
        {
            const response = await fetch('https://fake-products.herokuapp.com/auth');
            const data = await response.json();
            return data;
        }
        catch(err)
        {
            return rejectWithValue(err.message)
        }
    }
)