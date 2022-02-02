import {createAsyncThunk} from '@reduxjs/toolkit'

export const getCatagoriesApi = createAsyncThunk('Catagory/getCatagoriesApi',
    async(_,{rejectWithValue}) =>
    {
        try
        {
            const response = await fetch('https://fake-products.herokuapp.com/categories');
            const data = await response.json();
            return data;
        }
        catch(err)
        {
            return rejectWithValue(err.message)
        }
    }
)