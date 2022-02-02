import {createSlice} from '@reduxjs/toolkit'
import {fetchedAuth} from './AuthThunk/getAuthApi'

const initialState = {Login:null,enableLogin:false,userName:null,error:''}
const AuthSlice = createSlice({
    name:'AuthSlice',
    initialState,
    reducers:{
        LogIn:(state,action)=>
        {
            let existingUser = state.Login;
            existingUser = existingUser?.find(user => {return (user.userName === action.payload.userName)})
            if((existingUser.userName.toLowerCase() === action.payload.userName.toLowerCase())&&(existingUser.password === action.payload.password))
            {
                state.enableLogin = true;
                state.error ='';
                state.userName = action.payload.userName;
            }
            else
            {
                state.enableLogin = false;
                state.error = "your email or password is wrong";
                state.userName = '';
            }
        },
        LogOut:(state,action) =>
        {
            state.enableLogin = false;
            state.userName='';
            state.error ='';
        }
    },
    extraReducers:{
        [fetchedAuth.fulfilled]:(state,action)=>
        {
            state.Login=action.payload;
        },
    }
})
export default AuthSlice.reducer;
export const {LogIn,LogOut} = AuthSlice.actions;

