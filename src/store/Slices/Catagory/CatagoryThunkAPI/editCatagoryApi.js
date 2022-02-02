import {createAsyncThunk} from '@reduxjs/toolkit'

export const EditCatagoryApi = createAsyncThunk('Catagory/EditCatagoryApi',
    async(EditedCatagory,{rejectWithValue}) =>
    {
        try
        {
            const response = await fetch(`https://fake-products.herokuapp.com/categories/${EditedCatagory.id}`,
            {
                method: 'PUT',
                headers: {'Content-type':'application/json'},
                body:JSON.stringify(EditedCatagory),
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