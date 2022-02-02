import {createAsyncThunk} from '@reduxjs/toolkit'

export const AddCatagoryApi = createAsyncThunk('Catagory/AddCatatagoryApi',
    async(Catagory,{rejectWithValue}) =>
    {
        try
        {
            const response = await fetch(`https://fake-products.herokuapp.com/categories`,
            {
                method: 'POST',
                headers: {'Content-type':'application/json'},
                body:JSON.stringify(Catagory),
            });
            const data = response.json();
            return data;
        }
        catch(err)
        {
            return rejectWithValue(err.message)
        }
    }
)