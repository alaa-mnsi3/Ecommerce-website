import {createSlice} from '@reduxjs/toolkit'
import {getCatagoriesApi} from './CatagoryThunkAPI/getCatagoryApi'
import {deleteCatagoryApi} from './CatagoryThunkAPI/deleteCatagoryApi'
import {AddCatagoryApi} from './CatagoryThunkAPI/addCatagoryApi'
import {EditCatagoryApi} from './CatagoryThunkAPI/editCatagoryApi'


const initialState = {catagories:[],loading:false}

const CatagorySlice = createSlice({
    name:'Catagory',
    initialState,
    reducers:{},
    extraReducers:{
        [getCatagoriesApi.pending]:(state,action)=>
        {
            state.loading = true;
        },
        [getCatagoriesApi.fulfilled]:(state,action)=>
        {
            state.loading = false;
            state.catagories = action.payload;
        },
        [deleteCatagoryApi.pending]:(state,action)=>
        {
            state.loading=true;
        },
        [deleteCatagoryApi.fulfilled]:(state,action)=>
        {
            let FullCatagories= state.catagories;
            FullCatagories=FullCatagories.filter(catagory=> catagory.id !== action.payload);
            state.catagories = FullCatagories;
            state.loading=false;
        },
        [AddCatagoryApi.pending]:(state,action)=>
        {
            state.loading=true;
        },
        [AddCatagoryApi.fulfilled]:(state,action)=>
        {
            state.catagories.push(action.payload);
            state.loading=false;
        },
        [EditCatagoryApi.pending]:(state,action)=>
        {
            state.loading=true;
        },
        [EditCatagoryApi.fulfilled]:(state,action)=>
        {
            let FullCatagories= state.catagories;
            let EditedFullCatagories=FullCatagories.map(catagory=> {return (catagory.id === action.payload.id)? action.payload : catagory});
            state.catagories = EditedFullCatagories;
            state.loading=false;
        }
    }
})

export default CatagorySlice.reducer;