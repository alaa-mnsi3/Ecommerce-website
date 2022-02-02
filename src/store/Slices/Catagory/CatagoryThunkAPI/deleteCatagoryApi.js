import {createAsyncThunk} from '@reduxjs/toolkit'

export const deleteCatagoryApi = createAsyncThunk('Catagory/deleteCatagoryApi',
    async(id,{rejectWithValue}) =>
    {
        try
        {
            const response = await fetch(`https://fake-products.herokuapp.com/categories/${id}`,
            {
                method: 'DELETE',
                headers: {'Content-type':'application/json'}
            });
            const data = response.json();
            return id;
        }
        catch(err)
        {
            return rejectWithValue(err.message)
        }
    }
)